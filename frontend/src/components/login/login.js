import "./Login.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

function Login() {
    return (<div className="login">
        <div className="login__container">
            <h1><span className={"black"}>Glean</span><span className={"green"}>ful</span></h1>
            <p>Don't have an account?</p>
            <Link href="#" underline="none">Register</Link>
            {/*<hr className={"register__separation"}/>*/}
            <Divider variant={"middle"} className={"register__separation"}>
                <Chip label={"Or login"} color={"default"}/>
            </Divider>
            <TextField
                type="email"
                placeholder="Email"
                autoComplete="email"
                focused/>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"/>
            <Button
                variant={"contained"}
                className="login__btn">
                Login
            </Button>
            <Link to={'/reset'}>Forgot password?</Link>
        </div>
    </div>);
}

export default Login;