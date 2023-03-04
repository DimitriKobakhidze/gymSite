




const passDifficultyChecker = (password) =>{
    let hasNumber = false
    let hasSymbol = false
    let hasUpper = false
    let hasLower = false
    let passLevel = 0
    console.log("fire")
    //if string has signs it returns array of matched signs else it returns null
    if(password.match(/[#,$,!,%,&,*,^]/g) !== null){
        hasSymbol = true
    }
    for(let i =0;i < password.length;i++){
        if(!isNaN(password[i])){
            hasNumber = true
        }else if(password[i] === password[i].toUpperCase()){
            hasUpper = true
        }else if(password[i] === password[i].toLowerCase()){
            hasLower = true
        }
    }

    if(hasNumber) passLevel++
    if(hasSymbol) passLevel++
    if(hasUpper) passLevel++
    if(hasLower) passLevel++
    
    if(passLevel < 2 && passLevel > 0){
        return({difficulty:"Weak password",color:"#981a2c"})
    }else if(passLevel === 2){
        return({difficulty:"Normal password",color:"#ffcc99"})
    }else if(passLevel === 3){
        return({difficulty:"Strong password",color:"#99ff66"})
    }else if(passLevel === 4){
        return({difficulty:"Very strong password",color:"#3dcf4f"})
    }   
}

export default passDifficultyChecker