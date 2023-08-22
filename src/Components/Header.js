import logo from "../Assets/splitwise-svgrepo-com.svg";
import classes from "./Header.module.css";
import SignInBtn from "../UI/SignInBtn";
import { useDispatch } from "react-redux";
import { login } from "../Redux/user";
const Header = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login({ isLoggedIn: true, userName: "Jeffrey" }));
  };
  return (
    <div className={classes.header}>
      <div className={classes.logoSection}>
        <img alt="logo" src={logo}></img>
        <span className={classes.logoName}>SplitWise Clone</span>
      </div>
      <div>
        <button onClick={loginHandler} className={classes.logInBtn}>
          Log In
        </button>
        <SignInBtn />
      </div>
    </div>
  );
};
export default Header;
