import "./PostDetails.css";
import Button from '@mui/material/Button';
import ResponsiveAppBar from "../ResponsiveAppBar";
import React from "react";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function PostDetails() {

    // when back arrow is clicked, user is redirected to the home page
    let navigate = useNavigate(); 
    const homeRoute = () => { 
        let path = `..\.`; 
        navigate(path);
    };

    return (
        <div className="details__root">
            <div className="details__content">
                <ResponsiveAppBar/>

        <div className="posts__details">
            <div className="details__container">
              <h1>Post Details</h1>
              <div className="details">
                  <p>Farm: </p>
                  <p>Quinn's Farm</p>
                  </div>
                  <div className="details">
                  <p>Crop Type: </p>
                  <p>Apples</p>
                  </div>
                  <div className="details">
                  <p>Description: </p>
                  <p>Look at all them apples</p>
                  </div>
                  <div className="details">
                  <p>Date: </p>
                  <p>06-11-2022</p>
                  </div>
                  <div className="details">
                  <p>Address: </p>
                  <p>1234 road</p>
                  </div>
                  <div className="details">
                  <p>Food Bank: </p>
                  <p>westmount</p>
                  </div>
                  <div className="details">
                  <p>Capacity: </p>
                  <p>8</p>
                  </div>
                
                  <Button
                      variant={"contained"}
                      className="back__btn"
                      onClick={homeRoute}>
                      Back
                  </Button>
            </div>
      </div>
      </div>
  </div>);
}

export default PostDetails;