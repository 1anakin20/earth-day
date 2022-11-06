import "./Login.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {FaArrowLeft } from 'react-icons/fa';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (<div className="login">
        <div className="login__container">
            <h1><span className={"black"}>Glean</span><span className={"green"}>ful</span></h1>
            <p>Don't have an account?</p>
            <Link href="#" underline="none">Register</Link>
            <Divider variant={"middle"} className={"register__separation"}>
                <Chip label={"Or login"} color={"default"}/>
            </Divider>
            <TextField
                type="email"
                placeholder="Email"
                autoComplete="email"
                focused
                onChange={(e) => setUsername(e.target.value)}/>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}/>
            <Button
                variant={"contained"}
                className="login__btn">
                arrow left
            </Button>
            <Link to={'/reset'}>Forgot password?</Link>
        </div>
    </div>);
}

export default Login;