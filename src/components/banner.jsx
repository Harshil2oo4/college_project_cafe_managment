import "./banner.css";

const Banner = () => {
  return (
    <div class="main_continer border">
      <div className="left_side margin_padding">
        <h2 className="font_wight">
          Dive into Delight Of Delectable
          <span className="col_green">Food</span>
        </h2>
        <p className="design_p_tag spacing ">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <button className="bg_color_btn_order ">Order Now</button>
      </div>

      <div className="right_side img_space margin_padding">
        <img
          className="resize_img_banner"
          src="/src/img/banner.png"
          alt="Banner_Img"
        />
        <div className="spacing_margin">
          <div className="display_flex_banner">
            <div>
              <img
                src="/src/img/b-food1.png"
                alt=""
                className="display_flex_banner_img"
              />
            </div>
            <div className="display_flex_banner_info">
              <h5 className="heavy_font_h5">Spicy Noodles</h5>
              <p className="rating">Rating 4.5/5</p>
              <p className="font_color_price_banner">₹670</p>
            </div>
          </div>

          <div className="display_flex_banner spacing_duplicate_banner">
            <div>
              <img
                src="/src/img/b-food1.png"
                alt=""
                className="display_flex_banner_img"
              />
            </div>
            <div className="display_flex_banner_info">
              <h5 className="heavy_font_h5">Spicy Noodles</h5>
              <p className="rating">Rating 4.5/5</p>
              <p className="font_color_price_banner">₹670</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
