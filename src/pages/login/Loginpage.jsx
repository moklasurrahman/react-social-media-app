import { Link } from "react-router-dom"
import "./loginpage.scss"
import { useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';

const Loginpage = () => {
  
  //For auth Context
const {login} = useContext(AuthContext);
const handelLogin = () =>{
  login();
}
  
return (
    <div className="login">
       <div className="card">
        <div className="leftCard">
          <h1>Facebook</h1>
          <p>Connect with friends and th world around you on Facebook</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button> register</button>
          </Link>
        </div>
        
        <div className="rightCard">
          <h1>Login</h1>
         <form>
         <input type="text" placeholder="Email or Phone Number"></input>
         <input type="Password" placeholder="Password"></input>
         <button onClick={handelLogin}>Log in</button>
         </form>
        </div>
       </div>
    </div>
  )
}

export default Loginpage