import "./Contact.css";
import contactAnimi from "../../assets/animation/contactAnimi.json";
import Lottie from "lottie-react";
import { MdCall } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="c-wraper" id="contact">
      <motion.div className="innerWidth  c-container"
       initial={{ y: "1rem", opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{
         duration: 2,
         type: "ease-in",
       }}>
      <div className="c-header-container">
            <span className="c-header-title">Our Contacts</span>
            <span className="c-header-subTitle">Easy to Contact us</span>
            <span className="c-header-des">
              Feel Free to Contact Us for you Quries. We will get back to you as
              soon as possible
            </span>
          </div>
          <div className="c-main-content-container">
                    {/* RIGHT */}
          <div className="c-right">
          <div className="c-img-container">
            <Lottie animationData={contactAnimi} />
          </div>
        </div>
        {/* Left */}
        <div className="c-left ">
         
          <div className="c-row1 row modesContainer">
            <div className="c-mode-1 mode">
              <div className="c-mode-header-container">
                <div className="c-mode-header-left-container">
                  <MdCall size={25} color="#1f3e72" />
                </div>
                <div className="c-mode-header-right-container">
                  <span className="c-mode-header-right-text">
                    Call
                    <br />
                  </span>
                  <span className="c-mode-header-right-detials">
                    +91 9790845787<br/>+91 9345336553<br/>+91 9840068989
                  </span>
                </div>
              </div>
              <div className="c-mode-button"><a href="tel:+91 9345336553" >Call Now</a></div>
            </div>
            <div className="c-mode-2 mode">
              <div className="c-mode-header-container">
                <div className="c-mode-header-left-container">
                  <HiChatBubbleBottomCenter size={25} />
                </div>
                <div className="c-mode-header-right-container">
                  <span className="c-mode-header-right-text">
                    Message
                    <br />
                  </span>
                  <span className="c-mode-header-right-detials">
                    +91 9345336553
                    <br />
                    +91 9840068989
                  </span>
                </div>
              </div>
              <div className="c-mode-button"><a href="sms:+91 9840068989">Message Now</a></div>
            </div>
          </div>
          <div className="c-row-2 row">
            <div className="c-mode-3 mode">
              <div className="c-mode-header-container">
                <div className="c-mode-header-left-container">
                  <TbWorld size={25} />
                </div>
                <div className="c-mode-header-right-container">
                  <span className="c-mode-header-right-text">
                    Website
                    <br />
                  </span>
                  <span className="c-mode-header-right-detials">
                    www.clousec.io
                    <br />
                    www.stigmatatech.com
                  </span>
                </div>
              </div>
              <div className="c-mode-button">Visit Now</div>
            </div>
            <div className="c-mode-4 mode">
              <div className="c-mode-header-container">
                <div className="c-mode-header-left-container">
                  <AiFillMail size={20} />
                </div>
                <div className="c-mode-header-right-container c-mode-4-header-right-container">
                  <span className="c-mode-header-right-text">
                    Mail
                    <br />
                  </span>
                  <span className="c-mode-header-right-detials">
                    jerome@stigmatatech.com
                    <br />jerome@stigmata.co.in
                    <br />
                    jerome.stigmata@gmail.com
                  </span>
                </div>
              </div>
              <div className="c-mode-button">Mail Now</div>
            </div>
          </div>
        </div>
          </div>
  
      
      </motion.div>
    </section>
  );
};

export default Contact;
