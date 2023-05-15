import { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-14">
      <div className="text-center max-w-[655px] mx-auto">
        <h4 className="text-base font-bold text-[#FF3811]">Services</h4>
        <h2 className="text-5xl font-bold mb-5">Our Service Area</h2>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCart key={service._id} service={service}></ServicesCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
