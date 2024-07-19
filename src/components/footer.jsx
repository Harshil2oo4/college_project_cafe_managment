import "./footer.css";

const Footer = () => {
  return (
    <>
      <div class="container br_tag_container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <img src="/src/img/logo.png" alt="" />
            <p className="spacing_p_in_footer_left_side">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h5 className="bold_footer">Userful Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  About us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  Events
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  Blogs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 className="bold_footer">Main Menu</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  Offers
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  Menus
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  Reservation
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 className="bold_footer">Contact Us</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  example@gmail.com
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  +91 7535672456
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary space_footer"
                >
                  Social Media
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">
              Copyright © 2024 - All right reserved
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
