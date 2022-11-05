import "./profile.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import defaultProfilePic from '../../images/avatar/Default_pfp.png';

function Profile() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (<div className="login">
        <div className="login__container">
            <h1> Profile </h1>
            <img src={defaultProfilePic} alt="Profile Picture" id="profilePic" />
            <h5> Username </h5>
            <h5> Email </h5>
            <h5> Location </h5>
            <h5> Events participated </h5>
            <h5> Foods collected </h5> 
        </div>
    </div>);
}

export default Profile;