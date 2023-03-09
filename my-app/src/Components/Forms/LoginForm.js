import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import classes from "./Form.module.css"
import {BiDumbbell} from "react-icons/bi"
import {AiFillCheckCircle} from "react-icons/ai"


const LoginForm = (e) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [successful,setSuccessful] = useState(false)


    const handleLogin =(e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        try{
            fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsET3YXQnD8h89Ygugmcw97SCxW0iIP_4",
                {
                    method:"POST",
                    headers:{"Content-Type" : "application/json"},
                    body:JSON.stringify({
                        email,
                        password,
                        returnSecureToken: true
                    })
                }
            ).then(res =>{
                if(!res.ok){
                    alert("Could'nt log in")
                    return
                }

                setSuccessful(true)
                setTimeout(() => {
                    navigate("/")
                }, 2300);
            })
        }
        catch{
            alert("SOME ERROR LOGIN")
        }
    }
    return(
        <div className={classes["form-wrapper"]}>
            {!successful ? 
                <>
                    <BiDumbbell className={classes["logo"]}/>
                    <form autoComplete="off" onSubmit={handleLogin}>
                        <input name="email" placeholder="email" ref={emailRef}/>
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <button>Login</button>
                    </form>
                    <span>Forgot password?</span>
                </>
            :
                <div className={classes["success-div"]}>
                <AiFillCheckCircle className={classes["success-logo"]} />
                    <h1>Login Successful</h1>
                </div>
            }
        </div>
    )
}

export default LoginForm