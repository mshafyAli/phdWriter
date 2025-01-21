import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

const images = [
    "/uni_img1.webp",
    "/uni_img2.webp",
    "/uni_img3.webp",
    "/uni_img4.webp",
    "/uni_img5.webp",
    "/uni_img6.webp",
    "/carousal1.svg",
    "/carousal2.svg",
    "/carousal3.svg",
    "/carousal4.svg",
    "/carousal5.svg",




  ];

const settings = {
  infinite: true,
  speed: 400,
  swipe: true,
  swipeToSlide: true,
  draggable: true,
  autoplay: true,
  slidesToShow: 5, // Show 4 images on desktop
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  dots: false, // Show dots for navigation
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // For tablets and smaller devices
      settings: {
        slidesToShow: 3, // Show 3 images on tablets
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For small tablets
      settings: {
        slidesToShow: 2, // Show 2 images on small tablets
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // For mobile devices
      settings: {
        slidesToShow: 2, // Show 1 image on mobile
        slidesToScroll: 1,
      },
    },
  ],
};

const PubServices = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto mt-2">
      <div className="md:pt-4 pb-4 text-center">
        <h1 className="text-xl md:text-3xl font-bold">Academic Success Start Here</h1>
        <p className="text-gray  tex-sm pt-2">
          All Our Writers Are Masters And PhD Graduates From Trusted UK
          Universities.
        </p>
      </div>

      <Slider {...settings} className="">
        {images.map((img, i) => (
          <div key={i} className="w-full">
            <Image
              src={img}
              width={300}
              height={300}
              className="w-[70%] mx-auto"
              alt={`Carousel image ${i + 1}`}
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PubServices;
