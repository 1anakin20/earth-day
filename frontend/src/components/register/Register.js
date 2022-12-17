import { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';

import './Register.css';
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import YardIcon from "@mui/icons-material/Yard";

import { useNavigate } from "react-router-dom";

function Register(props) {
    const { user, setUser } = props;

    const navigate = useNavigate();
    const [registerCSS, setRegisterCSS] = useState('register');

    // When back button is clicked, user is redirected to the previous page
    const previousPage = () => { 
        if (user.role) {
            setUser({});
        } else {
            navigate('/');
        }
    }

    useEffect(() => {
        // Use the correct style depending on if it's a form or not
        if (user.role) {
            setRegisterCSS('register__long');
        } else {
            setRegisterCSS('register');
        }
    }, [user.role]);

    return (
        <div className="register__root">
            <div className="register__content">
                <div className={registerCSS}>
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
                            onClick={previousPage}>
                            Back
                        </Button>
                        <Divider variant={"middle"} className={"login__separation"}>
                            <Chip label={"Or register"} color={"default"}/>
                        </Divider>
                        {user.role ? (
                            <RegisterForm
                                user={user}
                                setUser={setUser}
                            />
                        ) : (
                            <>
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
                            </>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Register;
