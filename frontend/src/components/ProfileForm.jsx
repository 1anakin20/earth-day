import { useNavigate } from 'react-router-dom';

import "./ProfileForm.css";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

import { updateFarmerData, writeFarmerData } from "../database/database";

function ProfileForm(props) {
  const { user, submitButtonText, setUser, setProfileMode, setSubmitButtonText } = props;
  const navigate = useNavigate();
  let clickFunction;
  const textFields = [
    { label: 'First Name', type: 'text', value: user.firstName, dataKey: 'firstName', placeholder: 'John' },
    { label: 'Last Name', type: 'text', value: user.lastName, dataKey: 'lastName', placeholder: 'Smith' },
  ];

  const updateUser = (event, key) => {
    setUser(prev => ({ ...prev,
        [key]: event.target.value
    }));
  };

  const updateProfile = () => {
    // Check required fields are filled
    // Save user info to the database
    if (user.role === 'Farmer') {
      updateFarmerData(user);
    }
    setProfileMode('');
    setSubmitButtonText('Edit Profile');
  };

  const register = () => {
    // Check required fields are filled
    // Save user info to the database
    if (user.role === 'Farmer') {
      writeFarmerData(user, setUser);
    }
    navigate('/');
  };

  if (submitButtonText === 'Update Profile') {
    clickFunction = updateProfile;
  } else {
    clickFunction = register;
  }

  const inputFields = textFields.map(textField => {
    return (
      <TextField
        key={textField.label}  
        label={textField.label}
        type={textField.type}
        value={textField.value}
        onChange={(e) => updateUser(e, textField.dataKey)}
        placeholder={textField.placeholder}
      />
    );
  });

  return (
    <form className="form__info">
      {user.role === 'Farmer' && (
        <TextField
          label="Farm Name"
          type='text'
          value={user.farmName}
          onChange={(e) => updateUser(e, "farmName")}
          placeholder='Plentiful Farm'
        />
      )}
      {inputFields}
      <TextField
        label="Address"
        type='text'
        value={user.address}
        onChange={(e) => updateUser(e, "address")}
        placeholder='5555 First Street'
      />
      <TextField
        label="City"
        type='text'
        value={user.city}
        onChange={(e) => updateUser(e, "city")}
        placeholder='Montreal'
      />
      <TextField
        label="Province"
        type='text'
        value={user.province}
        onChange={(e) => updateUser(e, "province")}
        placeholder='Quebec'
      />
      <TextField
        label="Email"
        type='email'
        value={user.email}
        onChange={(e) => updateUser(e, "email")}
        placeholder='john.smith@email.ca'
      />
      <TextField
        label="Phone Number"
        type='text'
        value={user.phone}
        onChange={(e) => updateUser(e, "phone")}
        placeholder='1-514-999-9999'
      />
      <TextField
        label="Availability"
        type='text'
        value={user.availability}
        onChange={(e) => updateUser(e, "availability")}
        placeholder='Aug 5 - Aug 8 from 9 AM to 5 PM'
      />
      <TextField
        label="Password"
        type='password'
        value={user.password}
        onChange={(e) => updateUser(e, "password")}
      />
      {(user.role === 'Farmer' || user.role === 'Food Bank') && (
        <TextField
          label="Capacity"
          type='number'
          value={user.capacity}
          onChange={(e) => updateUser(e, "capacity")}
          placeholder='25'
        />
      )}
      {user.role === 'Farmer' && (
        <TextField
          label="Associated Food Bank"
          type='text'
          value={user.foodBank}
          onChange={(e) => updateUser(e, "foodBank")}
          placeholder='Donations Welcome Food Bank'
        />
      )}
      <Button
        variant={"contained"}
        color="success"
        onClick={clickFunction}>
        {submitButtonText}
      </Button>
    </form>
  );
}

export default ProfileForm;