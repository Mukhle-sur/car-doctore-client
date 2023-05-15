import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero mt-14">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-8 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2">
          <h4 className="text-xl font-bold text-[#FF3811] mb-5">About Us</h4>
          <h3 className="text-5xl font-bold text-[#151515]  max-w-sm mb-7">
            We are qualified & of experience in this field
          </h3>
          <p className="text-base text-[#737373] mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or random words which don not look even slightly believable.
          </p>
          <p className="text-base text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or random words which don not look even slightly believable.
          </p>
          <button className="btn  btn-error text-white mt-7">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
