import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";

// react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FreeBook() {
  const filterlistdata = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl order-2 container max-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          hic laudantium soluta.
        </p>
      </div>
      <div className="mt-16">
        <Slider {...settings}>
          {filterlistdata.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
        
      </div>
    </div>
  );
}

export default FreeBook;
