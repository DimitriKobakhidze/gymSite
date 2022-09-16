import React from "react";
import foodLogo from "./Images/food/diet.png"
import supplementLogo from "./Images/food/dietary-suplement.png"




export default function Food(props){
    

    const foodElementsArray = props.food.map((item,id) => {
        const style ={
            backgroundImage: `url(${item.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize:"cover",
            border: "solid #f2f2f2 2px"
        }
        return (
            <div key={id} className="exercise-item" style={style}>
                    <h3 className="exercise-item-text">{item.name}</h3>
            </div>
        )
    })

    const supplementElementsArray = props.supplement.map((item,id) => {
        const style ={
            backgroundImage: `url(${item.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize:"cover",
            border: "solid #f2f2f2 2px"
        }
        return (
            <div key={id} className="exercise-item" style={style}>
                    <h3 className="exercise-item-text">{item.name}</h3>
            </div>
        )
    })
    
    

    // const logoElementsArray = props.muscleGroupLogo.map((item,id) => {
    //     return(
    //         <img key={id} src={item}></img>
    //     )
    // })
    return(
        <div className="food-div">
            <img src={foodLogo}></img>
            <h1>Food</h1>
            <h3 className="food-text" style={{color:"#f2f2f2",padding:"10px 30px"}}>It is especially important to eat as much protein as possible in a ratio of 1.5-2 grams per 1 kg of body weight, as well as carbohydrates for moderate amounts of energy, and fats, which are essential especially from fish, but in lower doses compared to protein and carbohydrates.</h3>
            <div className="food-items-div">
                {foodElementsArray}
            </div>
            <img src={supplementLogo}></img>
            <h1>Supplement</h1>
            {/* <h3 style={{color:"#f2f2f2"}}>(Click images for video)</h3> */}
            <div className="food-items-div">
                {supplementElementsArray}
            </div>
        </div>
    )
}