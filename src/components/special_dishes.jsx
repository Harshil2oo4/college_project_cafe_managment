import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./special_dishes.css";
import CardCate from "./cards";

// const simpleNextArrow = (props) => {
//   const { className, style, onclick } = props;
//   return (
//     <div
//       className="simple_next_dish"
//       style={{ ...style }}
//       onclick={onclick}
//     >
//       NEXT
//     </div>
//   );
// };

// const simpleprevArrow = (props) => {
//   const { className, style, onclick } = props;
//   return (
//     <div
//       className="simple_prev_dish"
//       style={{ ...style }}
//       onclick={onclick}
//     >
//       BACK
//     </div>
//   );
// };

const SpecialDishes = () => {

  const [recipe, setrecipe] = useState([]);
  // const slider = useref(null);

  useEffect(() => {
    fetch("/src/img/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setrecipe(specials);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
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

    // nextArrow: <simpleNextArrow />,
    // prevArrow: <simpleprevArrow />,
  };
  return (
    <div className="main_container">
      <div className="info_container">
        <p className="text_color">SPECIAL DISHES</p>
        <h2 className="bold_text_design_spe_dish">
          Standout Dishes From Our Menu
        </h2>
      </div>

      {/* <div>
        <button onClick={() => slider.current.slickPrev()}>Prev</button>
        <button onclick={() => slider.current.slickNext()}>Next</button>
      </div> */}

      <Slider 
      // ref={slider}
      {...settings}>
        {recipe.map((item, i) => (
          <CardCate key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDishes;
