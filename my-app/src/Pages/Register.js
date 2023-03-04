import { useState, useEffect, useRef } from "react"

import passDifficultyChecker from "../Functions/password-diff"
import successfulLogo from "../Images/check.png"

export default function Register(){
    const emailRef = useRef()
    const accountNameRef = useRef()
    const repeatPasswordRef = useRef()
    const phoneRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const[password,setPassword] = useState("")
    const[passwordDifficulty,setPasswordDifficulty] = useState()
    const[registerSuccessful,setRegisterSuccessful] = useState(false)
    
    const objectDate = new Date()
    const registerDate = `${objectDate.getDay()}-${objectDate.getMonth()}-${objectDate.getFullYear()}`
    

    const handleChange = (e) => {
        setPassword(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        const repeatPassword = repeatPasswordRef.current.value
        if(password === repeatPassword){
            const formData = {
                accountName:accountNameRef.current.value,
                mail:emailRef.current.value,
                password,
                phone:phoneRef.current.value,
                city:cityRef.current.value,
                country:countryRef.current.value,
                registerDate,
            }
            localStorage.setItem("user",JSON.stringify(formData))
            setRegisterSuccessful(true)
        }else{
           alert("Passwords not matching")
        }
    }
    
    useEffect(() =>{
        if(password.length < 1) return
        
        const { difficulty, color} = passDifficultyChecker(password)
        setPasswordDifficulty({difficulty,color})
    },[password])


   

    return(
        <div className="register-page">
            {
                !registerSuccessful ?
                    <form className="form-div" onSubmit={handleForm}>
                        <div className="input-div">
                            <h3>Mail</h3>
                            <input type="mail" name="mail" ref={emailRef} ></input>
                        </div>
                        <div className="input-div">
                            <h3>Account name</h3>
                            {/* <input type="text" name="accountName" value={formData.accountName}></input> */}
                            <input type="text" name="accountName" ref={accountNameRef} ></input>
                        </div>
                        <div className="input-div">
                            <h3>Password</h3>
                            <input type="password" name="password" onChange={handleChange} ></input>
                            {passwordDifficulty && <h4 style={{color:passwordDifficulty.color}} className="pass-dif">{passwordDifficulty.difficulty}</h4>}
                        </div>
                        <div className="input-div">
                            <h3>Repeat password</h3>
                            <input type="password" name="repeatPassword" ref={repeatPasswordRef} ></input>
                        </div>
                        <div className="input-div">
                            <h3>Phone</h3>
                            <input type="tel" name="phone" ref={phoneRef} ></input>
                        </div>
                        <div className="input-div">
                            <h3>Country</h3>
                            <select  name="country" ref={countryRef} defaultValue="Georgia">
                                <option value="Georgia" disabled >Georgia</option>
                                <option value="Germany" >Germany</option>
                                <option value="Belgium" >Belgium</option>
                                <option value="France" >France</option>
                                <option value="England" >England</option>
                            </select>
                        </div>
                        <div className="input-div">
                            <h3>City</h3>
                            <input type="text" name="city" ref={cityRef} ></input>
                        </div>
                        <div className="input-div">
                            <h3>Register date</h3>
                            <input type="text" className="register-date" placeholder={registerDate}></input>
                        </div>
                        <input className="register-button" type="submit" value="Register" />
                    </form>
                :
                <div className="login-success">
                    <div className="login-upper">
                        <img src={successfulLogo} alt="failed to load"></img>
                        <h1 style={{marginTop:"20px",textAlign:"center"}}>Register successful</h1>
                    </div>
                </div>
            }
                
        </div>
    )
}