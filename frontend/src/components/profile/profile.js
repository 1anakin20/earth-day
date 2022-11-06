import "./profile.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import defaultProfilePic from '../../images/avatar/Default_pfp.png';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


function Profile() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `..\.`; 
    navigate(path);
  }
  

    return (<div className="login">
        <div className="profile__container">
        <Button id="back_btn" onClick={routeChange}>
        <FaArrowLeft />
        </Button>
            <h1 id="profile_tag"> Profile </h1>
            <img src={defaultProfilePic} alt="Profile Picture" id="profilePic" />
            <div className="info">
                <p> <b>Username </b></p>
                <p> User's username</p>
            </div>
            <div className="info">
                <p> <b>Email </b></p>
                <p> User's email</p>
            </div>
            <div className="info">
                <p> <b>Location</b></p>
                <p> User's location</p>
            </div>
            <div className="info">
                <p> <b>Events participated </b></p>
                <p> User's events</p>
            </div>
            <div className="info">
                <p> <b>Foods collected </b></p>
                <p> User's foods</p>
            </div>
        </div>
    </div>);
}

export default Profile;