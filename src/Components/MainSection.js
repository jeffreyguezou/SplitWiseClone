import classes from './MainSection.module.css'
import { BsAirplane } from 'react-icons/bs'
const MainSection = () =>{
    return(
        <div className={classes.mainSection}>
            <div className={classes.mainTextContainer}>
                <div className={classes.MainTextHeader}>
                <span>less stress when sharing your expenses </span><span>with anyone</span>
                </div>
                <div className={classes.MainTextLogoSection}>
                <span style={{color:'green'}}>{BsAirplane}</span>
                </div>                
            </div>
            <div className={classes.mainIconContainer}></div>
        </div>
    )
}
export default MainSection