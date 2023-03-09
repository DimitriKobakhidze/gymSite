import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import classes from "./Slider.module.css"
import img1 from "./Images/1.png"
import img2 from "./Images/2.png"
import img3 from "./Images/3.png"
import img4 from "./Images/4.png"
import img5 from "./Images/5.png"
import Spinner from "../UI/Spinner"

const imagesArray = [
    {img:img1,quote:"What is page about?",page:"about"},
    {img:img2,quote:"See correct exercises",page:"execises"},
    {img:img3,quote:"Check nutrition",page:"food-supplements"},
    {img:img4,quote:"Supplements that are best to use",page:"food-supplements"},
    {img:img5,quote:"Get personal advice",page:"contact"}
]

const Slider = () =>{
    const [imagesLoaded,setImagesLoaded] = useState(false)
    const [activeImage,setActiveImage] = useState(0) //id

    const handleClick = (e) =>{
        const imageId = parseInt(e.target.id)
        setActiveImage(imageId)
    }
            
            
    useEffect(() =>{
        imagesArray.forEach((picture,id) =>{
            const img = new Image()
            img.src = picture.img
            if(id + 1 === imagesArray.length){
                setImagesLoaded(true)
            }
        })

    },[])

    useEffect(() =>{
        const changerInterval = setInterval(() => {
            if(activeImage + 1 === imagesArray.length){
                setActiveImage(0)
            }else{
                setActiveImage(prev => prev + 1)
            }
        }, 3500);

        return () => clearInterval(changerInterval)

    },[activeImage])


    return(
        <main>
            {imagesLoaded ?
                <>
                    <div className={classes["slider-changer"]}>
                        {imagesArray.map((notUsing,id) =>
                            <button 
                            key={id}
                            id={id} 
                            style={id === activeImage ? {backgroundColor:"red"} : {backgroundColor:"white"}}
                            onClick={handleClick}
                            ></button>)
                        }
                    </div>
                        {/* {imagesArray.map((image,id) => 
                            <img key={id} 
                            src={image.img} 
                            className="page-bg test"
                            style={id === activeImage ? { zIndex:-999 } : { zIndex:-1000 }}
                            alt="failed to load"
                            />)
                        } */}
                        <img 
                            key={activeImage}
                            src={imagesArray[activeImage].img} 
                            className="page-bg slider-animate"
                            alt="failed to load"
                        />
                    <div className={classes["quote"]}>
                        <Link to={imagesArray[activeImage].page}>
                          <h1>{imagesArray[activeImage].quote}</h1>
                        </Link>
                    </div>
                </>
            :
                <div className="spinner-onpage-wrapper">
                    <Spinner />
                </div>
            }
        </main>
    )
}


export default Slider