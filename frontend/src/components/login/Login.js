import "./Login.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { useState, useContext } from "react";
import YardIcon from "@mui/icons-material/Yard";

import { useNavigate } from 'react-router-dom';
import { getUser } from "../../database/database";

import { UserContext } from "../../utilities/UserContext";

function Login() {
    const [, setUser] = useContext(UserContext);

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        // Check required fields are filled (not implemented)
        // Authenticate and set role based on database
        let isUser = await getUser(username, password);
        
        if (isUser !== null) {
            setUser(isUser);
            navigate('/');
        } else {
            // Display below message on the UI (not implemented)
            console.log("Account does not exist!");
        }
    }

    return (
        <div className="login__root">
            <div className="login__content">
                <div className="login">
                    <div className="login__container">
                        <h1 className='app_name'>
                            <span className={"green"}><YardIcon/></span>
                            <span className={"black"}> GLEAN</span><span className={"green"}>ful</span>
                        </h1>
                        <p>Don't have an account?</p>
                        <Button
                            variant={"contained"}
                            color={"info"}
                            onClick={() => navigate('/register')}>
                            Register
                        </Button>
                        <Button
                            size="small"
                            color="success"
                            onClick={() => navigate('/')}>
                            Back
                        </Button>
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
                            color={"success"}
                            className="login__btn"
                            onClick={signIn}>
                            Login
                        </Button>
                        <Link to={'/reset'}>Forgot password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;