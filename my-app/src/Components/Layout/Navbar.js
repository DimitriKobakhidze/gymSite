import { Link } from "react-router-dom"

import classes from "./Navbar.module.css"

const Navbar = () =>{
    return (
            <nav className={classes["main-nav"]}>
                <ul>
                    <li><Link className={classes["nav-link"]} to="/">Home</Link></li>
                    <li><Link className={classes["nav-link"]} to="/about">About</Link></li>
                    <li><Link className={classes["nav-link"]} to="/exercises">Exercises</Link></li>
                    <li><Link className={classes["nav-link"]} to="/foodsupplement">Food-Supplement</Link></li>
                    <li><Link className={`${classes["nav-link"]} ${classes["contact-margin"]}`} to="/contact">Contact</Link></li>
                    <li><Link className={classes["nav-link"]} to="/register">Register</Link></li>
                    <li><Link className={classes["nav-link"]} to="/login">Login</Link></li>
                </ul> 
            </nav>
    )
}

export default Navbar