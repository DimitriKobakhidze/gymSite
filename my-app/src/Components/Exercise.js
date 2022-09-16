import React from "react";




export default function Exercise(props){

    const itemElementsArray = props.exercises.map((item,id) => {
        const style ={
            backgroundImage: `url(${item.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize:"cover",
            border: "solid #f2f2f2 2px"
        }
        return (
            <div key={id} className="exercise-item" style={style} onClick={() => window.open(item.videoUrl, "_blank")}>
                    <h3 className="exercise-item-text">{item.name}</h3>
            </div>
        )
    })

    const logoElementsArray = props.muscleGroupLogo.map((item,id) => {
        return(
            <img key={id} src={item}></img>
        )
    })
    return(
        <div className="exercise-div">
            {/* <img src={props.muscleGroupLogo}></img> */}
            {logoElementsArray}
            <h1>{props.muscleGroup} Exercises</h1>
            <h3 style={{color:"#f2f2f2"}}>(Click images for video)</h3>
            <div className="exercise-items-div">
                {itemElementsArray}
            </div>
        </div>
    )
}