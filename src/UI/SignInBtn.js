import { useState } from 'react'
import classes from './Btn.module.css'
import '../App.css'
const SignInBtn = ()=>{
    const [isBtnHovered,setIsBtnHovered] = useState(false)

    const btnHovered = () =>{
        setIsBtnHovered(true)
    }
    const btnUnHovered = () =>{
        setIsBtnHovered(false)
    }
    const styles = isBtnHovered ? `${classes.signInBtn} + ${classes.hover}` : `${classes.signInBtn}`
    return(
        <button onMouseEnter={btnHovered} onMouseLeave={btnUnHovered} className={styles}>
            Sign In
        </button>
    )
}
export default SignInBtn