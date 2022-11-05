import { useState } from 'react';
import { Link } from "react-router-dom";
import './Register.css';

function Register() {
  const [role, setRole] = useState('gleaner');
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

  return (
    <form>
      {role === 'foodBank' && (
        <>
          <label>Food Bank Name </label>
          <input
            type='text'
            value={foodBankName}
            onChange={(e) => setFoodBankName(e.target.value)}
            placeholder='Sam Food Bank'
          />
        </>
      )}

      <label>First Name </label>
      <input
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder='John'
      />

      <label>Last Name </label>
      <input
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder='Smith'
      />

      <label>Address </label>
      <input
        type='text'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder='555 First Street'
      />

      <label>City </label>
      <input
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder='Montreal'
      />

      <label>Province </label>
      <input
        type='text'
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        placeholder='Quebec'
      />

      <label>E-mail </label>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='john.smith@email.ca'
      />

      <label>Phone # </label>
      <input
        type='text'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='1-514-999-9999'
      />

      <label>Availability </label>
      <input
        type='text'
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        placeholder='Aug 5 - Aug 8 from 9 AM to 5 PM'
      />

      <label>Password </label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>
        Register
      </button>

      <p>Already have an account? <Link to="/">Login</Link> now.</p>
    </form>
  );
}

export default Register;
