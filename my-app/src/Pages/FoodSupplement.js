import React from "react"
import Food from "../Components/Food"
import foodData from "../Components/FoodData"

export default function FoodSupplement(){
   
    return(
        <div className="food-supplement-page">
            <Food {... foodData} />
        </div>
    )
}