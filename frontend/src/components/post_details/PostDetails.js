import "./PostDetails.css";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import ResponsiveAppBar from "../ResponsiveAppBar";

function PostDetails() {

    return (
        <div className="details__root">
            <div className="details__content">
                <ResponsiveAppBar/>
                <div className="posts_details">
                    <div className="details__container">
                      <h1>Post Details</h1>
                        <p>Farm: </p>
                        <p>Crop Type: </p>
                        <p>Description: </p>
                        <p>Date: </p>
                        <p>Address: </p>
                        <p>Food Bank: </p>
                        <p>Capacity: </p>
                        <Button
                            variant={"contained"}
                            className="back__btn">
                            <a href='/'>Back</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>);
}

export default PostDetails;