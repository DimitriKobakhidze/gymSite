import { useEffect, useState } from "react"

import classes from "./ShowcaseItem.module.css"
import Spinner from "../UI/Spinner"


const ShowcaseItem = (props) => {
    const { logo, headerText, headerParagraph, gallery } = props
    const [imagesLoaded,setImagesLoaded] = useState(false)
    
    useEffect(() =>{
        console.count("EFFECT")
        gallery.forEach((object,id) =>{
            const img = new Image()
            img.src = object.imageUrl
            if(id + 1 === gallery.length){
                setImagesLoaded(true)
            }
        })
    },[gallery])

    return(
        <div className={classes["part-container"]}>
            <header>
                {logo.map((logoUrl,id) => <img key={id} src={logoUrl} alt="failed to load" />)}
                <h1>{headerText}</h1>
                <span>{headerParagraph}</span>
            </header>
            {imagesLoaded ? 
                <section>
                    {gallery.map((object,id) => 
                        <div key={id}>
                            <img 
                                src={object.imageUrl} 
                                onClick={() => object.videoUrl ? window.open(object.videoUrl,"_blank") : ""}
                                loading="lazy"
                                alt="failed to load"
                            />
                            <h3>{object.name}</h3>
                        </div>
                    )}
                </section>
             : <Spinner />
            }
        </div>
    )
}


export default ShowcaseItem