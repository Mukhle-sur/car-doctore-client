import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServicesCart = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-sm border p-6">
      <figure className="">
        <img src={img} alt="Shoes" className="rounded-xl w-full h-52" />
      </figure>
      <div className="card-body p-0 mt-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="card-actions items-center">
          <p className="text-xl font-semibold text-[#FF3811]">
            Price : ${price}
          </p>
          <Link to={`/book/${_id}`}>
            <FaArrowRight className="text-xl font-semibold text-[#FF3811]"></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
