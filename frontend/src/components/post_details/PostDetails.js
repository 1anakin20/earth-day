import "./PostDetails.css";
import Button from '@mui/material/Button';
// import ResponsiveAppBar from "../ResponsiveAppBar";
// import { FaArrowLeft } from 'react-icons/fa';
// import {useNavigate} from "react-router-dom";
import ResponsiveAppBar from "../ResponsiveAppBar";
<<<<<<< HEAD
import {useNavigate} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
=======
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import * as API from "../../api/requestAPI";
>>>>>>> ba2556b819c6f2b8d1dd9481139784e0b43d0d3c

function PostDetails() {
    const {postID} = useParams()
    const {data, error, isError, isLoading} = useQuery('posts', async () => API.getPost(postID))
    let navigate = useNavigate();
    // when back arrow is clicked, user is redirected to the home page
    const homeRoute = () => {
        let path = `..\.`;
        navigate(path);
    };

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }

    const post = data[0];
    let urgent
    if (post.urgent) {
        urgent = <h2 className="urgent">Urgent</h2>
    }

    return (
        <div className="details__root">
            <div className="details__content">
                <ResponsiveAppBar/>
                <div className="posts__details">
                    <div className="details__container">
                        <h1>Opportunity details</h1>
                        {urgent}
                        <div className="details">
                            <p>Farm: </p>
                            <p>{post.farm}</p>
                        </div>
                        <div className="details">
                            <p>Crop Type: </p>
                            <p>{post.cropType}</p>
                        </div>
                        <div className="details">
                            <p>Description: </p>
                            <p>{post.description}</p>
                        </div>
                        <div className="details">
                            <p>Date: </p>
                            <p>{post.date}</p>
                        </div>
                        <div className="details">
                            <p>Address: </p>
                            <p>{post.address}</p>
                        </div>
                        <div className="details">
                            <p>Food Bank: </p>
                            <p>{post.foodBank}</p>
                        </div>
                        <div className="details">
                            <p>Capacity: </p>
                            <p>{post.capacity}</p>
                        </div>

<<<<<<< HEAD
        <div className="posts__details">
            <div className="details__container">
            <Button className="back__btn" onClick={homeRoute}>
            <FaArrowLeft />
            </Button>
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
                
=======
                        <Button
                            variant={"contained"}
                            className="back__btn"
                            onClick={homeRoute}>
                            Back
                        </Button>
                    </div>
                </div>
>>>>>>> ba2556b819c6f2b8d1dd9481139784e0b43d0d3c
            </div>
        </div>
    );
}

export default PostDetails;