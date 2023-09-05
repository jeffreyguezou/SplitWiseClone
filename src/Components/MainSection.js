import classes from "./MainSection.module.css";
import { BsAirplane, BsAsterisk } from "react-icons/bs";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";
const MainSection = () => {
  return (
    <div className={classes.mainSection}>
      <div className={classes.mainTextContainer}>
        <div className={classes.MainTextHeader}>
          <span>less stress when sharing your expenses </span>
          <span>with anyone</span>
        </div>
        <div className={classes.MainTextLogoSection}>
          <BsAirplane style={{ color: "green" }} />
          <AiFillHome style={{ color: "violet" }} />
          <AiFillHeart style={{ color: "red" }} />
          <BsAsterisk style={{ color: "grey" }} />
        </div>
        <div className={classes.mainBtnSection}>
          <motion.button
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className={classes.signUpBtn}
          >
            Sign Up
          </motion.button>
        </div>
      </div>
      <div className={classes.mainIconContainer}>
        <BsAirplane style={{ color: "green" }} />
      </div>
    </div>
  );
};
export default MainSection;
