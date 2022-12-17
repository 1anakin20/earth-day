import ProfileForm from "../ProfileForm";

import './RegisterForm.css';

function RegisterForm(props) {
    const { user, setUser } = props;

    return (
        <>
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
        </>
    );
}

export default RegisterForm;
