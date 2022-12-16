import RegisterForm from './RegisterForm';

import './Register.css';
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import YardIcon from "@mui/icons-material/Yard";

import { useNavigate } from "react-router-dom";

function Register(props) {
    const { user, setUser } = props;

    let navigate = useNavigate();

    return user.role ? (
        <div>
            <RegisterForm
                user={user}
                setUser={setUser}
            />
        </div>
    ) : (
        <div className="register__root">
            <div className="register">
                <section className="register__container">
                    <h1 className='app_name'>
                        <span className={"green"}><YardIcon/></span>
                        <span className={"black"}> GLEAN</span><span className={"green"}>ful</span>
                    </h1>
                    <p>Already have an account?</p>
                    <Button
                        variant={"contained"}
                        color={"info"}
                        onClick={() => navigate('/login')}>
                        Login
                    </Button>
                    <Button                     
                        size="small"
                        color="success"
                        onClick={() => navigate('/')}>
                        Back
                    </Button>
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
