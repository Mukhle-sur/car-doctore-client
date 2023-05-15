import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Booking = () => {
  const service = useLoaderData();
  const { title, img, service_id, price, _id } = service;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const first = form.first.value;
    const last = form.last.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const massage = form.massage.value;
    const bookingInfo = {
      firstName: first,
      lastName: last,
      phoneNo: phone,
      email: email,
      massage: massage,
      image: img,
      id: _id,
      service_id: service_id,
      service: title,
      price: price,
    };
    console.log(bookingInfo);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Service Added",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-4xl mb-5">Booking : {title}</h1>
      <div className="bg-[#F3F3F3] p-24 rounded-xl">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="First Name"
                name="first"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Last Name"
                name="last"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Your Phone"
                name="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <textarea
              name="massage"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="input input-bordered pt-3 h-[250px] resize-none"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn btn-error text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
