import Navbar from "./Navbar";


const Layout = (props) =>{
    return(
        <div className="app-div">
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout