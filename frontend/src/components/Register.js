import { useState } from 'react';

import './Register.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

function Register() {
  const [role, setRole] = useState('');
  const [farmName, setFarmName] = useState('');
  const [foodBankName, setFoodBankName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [username, setUsername] = useState('');
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

  return role ? (
    <div className="register">
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
              type='text'
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              placeholder='Farm Name'
            />
          </>
        )}
        
        {role === 'foodBank' && (
          <>
            <TextField
              type='text'
              value={foodBankName}
              onChange={(e) => setFoodBankName(e.target.value)}
              placeholder='Food Bank Name'
            />
          </>
        )}

        <TextField
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First Name'
        />

        <TextField
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last Name'
        />

        <TextField
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Address'
        />

        <TextField
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='City'
        />

        <TextField
          type='text'
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          placeholder='Province'
        />

        <TextField
          type='email'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Email'
        />

        <TextField
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone #'
        />

        <TextField
          type='text'
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          placeholder='Availability'
        />

        <TextField
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />

        {role === 'gleaner' && (
          <>
            <TextField
              type='number'
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
              placeholder='Group size (minimum of 5)'
              min={5}
            />
          </>
        )}

        {(role === 'gleaner' || role === 'foodBank') && (
          <>
            <TextField
              type='number'
              value={maxDistance}
              onChange={(e) => setMaxDistance(e.target.value)}
              placeholder='Max distance (km)'
            />
          </>
        )}

        {(role === 'farmer' || role === 'foodBank') && (
          <>
            <TextField
              type='number'
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder='Capacity'
            />
          </>
        )}

        <p>By clicking Register, you agree to the Gleanful <a href='legal'>User Agreement</a>, <a href='legal'>Privacy Policy</a>, and <a href='legal'>Cookie Policy</a>.</p>

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
