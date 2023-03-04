import { useRef, useState } from "react"
import successfulLogo from "../Images/check.png"

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [loginSuccessful,setLoginSuccessful] = useState(false)

    const loginFunction = (e) => {
        e.preventDefault()
        const userData = JSON.parse(localStorage.getItem("user"))
        const userPassword = passwordRef.current.value
        const userEmail = emailRef.current.value
        if(userData.mail === userEmail && userData.password === userPassword){
            setLoginSuccessful(true)
        }else{
            alert("Mail or password is incorrect")
        }
    }

    return(
        <div className="login-page">
            {
                !loginSuccessful ? 
                <form className="form-div" onSubmit={loginFunction}>
                    <div className="input-div">
                        <h3>Mail or username</h3>
                        <input type="mail" name="mail" ref={emailRef} ></input>
                    </div>
                    <div className="input-div">
                        <h3>Password</h3>
                        <input type="password" name="password" ref={passwordRef}></input>
                    </div>
                    <input className="login-button" type="submit" value="Login"></input>
                </form>
                : 
                <div className="login-success">
                    <div className="login-upper">
                        <img src={successfulLogo} alt="Failed to Load"></img>
                        <h1 style={{marginTop:"20px",textAlign:"center"}}>Login successful</h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login