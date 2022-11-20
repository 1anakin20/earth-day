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
      const [modifySaveButtonText, setModifySaveButtonText] = useState('Modify Profile');

    const handleImageUpload = e => {
       // not implemented
       // would be used to change the profile picture 
    };

    // when back arrow is clicked, user is redirected to the home page
    let navigate = useNavigate(); 
    const routeChange = () => { 
        let path = `..\.`; 
        navigate(path);
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

    const clickModifySave = () => {
        modifySaveButtonText === 'Modify Profile' ? (
            setModifySaveButtonText('Update Profile')
        ) : (
            setModifySaveButtonText('Modify Profile')
        );
      };

    return (
        <div className="profile__root">
            <div className="profile__content">
                <ResponsiveAppBar
                    user={user}
                />

                <div className="profile">
                    <div className="profile__container">
                        {modifySaveButtonText === 'Modify Profile' ? (
                            <>
                                <Button id="back_btn" onClick={routeChange}>
                                <FaArrowLeft />
                                </Button>
                                <h1 id="profile_tag"> Profile </h1>
                                <img src={defaultProfilePic} alt="Profile Picture" id="profilePic" />
                                    
                                <Button onClick={handleImageUpload}>
                                    Change Profile Picture
                                </Button>

                                <Button
                                    variant={"contained"}
                                    color="error"
                                    className="modify__btn"
                                    onClick={signOut}>
                                    Log Out
                                </Button>

                                {/* Some hardcoded values still left to update */}
                                <div className="info">
                                    <p> <b>Account Type </b></p>
                                    <p> {user.role}</p>
                                </div>
                                <div className="info">
                                    <p> <b>First Name </b></p>
                                    <p> {user.firstName}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Last Name </b></p>
                                    <p> {user.lastName}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Email </b></p>
                                    <p> {user.email}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Full Address</b></p>
                                    <p> {user.address}, {user.city}, {user.province}, Canada</p>
                                </div>
                                <div className="info">
                                    <p> <b>Phone number</b></p>
                                    <p> {user.phone}</p>
                                </div>
                                <div className="info">
                                    <p> <b>Password</b></p>
                                    <p> ********</p>
                                </div>
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
                            </>
                        ) : (
                            <>
                                <p>Input fields of profile info goes here.</p>
                            </>
                        )
                        }
                        {/* This button is not handled yet. Would allow the user to modify their info */}
                        <Button
                            variant={"contained"}
                            color="success"
                            className="modify__btn"
                            onClick={() => clickModifySave()}>
                            {modifySaveButtonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;