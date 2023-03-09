

import classes from "./Spinner.module.css"


const Spinner = ({ manualStyles = {} }) =>{
    return(
        <span className={classes["loader"]} style={manualStyles}></span>
    )
}


export default Spinner