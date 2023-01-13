import "./Post.css";
import {Box, Button, Card, Grid} from "@mui/material";
import {flexbox} from "@mui/system";
import {useNavigate} from "react-router-dom";
import {getAllPosts} from "../../database/database";
import {useEffect, useState} from "react";

function Post(props) {
    const [posts, setPosts] = useState([]);
    const navigateToPost = useNavigate();

    const getPostByID = async (id) => {
        const fetchedPost = await getPostByID(id);
        console.log(fetchedPost);
    }

    useEffect(() => {
        const getPosts = async () => {
            const fetchedPosts = await getAllPosts();
            for (const key in fetchedPosts) {
                // Check if post isn't already there
                if (!posts.some(post => post.id === key)) {
                    setPosts(prevPosts => {
                        if (!prevPosts.some(post => post.id === key)) {
                            return [...prevPosts, fetchedPosts[key]];
                        } else {
                            return [...prevPosts];
                        }
                    })
                }
            }
        }
        
        if (props.postID === "all") {
            if (posts.length === 0) {
                getPosts();
            }
        }
    }, [posts, props.postID]);

    // click event to take user to post details
    const handlePostClick = (event) => {
        navigateToPost(`/post_details/${event.currentTarget.id}`);
    };
    return (
        <>
            <Grid
                container
                spacing={2}
                direction="column"
                sx={{
                    justifyContent: "center",
                    marginTop: "2vh",
                    alignItems: "center",
                }}
            >
                {posts.map((post, index) => (
                    <Grid
                        item
                        id={post.id}
                        className="post-container"
                        key={index}
                        onClick={handlePostClick}
                        xs={4}
                    >
                        <Card
                            className="post-card-container"
                            sx={{
                                width: "50vw",
                            }}
                        >
                            <h2>
                                {post.farm}{" "}
                                <b className="urgent">{post.urgent ? "- URGENT" : ""}</b>
                            </h2>
                            <Box className="post-item">
                                <b>Date:</b> {post.date}
                            </Box>
                            <Box className="post-item">
                                <b>Address:</b> {post.address}
                            </Box>
                            <Box className="post-item">
                                <b>Capacity:</b> {post.capacity}
                            </Box>
                            <Box className="post-item">
                                <b>Remaining Spots:</b> {post.remaining}
                            </Box>
                            <Box className="post-item">
                                <b>Associated FoodBank:</b> {post.foodBank}
                            </Box>
                            <Button
                                variant="contained"
                                color="success"
                                type="submit"
                                id={"post"}
                                sx={{
                                    display: flexbox,
                                    alignSelf: "end",
                                    margin: "1vh",
                                    color: "black",
                                }}
                            >
                                <span className="button-text">More details</span>
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Post;
