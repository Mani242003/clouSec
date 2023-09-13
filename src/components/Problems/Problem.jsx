import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Problem.css";
import Lottie from "lottie-react";
import problemAni from "../../assets/animation/problemAni.json";
import data from "../../utils/accordion";
import { useState } from "react";
import warningLogo from "../../assets/svg/warningLogo.svg";
const Problem = () => {
  const [className, setClassname] = useState(null);
  return (
    <section className="p-wrapper">
      <div className="innerWidth p-container">
        <div className="p-header">
          <span className="p-header-text ">
            Cloud Security Challenges We Solve
          </span>
        </div>

        <div className="p-main">
          {/* LEFT SIDE */}
          <div className=" p-left">
            <div className="p-img-container">
              <Lottie animationData={problemAni} width={200} />
            </div>
          </div>
          {/* RightSide SIDE */}
          <div className="p-right">
            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                return (
                  <AccordionItem
                    key={i}
                    className={`accordionItem ${className}`}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassname("expanded")
                              : setClassname("collapsed")
                          }
                        </AccordionItemState>
                        <div className="accodionContainer">
                          <div className=" icon">
                            <img src={warningLogo} alt="" />
                          </div>
                          <span className="p-accord-headings ">
                            {item.heading}
                          </span>
                          <div className="icon arrowIcon">
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <span className="p-accodionDetial">{item.detail}</span>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
