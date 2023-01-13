import "./PostDetails.css";
import Button from '@mui/material/Button';
import ResponsiveAppBar from "../ResponsiveAppBar";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, deleteGleaningPost } from "../../database/database";

function PostDetails(props) {
    let urgent;
    const navigate = useNavigate();
    const {postID} = useParams();
    const [post, setPost] = useState({});

    // when back arrow is clicked, user is redirected to the home page
    const homeRoute = () => {
        navigate('/');
    };

    const deleteRoute = () => {
        deleteGleaningPost(postID);
        navigate('/');
    };

    useEffect(() => {
        const getPost = async (id) => {
            const data = await getPostById(id);
            setPost(data);
        }

        getPost(postID);
    }, [postID]);

    if (post.urgent) {
        urgent = <h2 className="urgent">Urgent</h2>
    }

    return (
        <div className="details__root">
            <div className="details__content">
                <ResponsiveAppBar />
                <div className="posts__details">
                    <div className="details__container">
                        <h1>Opportunity details</h1>
                        {urgent}
                        <div className="details">
                            <p><b>Farm:</b> </p>
                            <p>{post.farm}</p>
                        </div>
                        <div className="details">
                            <p><b>Crop Type:</b> </p>
                            <p>{post.cropType}</p>
                        </div>
                        <div className="details">
                            <p><b>Description:</b> </p>
                            <p>{post.description}</p>
                        </div>
                        <div className="details">
                            <p><b>Date:</b> </p>
                            <p>{post.date}</p>
                        </div>
                        <div className="details">
                            <p><b>Address:</b> </p>
                            <p>{post.address}</p>
                        </div>
                        <div className="details">
                            <p><b>Associated Food Bank:</b> </p>
                            <p>{post.foodBank}</p>
                        </div>
                        <div className="details">
                            <p><b>Capacity:</b> </p>
                            <p>{post.capacity}</p>
                        </div>

                        {props.userId === post.creatorId && (
                            <Button
                                variant={"contained"}
                                color="error"
                                className="delete__btn"
                                sx={{mb: 1.5}}
                                onClick={deleteRoute}>
                                Delete Post
                            </Button>
                        )}
                        <Button
                            variant={"contained"}
                            color="success"
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