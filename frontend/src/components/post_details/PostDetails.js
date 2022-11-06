import "./PostDetails.css";
import Button from '@mui/material/Button';
import ResponsiveAppBar from "../ResponsiveAppBar";
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import * as API from "../../api/requestAPI";

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

                        <Button
                            variant={"contained"}
                            className="back__btn"
                            onClick={homeRoute}>
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetails;