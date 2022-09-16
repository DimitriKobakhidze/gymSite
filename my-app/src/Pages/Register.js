import React from "react"
import successfulLogo from "../Images/check.png"

export default function Register(){
    const objectDate = new Date()
    const registerDate = `${objectDate.getDay()}-${objectDate.getMonth()}-${objectDate.getFullYear()}`
    const[formData,setFormData] = React.useState(
        {
            mail:"",
            accountName:"",
            password:"",
            repeatPassword:"",
            phone:"",
            country:"Georgia",
            city:"",
            registerDate:registerDate
        }
    )
    const[passwordDifficulty,setPasswordDifficulty] = React.useState()
    const[registerSuccessful,setRegisterSuccessful] = React.useState(false)
    
    function handleChange(event){
        setFormData(prev =>(
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    function handleForm(){
        if(formData.password == formData.repeatPassword){
            console.log(formData)
            localStorage.setItem("user",JSON.stringify(formData))
            setRegisterSuccessful(true)
        }else{
            window.alert("Passwords not matching")
        }
    }

    React.useEffect(() =>{
        let hasNumber = false
        let hasSymbol = false
        let hasUpper = false
        let hasLower = false
        let passLevel = 0

        //if string has signs it returns array of matched signs else it returns null
        if(formData.password.match(/[#,$,!,%,&,*,^]/g) !== null){
            hasSymbol = true
        }
        for(let i =0;i < formData.password.length;i++){
            if(!isNaN(formData.password[i])){
                hasNumber = true
            }else if(formData.password[i] === formData.password[i].toUpperCase()){
                hasUpper = true
            }else if(formData.password[i] === formData.password[i].toLowerCase()){
                hasLower = true
            }
        }
        if(hasNumber){
            passLevel++
        }
        if(hasSymbol){
            passLevel++
        }
        if(hasUpper){
            passLevel++
        }
        if(hasLower){
            passLevel++
        }
        if(passLevel < 2 && passLevel > 0){
            setPasswordDifficulty({difficulty:"Weak password",color:"#981a2c"})
        }else if(passLevel == 2){
            setPasswordDifficulty({difficulty:"Normal password",color:"#ffcc99"})
        }else if(passLevel == 3){
            setPasswordDifficulty({difficulty:"Strong password",color:"#99ff66"})
        }else if(passLevel == 4){
            setPasswordDifficulty({difficulty:"Very strong password",color:"#3dcf4f"})
        }
    },[formData.password])


   

    return(
        <div className="register-page">
            {
                !registerSuccessful ?
                    <div className="form-div">
                        <div className="input-div">
                            <h3>Mail</h3>
                            <input type="mail" name="mail" onChange={(event) => handleChange(event)}></input>
                        </div>
                        <div className="input-div">
                            <h3>Account name</h3>
                            {/* <input type="text" name="accountName" value={formData.accountName}></input> */}
                            <input type="text" name="accountName" onChange={(event) => handleChange(event)}></input>
                        </div>
                        <div className="input-div">
                            <h3>Password</h3>
                            <input type="password" name="password" onChange={(event) => handleChange(event)}></input>
                            {passwordDifficulty && <h4 style={{color:passwordDifficulty.color}} className="pass-dif">{passwordDifficulty.difficulty}</h4>}
                        </div>
                        <div className="input-div">
                            <h3>Repeat password</h3>
                            <input type="password" name="repeatPassword" onChange={(event) => handleChange(event)}></input>
                        </div>
                        <div className="input-div">
                            <h3>Phone</h3>
                            <input type="tel" name="phone" onChange={(event) => handleChange(event)}></input>
                        </div>
                        <div className="input-div">
                            <h3>Country</h3>
                            <select onChange={(event) => handleChange(event)} name="country">
                                <option selected value="georgia" >Georgia</option>
                                <option value="germany" >Germany</option>
                                <option value="belgium" >Belgium</option>
                                <option value="france" >France</option>
                                <option value="england" >England</option>
                            </select>
                        </div>
                        <div className="input-div">
                            <h3>City</h3>
                            <input type="text" name="city" onChange={(event) => handleChange(event)}></input>
                        </div>
                        <div className="input-div">
                            <h3>Register date</h3>
                            <input type="text" className="register-date" placeholder={registerDate}></input>
                        </div>
                        <input className="register-button" type="submit" value="Register" onClick={handleForm}></input>
                    </div>
                :
                <div className="login-success">
                    <div className="login-upper">
                        <img src={successfulLogo}></img>
                        <h1 style={{marginTop:"20px",textAlign:"center"}}>Register successful</h1>
                    </div>
                </div>
            }
                
        </div>
    )
}