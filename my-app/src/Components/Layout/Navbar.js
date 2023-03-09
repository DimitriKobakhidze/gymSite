import { Link } from "react-router-dom"

import classes from "./NavBar.module.css"
import logo from "../../Images/logo.png"

const Navbar = () => {
    return(
        <header className={classes["header"]} id="test">
            <Link to="/"  className={classes["header-logo"]}>
                <img src={logo} alt="failed to load" />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="exercise">Exercises</Link></li>
                    <li><Link to="food-supplements">Food-Supplements</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li className={classes["form-li"]}><Link to="login">Login</Link></li>
                    <li><Link to="register">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar