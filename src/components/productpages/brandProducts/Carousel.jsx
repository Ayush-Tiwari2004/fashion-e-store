import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({images}) => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "66px", // Important for 3D effect
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
        }
      }
    ]
  };


  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="px-2 md:slide-container blur-none">
            <div className="relative w-full h-80 overflow-hidden rounded-xl transition-all duration-300 ease-in-out">
              <img
                src={src}
                alt={`Poster ${idx + 1}`}
                className="w-full h-full mt-2 object-cover rounded-2xl transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
