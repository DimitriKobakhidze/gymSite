
import classes from "./LoadingSpinner.module.css"

const LoadingSpinner = () =>{
    return(
        <div className={classes["lds-facebook"]}>
            <div />
            <div />
            <div />
        </div>
    )
}

export default LoadingSpinner