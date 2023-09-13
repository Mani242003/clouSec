import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper " id="get-started">
      <div className="g-container paddings innerWidth ">
        <div className="g-inner-container">
          <span className="g-inner-title">Get Started with ClouSec</span>
          <span className="g-inner-detials">Welcome to ClouSec, where we bring you a comprehensive solution and 
            <br/>
            Feel Free to Contact Us for you Quries. 
          </span>
         <div className="g-button-container">
         <button className="g-button">
            <a href="mailto:jerome.stigmata@gmail.com">Get Started</a>
          </button>
         </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
