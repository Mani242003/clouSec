import "./RoadMap.css";
const RoadMap = () => {
  return (
    <section className="r-wraper " id="roadmap">
      <div className="r-header-titel">
        <span className="primaryText r-header">
          Elevating Cloud Security to New Horizons
        </span>
      </div>

      <div className="r-timeLine-container">
        <div className="r-container r-left-container">
          <img src="src\assets\aws.png" alt="" className="r-left-outerImg" />
          <div className="textBoxContainer">
            <div className="textBoxContainer-left">
              <img src="src\assets\aws.png" alt="" />
              <small className="r-date">SEP,2023</small>
            </div>
            <div className="textBoxContainer-right">
              <p className="r-dec">
                AWS Identity Center Dashboard implementation
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>

        <div className="r-container r-right-container">
          <img src="src\assets\EC2.png" alt="" className="r-left-outerImg" />

          <div className="textBoxContainer">
            <div className="textBoxContainer-right">
              <p className="r-dec">EC2 and EKS dashboard</p>
              <span className="right-container-arrow"></span>
            </div>
            <div className="textBoxContainer-left">
              <img src="src\assets\EC2.png" alt="" />
              <small className="r-date">OCT,2023</small>
            </div>

            {/* <small className="r-date"></small>
            <p className="r-dec">EC2 and EKS dashboard</p> */}
          </div>
        </div>

        <div className="r-container r-left-container">
          <img
            src="src\assets\cloudIaac.png"
            alt=""
            className="r-left-outerImg"
          />

          <div className="textBoxContainer">
            <div className="textBoxContainer-left">
              <img src="src\assets\cloudIaac.png" alt="" />
              <small
                className="r-da
              te"
              >
                NOV,2023
              </small>
            </div>
            <div className="textBoxContainer-right">
              <p className="r-dec">
                AWS Identity Center Dashboard implementation
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>

        <div className="r-container  r-right-container">
          <img
            src="src\assets\cloudTrail.png"
            alt=""
            className="r-left-outerImg"
          />

          <div className="textBoxContainer">
            <div className="textBoxContainer-right">
              <p className="r-dec">Cloud Trail Analytics</p>
            </div>
            <div className="textBoxContainer-left">
              <img src="src\assets\cloudTrail.png" alt="" />
              <small className="r-date">DEC,2023</small>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>

        <div className="r-container r-left-container">
          <img src="src\assets\azure.png" alt="" className="r-left-outerImg" />

          <div className="textBoxContainer">
            <div className="textBoxContainer-left">
              <img src="src\assets\azure.png" alt="" />
              <small className="r-date">MAR,2024</small>
            </div>
            <div className="textBoxContainer-right">
              <p className="r-dec ">Azure Integration</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>

        <div className="r-container  r-right-container">
          <img
            src="src\assets\google-cloud.png"
            alt=""
            className="r-left-outerImg"
          />

          <div className="textBoxContainer">
            <div className="textBoxContainer-right">
              <p className="r-dec ">GCP Integration</p>
              <span className="right-container-arrow"></span>
            </div>
            <div className="textBoxContainer-left">
              <img src="src\assets\google-cloud.png" alt="" />
              <small className="r-date">JUL,2024</small>
            </div>
          </div>
        </div>
        {/* <div className="home-annimation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>*/}
      </div>
    </section>
  );
};

export default RoadMap;
