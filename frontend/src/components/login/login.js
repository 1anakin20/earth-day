import "./Login.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";
import ResponsiveAppBar from "../ResponsiveAppBar";
import {auth, signInWithEmailAndPassword, signInWithGoogle} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/");
    }, [user, loading]);

    return (
        <div className="login__root">
            <div className="login__content">
                <ResponsiveAppBar/>
                <div className="login">
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
                            className="login__btn"
                            onClick={() => signInWithEmailAndPassword(username, password)}>
                            Login
                        </Button>
                        <Button className="login__btn login__google" onClick={signInWithGoogle} variant={"contained"}>
                            Login with Google
                        </Button>
                        <Link to={'/reset'}>Forgot password?</Link>
                    </div>
                </div>
            </div>
        </div>);
}

export default Login;