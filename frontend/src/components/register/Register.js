import { useState } from 'react';

import RegisterForm from './RegisterForm';

import './Register.css';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

function Register() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');

  return role ? (
    <RegisterForm
      role={role}
      username={username}
      setRole={setRole}
      setUsername={setUsername}
    />
  ) : (
    <div className="register">
      <section className="register__container">
        <h1><span className={"black"}>Glean</span><span className={"green"}>ful</span></h1>
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
)}

export default Register;
