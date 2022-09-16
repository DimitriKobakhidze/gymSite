import React from "react"
import successfulLogo from "../Images/check.png"

export default function Login(){
    const [loginData,setLoginData] = React.useState({
        mail:"",
        password:""
    })
    const [loginSuccessful,setLoginSuccessful] = React.useState(false)

    function handleChange(event){
        setLoginData(prev =>(
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    function loginFunction(){
        const userData = JSON.parse(localStorage.getItem("user"))
        if(userData.mail == loginData.mail && userData.password == loginData.password){
            // window.alert("Login succesful")
            setLoginSuccessful(true)
        }else{
            window.alert("Mail or password is incorrect")
        }
    }

    return(
        <div className="login-page">
            {
                !loginSuccessful ? 
                <div className="form-div">
                    <div className="input-div">
                        <h3>Mail or username</h3>
                        <input type="mail" name="mail" onChange={(event) => handleChange(event)} ></input>
                    </div>
                    <div className="input-div">
                        <h3>Password</h3>
                        <input type="password" name="password" onChange={(event) => handleChange(event)}></input>
                    </div>
                    <input className="login-button" type="submit" value="Login" onClick={loginFunction}></input>
                </div>
                : 
                <div className="login-success">
                    <div className="login-upper">
                        <img src={successfulLogo}></img>
                        <h1 style={{marginTop:"20px",textAlign:"center"}}>Login successful</h1>
                    </div>
                </div>
            }
        </div>
    )
}