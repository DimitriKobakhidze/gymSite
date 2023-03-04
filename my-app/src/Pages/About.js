
import { useState } from "react"

import classes from "./About.module.css"
import bg from "../Images/about.jpg"
import LoadingSpinner from "../Components/UI/LoadingSpinner"

const About = (props) => {
    const [loading,setLoading] = useState(true)
    return(
        <div className="about-page">
            <img className={classes["bg"]} src={bg} onLoad={() => setLoading(false)} />
            {loading ?
                <div className={classes["spinner-wrapper"]}>
                    <LoadingSpinner />
                </div>
            :
                <div className="about-text-div">
                <p>
                    Here you can get information on how to do the exercises correctly, which is critical to progress.
                </p>
                <p>
                    Learn which foods are most beneficial and which will help you achieve results.
                </p>
                <p>
                    Also nutritional supplements that will speed up your progress and help you both recover faster after exercise as well as get in better shape.
                </p>
                </div>
            }
        </div>
    )
}

export default About