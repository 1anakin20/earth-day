import "./profile.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import defaultProfilePic from '../../images/avatar/Default_pfp.png';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../ResponsiveAppBar";

import { updateFarmerData } from "../../database/database";

function Profile(props) {
    const { user, setUser } = props;
    
    const [interest, setInterest] = useState("");
    const [chipData, setChipData] = useState([
        { key: 0, label: 'Potato' },
        { key: 1, label: 'Apple' },
        { key: 2, label: 'Strawberry' },
        { key: 3, label: 'grape' },
        { key: 4, label: 'cherry' },
      ]);

    const [profileMode, setProfileMode] = useState('');
    const [editButtonText, setEditButtonText] = useState('Edit Profile');

    const handleImageUpload = e => {
       // not implemented
       // would be used to change the profile picture 
    };

    // when back arrow is clicked, user is redirected to the previous page
    let navigate = useNavigate(); 
    const previousPage = () => { 
        if (editButtonText === 'Edit Profile') {
            navigate('/');
        } else {
            setProfileMode('');
            setEditButtonText('Edit Profile');
        }
    }

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const signOut = () => {
        setUser({});
        navigate('/');
    };

    const clickEdit = () => {
        if (editButtonText === 'Edit Profile') {
            setProfileMode('Edit ');
            setEditButtonText('Update Profile');
        } else {
            setEditButtonText('Edit Profile');
        }
    };

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
        setEditButtonText('Edit Profile');
    };

    return (
        <div className="profile__root">
            <div className="profile__content">
                <ResponsiveAppBar
                    user={user}
                />

                <div className="profile">
                    <div className="profile__container">
                        <Button id="back_btn" onClick={previousPage}>
                            <FaArrowLeft />
                        </Button>
                        <h1 id="profile_tag">{profileMode}Profile</h1>
                        <img src={defaultProfilePic} alt="Profile Picture" id="profilePic" />
                            
                        <Button onClick={handleImageUpload}>
                            Change Profile Picture
                        </Button>
                        {editButtonText === 'Edit Profile' && (
                            <Button
                                variant={"contained"}
                                color="error"
                                className="modify__btn"
                                onClick={signOut}>
                                Log Out
                            </Button>
                        )}

                        <div className="info">
                            <p> <b>Account Type </b></p>
                            <p> {user.role}</p>
                        </div>

                        {editButtonText === 'Edit Profile' ? (
                            <>
                                {/* Some hardcoded values still left to update */}
                                {user.role === 'Farmer' && (
                                    <div className="info">
                                        <p> <b>Farm Name </b></p>
                                        <p> {user.farmName}</p>
                                    </div>
                                )}
                                <div className="info">
                                    <p> <b>First Name </b></p>
                                    <p> {user.firstName}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Last Name </b></p>
                                    <p> {user.lastName}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Full Address</b></p>
                                    <p> {user.address}, {user.city}, {user.province}, Canada</p>
                                </div>
                                <div className="info">
                                    <p> <b>Email </b></p>
                                    <p> {user.email}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Phone number</b></p>
                                    <p> {user.phone}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Availability</b></p>
                                    <p> {user.availability}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Password</b></p>
                                    <p> ********</p>
                                </div>
                                {(user.role === 'Farmer' || user.role === 'Food Bank') && (
                                    <div className="info">
                                        <p> <b>Capacity</b></p>
                                        <p> {user.capacity}</p>
                                    </div>
                                )}
                                {user.role === 'Farmer' && (
                                    <div className="info">
                                        <p> <b>Associated Food Bank</b></p>
                                        <p> {user.foodBank}</p>
                                    </div>
                                )}
                                <div className="info">
                                    <p> <b>Events participated </b></p>
                                    <p> User's events</p>
                                </div>
                                <div className="info">
                                    <p> <b>Foods collected </b></p>
                                    <p> User's foods</p>
                                </div>
                                <TextField
                                    label="Interested produce"
                                    type='text'
                                    value={interest}
                                    onChange={(e) => setInterest(e.target.value)}
                                    placeholder='Carrot'
                                />
                                <Paper
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        listStyle: 'none',
                                        p: 0.8,
                                        m: 0
                                    }}
                                    component="ul"
                                >
                                    {chipData.map((data) => {
                                        let icon;

                                        return (
                                        <ListItem key={data.key}>
                                            <Chip
                                            icon={icon}
                                            label={data.label}
                                            onDelete={handleDelete(data)}
                                            />
                                        </ListItem>
                                        );
                                    })}
                                </Paper>
                                <br/>
                                {/* This button allows the user to modify their info */}
                                <Button
                                    variant={"contained"}
                                    color="success"
                                    className="modify__btn"
                                    onClick={clickEdit}>
                                    {editButtonText}
                                </Button>
                            </>
                        ) : (
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
                                    className="modify__btn"
                                    onClick={updateProfile}>
                                    {editButtonText}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;