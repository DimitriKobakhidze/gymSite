import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import classes from "./Form.module.css"
import {BiDumbbell} from "react-icons/bi"
import {AiFillCheckCircle} from "react-icons/ai"



const RegisterForm = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const repeatPasRef = useRef()
    const navigate = useNavigate()
    const [successful,setSuccessful] = useState(false)

    const handleRegister =(e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const repeatPassword = repeatPasRef.current.value

        if(password !== repeatPassword){
            alert("Passwords dont match")
            return
        }
        try{
            fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsET3YXQnD8h89Ygugmcw97SCxW0iIP_4",
                {
                    method:"POST",
                    headers:{"Content-Type" : "application/json"},
                    body:JSON.stringify({
                        email,
                        password,
                        returnSecureToken: true
                    })
                }
            )
            .then(res => res.ok ? res.json() : alert("Could not register"))
            .then(data => {
                localStorage.setItem('token',data.idToken)
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
                    <form autoComplete="off" onSubmit={handleRegister}>
                        <input name="email" placeholder="email" ref={emailRef} />
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <input type="password" placeholder="repeat password" ref={repeatPasRef} />
                        <button>Register</button>
                    </form>
                </>
            : 
                <div className={classes["success-div"]}>
                    <AiFillCheckCircle className={classes["success-logo"]} />
                    <h1>Register Successful</h1>
                </div>
            }
        </div>
    )
}

export default RegisterForm