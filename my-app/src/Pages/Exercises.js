import React from "react"
import Exercise from "../Components/Exercise"
import exerciseData from "../Components/ExercisesData"

export default function Exercises(){
    const componentsArray = exerciseData.map((item,id) =>{
        return(
            <Exercise key={id} {...item} />
        )
    })

    console.log(componentsArray)

    return(
        <div className="exercises-page">
            {componentsArray}
        </div>
    )
}