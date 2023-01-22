import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
       <div className="card">
        <div className="leftCard">
          <h1>Facebook</h1>
          <p>Connect with friends and th world around you on Facebook</p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        
        <div className="rightCard">
          <h1>register</h1>
         <form>
         <input type="text" placeholder="Email or Phone Number"></input>
         <input type="email" placeholder="username"></input>
         <input type="text" placeholder="Name"></input>
         <input type="Password" placeholder="Password"></input>
         <button>Register</button>
         </form>
        </div>
       </div>
    </div>
  )
}

export default Register