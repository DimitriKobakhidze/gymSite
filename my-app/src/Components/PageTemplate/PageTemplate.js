import { useState } from "react"

import Spinner from "../UI/Spinner"

const PageTemplate = (props) =>{
    const [bgLoaded,setBgLoaded] = useState(false)

    return(
        <main>
            <img src={props.bg} className="page-bg pagebg-animate" onLoad={() => setBgLoaded(true)} alt="failed to load"/>
            {bgLoaded ? 
                props.children
            : 
                <div className="spinner-onpage-wrapper">
                    <Spinner />
                </div>
            }
        </main>
    )
}


export default PageTemplate