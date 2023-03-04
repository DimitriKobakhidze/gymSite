import contactLogo from "../Images/Contact/communicate.png"

const listOfLogos = [
    {name:"facebook",url:require("../Images/Contact/facebook.png"),color:"#3b5998",link:"https://www.facebook.com/"},
    {name:"instagram",url:require("../Images/Contact/instagram.png"),color:"#d51c8f",link:"https://www.instagram.com/"},
    {name:"tik-tok",url:require("../Images/Contact/tik-tok.png"),color:"#a8d0cf",link:"https://www.tiktok.com/"},
    {name:"telephone",url:require("../Images/Contact/telephone.png"),color:"#2196f3",link:""},
    {name:"gmail",url:require("../Images/Contact/gmail.png"),color:"#cd2900",link:"https://accounts.google.com/"}
]

const Contact = (props) => {
    const arrayOfElements = listOfLogos.map((item,id) =>{
        return(
            <div key={id} className="contact-item" onClick={() => item.name !== "telephone" ? window.open(item.link,"_blank") : console.log("phone")}>
                <img src={item.url} alt="Not Loaded"></img>
                <h2 style={{color:`${item.color}`}}>{item.name==="gmail" ? "dimitri.kobakhidze.1@gmail.com" : item.name ==="telephone" ? "133-223-223" : "@gymSite123"}</h2>
            </div>
        )
    })

    return(
        <div className="contact-page" style={{backgroundImage: `url(${props.bg})`}}>
            <div className="contact-text-div">
                <h1 className="contact-text"><img src={contactLogo} alt="Not Loaded"></img>Contact us on</h1>
                {arrayOfElements}
            </div>
        </div>
    )
}

export default Contact