import "./Login.css";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ResponsiveAppBar from "../ResponsiveAppBar";
import YardIcon from "@mui/icons-material/Yard";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login__root">
      <div className="login__content">
        <div className="login">
          <div className="login__container">
            <h1 className="app_name">
              <span className={"green"}>
                <YardIcon />
              </span>
              <span className={"black"}> GLEAN</span>
              <span className={"green"}>ful</span>
            </h1>
            <p>Don't have an account?</p>
            <Link href="register" underline="none">
              Register
            </Link>
            <Divider variant={"middle"} className={"register__separation"}>
              <Chip label={"Or login"} color={"default"} />
            </Divider>
            <TextField
              type="email"
              placeholder="Email"
              autoComplete="email"
              focused
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant={"contained"} className="login__btn">
              Login
            </Button>
            <Link to={"/reset"}>Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
