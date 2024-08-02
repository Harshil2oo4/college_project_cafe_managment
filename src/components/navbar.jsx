import "./navbar.css";
import { MdWifiCalling3 } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid sticky_navbar">
          <a class="navbar-brand" href="#">
            <img src="/src/img/logo.png" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ul_demo">
              <li class="nav-item bg_color">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <select class="bg_color design_select_tag_navbar">
                <option className="design_navbar_option">Menu</option>
                <option className="design_navbar_option">Capachino</option>
                <option className="design_navbar_option">Coffe De Madre</option>
                <option className="design_navbar_option">Soft Coffee</option>
                <option className="design_navbar_option">Hot Tea</option>
              </select>
              <select class="bg_color design_select_tag_navbar">
                <option className="design_navbar_option">Menu</option>
                <option className="design_navbar_option">Salad with Nachos</option>
                <option className="design_navbar_option">Ham Burger</option>
                <option className="design_navbar_option">Tea With Vadapav</option>
                <option className="design_navbar_option">Cold coffee</option>
              </select>
              <li class="nav-item bg_color">
                <a class="nav-link " aria-disabled="true">
                  Offers
                </a>
              </li>
            </ul>
            <div class="spacing_both margin_padding">
              <button type="button" class="btn position-relative bg_color_tra">
                <HiShoppingCart />
                <span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger top_pack">
                  8
                </span>
              </button>
              <FiSearch className="search_logo_spacing" />
            </div>
            <form class="d-flex display_flex" role="search">
              <button class="btn  display_spacing" type="submit">
                <MdWifiCalling3 className="spacing" />
                Contact
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
