import prosection from "../Assets/ProSection.png";
import { motion } from "framer-motion";
const GetProSection = () => {
  return (
    <div className="proSection">
      <div className="proText">
        <div className="featureTitle">
          <span>Get even more with pro</span>
        </div>
        <div className="featureText">
          <span>
            Get even more organized with receipt scanning, charts and graphs,
            currency conversion, and more!
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          className="signUpBtn"
        >
          Sign Up
        </motion.button>
      </div>
      <img className="mainImg" src={prosection} alt="getpro"></img>
    </div>
  );
};
export default GetProSection;
