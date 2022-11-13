import "./Login.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import ResponsiveAppBar from "../ResponsiveAppBar";
import YardIcon from "@mui/icons-material/Yard";

import {useNavigate} from 'react-router-dom';
import { getUser } from "../../database/database";

function Login(props) {
    const { setUser } = props;

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        // Check required fields are filled
        // Authenticate and set role based on database
        // Look up if they are a farmer in the database
        let isUser = await getUser(username, password);
        
        if (isUser !== null) {
            setUser(isUser);
            navigate('/');
        } else {
            console.log("Account does not exist!");
        }
    }

    // useState(() => {
    //     signIn();
    // })

    return (
        <div className="login__root">
            <div className="login__content">
                <div className="login">
                    <div className="login__container">
                        <h1 className='app_name'>
                            <Link href="/" underline='none'>
                                <span className={"green"}><YardIcon/></span>
                                <span className={"black"}> GLEAN</span><span className={"green"}>ful</span>
                            </Link>
                        </h1>
                        <p>Don't have an account?</p>
                        <Link href="register" underline="none">Register</Link>
                        <Divider variant={"middle"} className={"register__separation"}>
                            <Chip label={"Or login"} color={"default"}/>
                        </Divider>
                        <TextField
                            type="email"
                            value={username}
                            placeholder="Email"
                            autoComplete="email"
                            focused
                            onChange={(e) => setUsername(e.target.value)}/>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            value={password}
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}/>
                        <Button
                            variant={"contained"}
                            className="login__btn"
                            onClick={signIn}>
                            Login
                        </Button>
                        <Link to={'/reset'}>Forgot password?</Link>
                    </div>
                </div>
            </div>
        </div>);
}

export default Login;