import "./testimoials.css";

const TestiMoials = () => {
  return (
    <div className="main_container_testimoils">
      <div className="left_side_testi">
        <div className="img_container">
          <img
            className="img_resize_testi"
            src="/src/img/testimonials.png"
            alt=""
          />
        </div>
      </div>
      <div className="right_side_testi">
        <div className="right_side_testi_container">
          <p className="p_conatiner_testi">Testimonials</p>
          <h1 className="h1_container_testi">
            What Our Customers Say About Us
          </h1>
          <p className="p_info_container_testi">
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
        </div>
        <div className="img_review_container">
          <div className="img_size_zindex">
            <img className="img_size_review_testi first_img_resize_testi"  src="/src/img/testimonial1.png" alt="" />
            <img className="img_size_review_testi left_side_img"  src="/src/img/testimonial2.png" alt="" />
            <img className="img_size_review_testi left_side_img"  src="/src/img/testimonial3.png" alt="" />
          </div>
          <div className="feedback_review_testi">
            <h5 className="h5_feedback_bold">Customer Feedback</h5>
            <div className="display_flex_testi_rating">
            <p className="bold_rating_point">Rating 4.5/5 </p>
              <p className="color_gray_rating_testi">(34.8k Reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiMoials;
