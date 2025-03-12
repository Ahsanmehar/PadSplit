import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white w-[45px] max10:w-[38px] h-[45px] max10:h-[38px] rounded-full shadow-lg hover:bg-gray-200 transition"
    >
      <i className="bi bi-arrow-right-circle-fill text-2xl max10:text-[23px] text-[#16457E]"></i>
    </button>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 bg-white w-[45px] max10:w-[38px] h-[45px] max10:h-[38px] rounded-full shadow-lg hover:bg-gray-200 transition"
    >
      <i className="bi bi-arrow-left-circle-fill text-2xl max10:text-[23px] text-[#16457E]"></i>
    </button>
  );
};

function RoomDescriptionSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const images = [
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1740&auto=format&fit=crop",
  ];

  return (
    <div className="w-full flex max6:flex-col max6:gap-[20px] justify-between relative">
      <div className="w-[58%] max6:w-[100%] h-full relative">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div className="w-full h-[450px] max9:h-[300px] max10:h-[200px]" key={index}>
              <img
                src={src}
                alt="Error-Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[41%] max6:w-[100%] flex flex-col justify-between max6:gap-[20px]">
        <img
          src="https://images.unsplash.com/photo-1566836610593-62a64888a216?q=80&w=1977&auto=format&fit=crop"
          alt="Error-Image"
          className="w-full h-[100px] object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1583753075968-1236ccb83c66?q=80&w=1954&auto=format&fit=crop"
          alt="Error-Image"
          className="w-full h-[100px] object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1782&auto=format&fit=crop"
          alt="Error-Image"
          className="w-full h-[100px] object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=1742&auto=format&fit=crop"
          alt="Error-Image"
          className="w-full h-[100px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default RoomDescriptionSlider;
