import "./Footer.css";
import { FaLocationDot} from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container paddings innerWidth">
        <div className="f-left-side">
          <img src="src\assets\Logo.png" alt="" width={135} />
          <span className="f-left-des secondaryText">
            Our vision is to give a best solution
            <br />  for all people.
          </span>
        </div>
        <div className="f-right-side">
          <span className="f-right-side-title primaryText ">
            Information
            <br />
          </span>

          <span className="f-right-side-des secondaryText" >
          <FaLocationDot /> STIGMATA TECHNO SOLUTIONS <br/> No 23, 2nd Floor, Vembuli Amman Koil
            Street,<br/> Pazhavanthangal Chennai 600 114.<br/> (Near Chennai Airport)
          </span>
          <div className="f-menu">
            
            <span>
             <a href="https://stigmatatech.com/services/">Services</a>
            </span>
            <span>
              <a href="https://stigmatatech.com/services/">Product</a>
            </span>
            <span>
              <a href="https://stigmatatech.com/about/">About us</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
