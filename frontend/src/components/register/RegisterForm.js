import { useState } from 'react';

import './RegisterForm.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

function RegisterForm(props) {
  const { role, username, setRole, setUsername } = props;

  const [farmName, setFarmName] = useState('');
  const [foodBankName, setFoodBankName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [phone, setPhone] = useState('');
  const [availability, setAvailability] = useState('');
  const [password, setPassword] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [maxDistance, setMaxDistance] = useState('');
  const [capacity, setCapacity] = useState('');

  const register = () => {
    if (!firstName) alert('Please enter your first name');
    if (!lastName) alert('Please enter your last name');
    if (!username) alert('Please enter your e-mail');
    if (!password) alert('Please enter your password');
  };

  return (
    <div className="register__long">
      <form className="register__container">
        <h1><span className={"black"}>Glean</span><span className={"green"}>ful</span></h1>
        <p>Already have an account?</p>
        <Link href="login" underline="none">Login</Link>
        <Divider variant={"middle"} className={"login__separation"}>
            <Chip label={"Or register"} color={"default"}/>
        </Divider>
        {role === 'farmer' && (
          <>
            <TextField
              label="Farm Name"
              type='text'
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              placeholder='Plentiful Farm'
            />
          </>
        )}
        
        {role === 'foodBank' && (
          <>
            <TextField
              label="Food Bank Name"
              type='text'
              value={foodBankName}
              onChange={(e) => setFoodBankName(e.target.value)}
              placeholder='Jim Food Bank'
            />
          </>
        )}

        <TextField
          label="First Name"
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='John'
        />

        <TextField
          label="Last Name"
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Smith'
        />

        <TextField
          label="Address"
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='5555 First Street'
        />

        <TextField
          label="City"
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Montreal'
        />

        <TextField
          label="Province"
          type='text'
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          placeholder='Quebec'
        />

        <TextField
          label="Email"
          type='email'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='john.smith@email.ca'
        />

        <TextField
          label="Phone #"
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='1-514-999-9999'
        />

        <TextField
          label="Availability"
          type='text'
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          placeholder='Aug 5 - Aug 8 from 9 AM to 5 PM'
        />

        <TextField
          label="Password"
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {role === 'gleaner' && (
          <>
            <TextField
              label="Group size (minimum of 5)"
              type='number'
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
              placeholder='8'
              min={5}
            />
          </>
        )}

        {(role === 'gleaner' || role === 'foodBank') && (
          <>
            <TextField
              label="Max distance (km)"
              type='number'
              value={maxDistance}
              onChange={(e) => setMaxDistance(e.target.value)}
              placeholder='20'
            />
          </>
        )}

        {(role === 'farmer' || role === 'foodBank') && (
          <>
            <TextField
              label="Capacity"
              type='number'
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder='25'
            />
          </>
        )}

        <p>
          By clicking Register, you agree to the Gleanful <br /><a href='legal'>User Agreement</a>,{' '} 
          <a href='legal'>Privacy Policy</a>, and <a href='legal'>Cookie Policy</a>.
        </p>

        <Button
          variant={"contained"}
          className="register__btn"
          onClick={register}>
          Register
        </Button>
        <Button
          variant={"contained"}
          color={"warning"}
          onClick={() => setRole('')}>
          Back
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
