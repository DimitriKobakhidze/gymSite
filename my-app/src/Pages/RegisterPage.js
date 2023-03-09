
import bg from "../Images/register.jpg"
import PageTemplate from "../Components/PageTemplate/PageTemplate"
import RegisterForm from "../Components/Forms/RegisterForm"

const RegisterPage = () =>{
    
    return(
        <PageTemplate bg={bg}>
            <RegisterForm />
        </PageTemplate>
    )
}



export default RegisterPage
