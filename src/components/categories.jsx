import "./categories.css";


const Catagories = () => {

 
  const categoriesitms = [
    {
      id: "001",
      title: "Main Dish",
      des: "(86 Dishes)",
      img: "/src/img/img1.png",
    },
    {
      id: "002",
      title: "Break Fast",
      des: "(12 Break Fast)",
      img: "/src/img/img2.png",
    },
    {
      id: "003",
      title: "Dessert",
      des: "(48 Dessert)",
      img: "/src/img/img3.png",
    },
    {
      id: "004",
      title: "Browse All",
      des: "(255 Items)",
      img: "/src/img/img4.png",
    },
  ];
  return (
    <div className="main_container">
      <div className="design_center_cate_div2">
        <p className="color_etc_cate_text">CUSTOMER FAVORITES</p>
        <h1 className="bold_text_cate_h2">Popular Catagories</h1>
      </div>

      <div className="cart_img_details_cate">
        {categoriesitms.map((item, i) => (
          <div key={i} className="for_border_demo_cate_cart">
            <img src={item.img} alt="" className="design_img" />
            <h5 className="bold_title_cate_cart">{item.title}</h5>
            <p className="good_font_cate_cart">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
