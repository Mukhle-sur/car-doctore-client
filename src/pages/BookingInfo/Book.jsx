const Book = ({ booking, handleDelete, handleBookingUpdate }) => {
  const { _id, image, service, price, phoneNo } = booking;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="avatar">
            <div className="w-24 rounded h-24">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">{service}</h4>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>22-10-2022</td>
      <td>Phone : {phoneNo}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirm</span>
        ) : (
          <button
            onClick={() => handleBookingUpdate(_id)}
            className="btn btn-error text-white btn-sm"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default Book;
