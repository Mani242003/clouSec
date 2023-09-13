import "./PreLoader.css";
import Lottie from "lottie-react";
import preLoaderAnimi from "../../assets/animation/preLoaderAnimi.json";
// import {preLoaderAnim} from ".src/Animations"
import { motion } from "framer-motion";

const PreLoader = () => {
  // useEffect(()=>{
  //   // preLoaderAnim()

  // },[])
  return (
    <motion.div>
      <div className="preLoader-container">
        {/* <h1>gy</h1> */}
        <Lottie animationData={preLoaderAnimi} id="preLoader" />
        <span className="preLoader-text">ClouSec</span>
        <span className="preLoader-sub-text">
          Our vision is to give a best solution for all people.
        </span>
      </div>
    </motion.div>
  );
};

export default PreLoader;
