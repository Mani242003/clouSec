import homeAnimi1 from "../../assets/animation/homeAnimi1.json";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="home-wraper " id="home">
      <motion.div
        initial={{ y: "3rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 3,
          type: "ease-in",
        }}
        className="innerWidth home-container"
      >
        <div className="phoneResponsiveContainer">
          <Lottie animationData={homeAnimi1} />
        </div>
        {/* Left Side */}
        <div className="home-left">
          <div className="home-title">
            <div className="home-circle"></div>
            <motion.h1>
              Your Cloud,
              <br />
              <span className="home-subTitle">FORTIFIED</span>
            </motion.h1>
          </div>
          <div className="home-des">
            <span>
              Welcome to ClouSec, where we bring you a comprehensive solution
              for enhanced security, streamlined inventory management, and
              efficient suppress workflow handling. Our cutting-edge product
              empowers businesses to stay ahead in the ever-evolving landscape
              of security challenges and inventory control.
            </span>
          </div>
          <div className=" home-button-wrapper">
            <div className="home-button-left">
              <Link
                to="get-started"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="h-menu-link"
              >
                Get Started
              </Link>
            </div>
            <div className="home-button-right">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="h-menu-link"
              >
                ABOUT US<span>&gt;</span>
              </Link>
            </div>
          </div>
          <div className="home-countContainer">
            <div className=" count-start">
              <span>
                <CountUp start={0} end={50} duration={4} />
                <span>+</span>
              </span>
              <span className="">Solutions</span>
            </div>
            <div className=" count-start">
              <span>
                <CountUp start={0} end={200} duration={6} />
                <span>+</span>
              </span>
              <span>Happy Customers</span>
            </div>
            <div className=" count-start">
              <span>
                <CountUp start={0} end={100} duration={4} />
                <span>+</span>
              </span>
              <span>Products</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="img-container">
            <Lottie animationData={homeAnimi1} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
