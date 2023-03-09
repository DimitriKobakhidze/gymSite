
import bg from "../Images/login.jpg"
import PageTemplate from "../Components/PageTemplate/PageTemplate"
import LoginForm from "../Components/Forms/LoginForm"

const LoginPage = () =>{
    
    return(
        <PageTemplate bg={bg}>
            <LoginForm />
        </PageTemplate>
    )
}



export default LoginPage