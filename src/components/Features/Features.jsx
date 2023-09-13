import "./Features.css";
// import "./slick-theme.css";
// import "./slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderData from "../../utils/common";

const Features = () => {
  var settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 1;
    }
    if (!document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 4;
    }
  };
  return (
    <section className="Features-wrapper" id="features">
      <div className=" Features-Container">
        <div className="features-header-container">
          <span className="orangeText">Explore Our Product Features</span>
        </div>
        <div className="feature-slider-container">
          <Slider {...settings} slidesToShow={getMenuStyle()}>
            {sliderData.map((item, i) => (
              <SliderCard
                key={i}
                title={item.title}
                imageUrl={item.image}
                description={item.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Features;

const SliderCard = ({ title, imageUrl, description }) => {
  return (
    <div className="feature-slider-card">
      <div className="features-slider-header">{title}</div>
      <div className="features-slider-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="features-slider-des">{description}</div>
    </div>
  );
};
