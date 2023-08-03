import logo from '../Assets/splitwise-svgrepo-com.svg'
import classes from './Header.module.css'
import SignInBtn from '../UI/SignInBtn'
const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logoSection}>
                <img alt='logo' src={logo}></img>
                <span className={classes.logoName}>SplitWise Clone</span>
            </div>
            <div>
                <button className={classes.logInBtn}>Log In</button>
                <SignInBtn />
            </div>
        </div>
    )
}
export default Header