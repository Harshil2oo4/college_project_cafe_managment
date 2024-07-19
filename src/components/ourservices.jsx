import "./ourservices.css";

const OurServices = () => {
  const serviceList = [
    {
      id: 1,
      title: "CATERING",
      des: "Delight your guests with our flavors and presentation",
      image: "/src/img/icon1.png",
    },
    {
      id: 2,
      title: "FAST DELIVERY",
      des: "We deliver your order promptly to your door",
      image: "/src/img/icon2.png",
    },
    {
      id: 3,
      title: "ONLINE ORDERING",
      des: "Explore menu & order with ease using our Online Ordering ",
      image: "/src/img/icon3.png",
    },
    {
      id: 4,
      title: "GIFT CARDS",
      des: "Give the gift of exceptional dining with Foodi Gift Cards",
      image: "/src/img/icon4.png",
    },
  ];

  return (
    <div className="main_container_ourservices">
      <div className="left_container_ourservices">
        <div className="info_ourservices">
          <p className="color_p_ourservices">OUR STORY & SERVICES</p>
          <h1 className="h1_bold_ourservices">
            Our Culinary Journey And Services
          </h1>
          <p className="info_details_ourservices">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="bg_color_btn_order position_btn_ourservices">
            Explore
          </button>
        </div>
      </div>
      <div className="right_container_ourservices">
        <div className="img_list_green_ourservices">
           {serviceList.map((service) => (
            <div className="img_every_list_servicelist" key={service.key}>
              <img className="img_hover_ourservices" src={service.image} alt="" />
              <h5 className="green_color_text_ourservices">{service.title}</h5>
              <p className="p_des_ourservices">{service.des}</p>
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
