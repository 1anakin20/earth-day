import './RegisterForm.css';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import YardIcon from "@mui/icons-material/Yard";

import ProfileForm from "../ProfileForm";

function RegisterForm(props) {
    const { user, setUser } = props;

    return (
        <div className={"register__background"}>
            <div className="register__long">
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
                    <ProfileForm
                        user={user}
                        submitButtonText='Register'
                        setUser={setUser}
                        setProfileMode={null}
                        setSubmitButtonText={null}
                    />
                    <p>
                        By clicking Register, you agree to the Gleanful <br/><a href='legal'>User Agreement</a>,{' '}
                        <a href='legal'>Privacy Policy</a>, and <a href='legal'>Cookie Policy</a>.
                    </p>
                    <Button
                        variant={"contained"}
                        color={"warning"}
                        onClick={() => setUser({})}>
                        Back
                    </Button>
                </section>
            </div>
        </div>
    );
}

export default RegisterForm;
