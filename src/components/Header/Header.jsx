import "./Header.css";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper ">
      <div className="h-container  innerWidth">
        <div className=" h-img-container ">
          <motion.img
            src="src\assets\logoFinal-removebg-preview.png"
            alt=""
            width={120}
            className="img"
          />
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className=" flexCenter h-menu-container"
            style={getMenuStyle(menuOpened)}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={10}
              duration={300}
              className="h-menu-link"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Home
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={30}
              duration={300}
              className="h-menu-link"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Features
            </Link>
            <Link
              to="roadmap"
              spy={true}
              smooth={true}
              offset={30}
              duration={300}
              className="h-menu-link"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Roadmap
            </Link>
            <Link
              to="solutions"
              spy={true}
              smooth={true}
              offset={30}
              duration={400}
              className="h-menu-link"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Solutions
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
              className="h-menu-link"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Contact
            </Link>

            <button className="h-button">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                onClick={() => {
                  setMenuOpened(false);
                }}
              >
                Request Demo
              </Link>
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="header-menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </section>
  );
};

export default Header;
