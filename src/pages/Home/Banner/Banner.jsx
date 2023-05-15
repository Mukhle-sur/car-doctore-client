import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
// import img5 from "../../../assets/images/banner/5.jpg";
// import img6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-xl mt-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  w-full h-full bg-opacity-90">
          <div className="p-24">
            <div>
              <h1 className="text-6xl font-bold text-white leading-tight max-w-md mb-5">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg leading-7 text-white max-w-md">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-primary text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  w-full h-full bg-opacity-90">
          <div className="p-24">
            <div>
              <h1 className="text-6xl font-bold text-white leading-tight max-w-md mb-5">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg leading-7 text-white max-w-md">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-primary text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  w-full h-full bg-opacity-90">
          <div className="p-24">
            <div>
              <h1 className="text-6xl font-bold text-white leading-tight max-w-md mb-5">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg leading-7 text-white max-w-md">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-primary text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  w-full h-full bg-opacity-90">
          <div className="p-24">
            <div>
              <h1 className="text-6xl font-bold text-white leading-tight max-w-md mb-5">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg leading-7 text-white max-w-md">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-primary text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
