import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Catagories from "./components/categories";
import SpecialDishes from "./components/special_dishes";
import TestiMoials from "./components/testimoials";
import OurServices from "./components/ourservices";
import "./App.css";

function App() {
  return (
    <div className="main_body">
      <Navbar />
      <Banner />
      <Catagories />
      <SpecialDishes />
      <TestiMoials />
      <OurServices />
      <Footer />
    </div>
  );
}
export default App;
