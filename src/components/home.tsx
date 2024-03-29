import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Eat Well, Live Well {"–"} Order Now!
            </h1>
            <p className="primary-text">
              Healthy switcher chefs do all the prep work, like peeding,
              chopping & marinating, so you can cook a fresh food.
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
