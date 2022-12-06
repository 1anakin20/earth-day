import "./ProfileForm.css";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

import { updateFarmerData } from "../database/database";

function ProfileForm(props) {
  const { user, submitButtonText, setUser, setProfileMode, setSubmitButtonText } = props;

  const updateUser = (event, key) => {
    setUser(prev => ({ ...prev,
        [key]: event.target.value
    }));
  };

  const updateProfile = () => {
    // Check required fields are filled
    // Save user info to the database
    if (user.role === 'Farmer') {
      updateFarmerData(
        user.id,
        user.farmName,
        user.firstName,
        user.lastName,
        user.address,
        user.city,
        user.province,
        user.email,
        user.phone,
        user.availability,
        user.password,
        user.capacity,
        user.foodBank
      );
    }
    setProfileMode('');
    setSubmitButtonText('Edit Profile');
  };

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
      <TextField
        label="First Name"
        type='text'
        value={user.firstName}
        onChange={(e) => updateUser(e, "firstName")}
        placeholder='John'
      />
      <TextField
        label="Last Name"
        type='text'
        value={user.lastName}
        onChange={(e) => updateUser(e, "lastName")}
        placeholder='Smith'
      />
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
        onClick={updateProfile}>
        {submitButtonText}
      </Button>
    </form>
  );
}

export default ProfileForm;