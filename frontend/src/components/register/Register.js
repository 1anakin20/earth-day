import {useState} from 'react';

import RegisterForm from './RegisterForm';

import './Register.css';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import YardIcon from "@mui/icons-material/Yard";
import ResponsiveAppBar from "../ResponsiveAppBar";

function Register(props) {
    // const { role, username, setRole, setUsername } = props;
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');

    return role ? (
        <div>
            <ResponsiveAppBar/>
            <RegisterForm
                role={role}
                username={username}
                setRole={setRole}
                setUsername={setUsername}
            />
        </div>
    ) : (
        <div className="register__root">
            <ResponsiveAppBar />
            <div className="register">
                <section className="register__container">
                    <h1 className='app_name'>
                        <Link href="/" underline='none'>
                            <span className={"green"}><YardIcon/></span>
                            <span className={"black"}> GLEAN</span><span className={"green"}>ful</span>
                        </Link>
                    </h1>
                    <p>Already have an account?</p>
                    <Link href="login" underline="none">Login</Link>
                    <Divider variant={"middle"} className={"login__separation"}>
                        <Chip label={"Or register"} color={"default"}/>
                    </Divider>
                    <p>Please select the account type</p>
                    <Button
                        variant={"contained"}
                        color={"warning"}
                        onClick={() => setRole('gleaner')}>
                        Gleaner
                    </Button>
                    <Button
                        variant={"contained"}
                        color={"success"}
                        onClick={() => setRole('farmer')}>
                        Farmer
                    </Button>
                    <Button
                        variant={"contained"}
                        color={"info"}
                        onClick={() => setRole('foodBank')}>
                        Food Bank
                    </Button>
                </section>
            </div>
        </div>
    )
}

export default Register;
