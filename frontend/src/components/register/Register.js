import RegisterForm from './RegisterForm';

import './Register.css';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import YardIcon from "@mui/icons-material/Yard";
import ResponsiveAppBar from "../ResponsiveAppBar";

function Register(props) {
    const { user, setUser } = props;

    return user.role ? (
        <div>
            <ResponsiveAppBar
                user={user}
            />
            <RegisterForm
                user={user}
                setUser={setUser}
            />
        </div>
    ) : (
        <div className="register__root">
            <ResponsiveAppBar
                user={user}
            />
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
                        onClick={() => setUser({role: 'Gleaner'})}>
                        Gleaner
                    </Button>
                    <Button
                        variant={"contained"}
                        color={"success"}
                        onClick={() => setUser({role: 'Farmer'})}>
                        Farmer
                    </Button>
                    <Button
                        variant={"contained"}
                        color={"info"}
                        onClick={() => setUser({role: 'Food Bank'})}>
                        Food Bank
                    </Button>
                </section>
            </div>
        </div>
    )
}

export default Register;
