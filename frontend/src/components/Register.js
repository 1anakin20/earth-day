import { useState } from 'react';
import { Link } from "react-router-dom";

import './Register.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Register() {
  const [role, setRole] = useState('');
  const [foodBankName, setFoodBankName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [availability, setAvailability] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    if (!firstName) alert('Please enter your first name');
    if (!lastName) alert('Please enter your last name');
    if (!email) alert('Please enter your e-mail');
    if (!password) alert('Please enter your password');
  };

  return role ? (
    <form>
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
        focused
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

      <p>By clicking Register, you agree to the Gleanful <a href=''>User Agreement</a>, <a href=''>Privacy Policy</a>, and <a href=''>Cookie Policy</a>.</p>

      <Button onClick={register}>
        Register
      </Button>

      <p>Already have an account? <Link to="/">Login</Link> now.</p>
    </form>
): (
  <section>
    <p>Please select the account type</p>
    <Button onClick={() => setRole('gleaner')}>
      Gleaner
    </Button>
    <Button onClick={() => setRole('farmer')}>
      Farmer
    </Button>
    <Button onClick={() => setRole('foodBank')}>
      Food Bank
    </Button>
  </section>
)}

export default Register;
