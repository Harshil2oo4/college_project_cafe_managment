import {FaHeart} from "react-icons/fa"
import { useState } from "react";
import "./cards.css";

const CardCate = ({ item }) => {

  // const[isheartfilled , setisheartfilled] = useState(false)

  // const handleHasrtClick =() => {
  //   setisheartfilled(!isheartfilled)
  // }
  return (
    <div className="cards_design">
      <div className="design_heart_cards">
        <FaHeart className="design_heart" 
        // onClick={handleHasrtClick}
        />
      </div>
      <img src={item.image} class=" size_img_cards" alt="..." />
      <div className="design_des_name_cards">
        <h5 className="card-title bold_text_cards">{item.name}</h5>
        <p class="card-text">
          {item.recipe}
        </p>
        <div className="total_rating">
        <p className="color_price_total_cards"><span className="color_price_cards">$</span>{item.price}</p>
        <p className="rating_cards">Rating 4/5</p>
        </div>
      </div>
    </div>
  );
};
export default CardCate;
