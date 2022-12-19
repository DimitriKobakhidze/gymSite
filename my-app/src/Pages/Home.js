import React from "react"
import Background1 from "../Images/Slider/1.png"
import Background2 from "../Images/Slider/2.png"
import Background3 from "../Images/Slider/4.png"
import Background4 from "../Images/Slider/3.png"
import Background5 from "../Images/Slider/5.png"


const urlList = [Background1,Background2,Background3,Background4,Background5]

export default function Home(){
    const [sliderIndex,setSliderIndex] = React.useState(0)

    //for slider images
  
    const sliderTextArray = ["Most impactful exercises","Right form","Correct diet","Useful supplements","Willpower"]



    // console.count(`slider`)

    React.useEffect(() =>{
        const autoInterval = setInterval(() =>{
            if(sliderIndex == 4){
                setSliderIndex(0)
            }else{
                setSliderIndex(prev => prev + 1)
            }
        },2500)
        return () =>{
            clearInterval(autoInterval)
        }
    },[sliderIndex])

    function manualChange(event){
        setSliderIndex(parseInt(event.target.id))
    }

    return(
        <div className="home-page">
            <img className="slider-pic" src={urlList[sliderIndex]} loading="lazy" />
            <div className="slider-text-div">
                <h1 className="slider-text">{sliderTextArray[sliderIndex]}</h1>
            </div>
            <div className="button-div">
                <button id="0" style={sliderIndex == 0 ? {backgroundColor:"#dc3545"} : {backgroundColor:"#f2f2f2"}} onClick={(event) => manualChange(event)}></button>
                <button id="1" style={sliderIndex == 1 ? {backgroundColor:"#dc3545"} : {backgroundColor:"#f2f2f2"}} onClick={(event) => manualChange(event)}></button>
                <button id="2" style={sliderIndex == 2 ? {backgroundColor:"#dc3545"} : {backgroundColor:"#f2f2f2"}} onClick={(event) => manualChange(event)}></button>
                <button id="3" style={sliderIndex == 3 ? {backgroundColor:"#dc3545"} : { backgroundColor:"#f2f2f2"}} onClick={(event) => manualChange(event)}></button>
                <button id="4" style={sliderIndex == 4 ? {backgroundColor:"#dc3545"} : {backgroundColor:"#f2f2f2"}} onClick={(event) => manualChange(event)}></button>
            </div>
        </div>
    )
}


