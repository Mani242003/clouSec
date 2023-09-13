
import "react-accessible-accordion/dist/fancy-example.css";
import "./Solution.css";
import Lottie from "lottie-react";

import solutionAnimi from "../../assets/animation/solutionAnimi.json";
import tickAnimi from "../../assets/animation/tickAnimi.json";


const Problem = () => {

  return (
    <section className="s-wrapper" id="solutions">
      <div className="innerWidth s-container">
        <div className="s-header">
          <span className="s-header-text ">
            Why Choose Clousec for
            <br />
            Unbeatable Cloud Security?
          </span>
        </div>

        <div className="s-main">


            {/* RightSide SIDE */}
            <div className=" s-right">
            <div className="s-img-container">
              <Lottie animationData={solutionAnimi} />
            </div>
          </div>
          {/* LEFT SIDE */}

          <div className="s-left">
            <div className="s-left-content-conatier">
              <div className="s-left-single-content-container">
                <div className="s-left-single-content-left-container">
                  <Lottie animationData={tickAnimi} className="ticAnimate" />
                </div>
                <div className="s-left-single-content-right-container">
                  <span>Centralized Security Findings Visibility</span>
                  
                </div>
              </div>
              <div className="s-left-single-content-container">
                <div className="s-left-single-content-left-container">
                  <Lottie animationData={tickAnimi} className="ticAnimate" />
                </div>
                <div className="s-left-single-content-right-container">
                  <span>Compliance and Audit Readiness</span>
                
                </div>
              </div>
              <div className="s-left-single-content-container">
                <div className="s-left-single-content-left-container">
                  <Lottie animationData={tickAnimi} className="ticAnimate" />
                </div>
                <div className="s-left-single-content-right-container">
                  <span>Effective Workflow for Suppressing SecurityFindings</span>
                </div>
              </div>
              <div className="s-left-single-content-container">
                <div className="s-left-single-content-left-container">
                  <Lottie animationData={tickAnimi} className="ticAnimate" />
                </div>
                <div className="s-left-single-content-right-container">
                  <span>Time and Effort Savings</span>
                </div>
              </div>
              <div className="s-left-single-content-container">
                <div className="s-left-single-content-left-container">
                  <Lottie animationData={tickAnimi} className="ticAnimate" />
                </div>
                <div className="s-left-single-content-right-container">
                  <span>
                  Enhanced Reporting Capabilities
                  </span>
                </div>
              </div>
              <div className="s-left-single-content-container">
                <div className="s-left-single-content-left-container">
                  <Lottie animationData={tickAnimi} className="ticAnimate" />
                </div>
                <div className="s-left-single-content-right-container">
                  <span>Improved Collaboration and CommunicationFlexibility</span>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Problem;
