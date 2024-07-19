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
              <li class="nav-item dropdown bg_color">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown bg_color">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
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
