import "./Login.css";
import {Link} from "react-router-dom";

function Login() {
    return (<div className="login">
        <div className="login__container">
            <h1><span className={"black"}>Glean</span><span className={"green"}>ful</span></h1>
            <p>Don't have an account?</p>
            <Link className={"register"} to={"/register"}>Register</Link>
            <hr className={"register__separation"}/>
            <p className={"label"}>Email</p>
            <input
                type="email"
                placeholder="Email"/>
            <p className={"label"}>Password</p>
            <input
                type="password"
                placeholder="Password"/>
            <button
                className="login__btn">
                Login
            </button>
            <Link to={'/reset'}>Forgot password?</Link>
        </div>
    </div>);
}

export default Login;