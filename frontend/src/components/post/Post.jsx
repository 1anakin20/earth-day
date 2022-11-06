import "./Post.css";
import {useState} from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {flexbox} from "@mui/system";
import * as API from "../../api/requestAPI";
import {useQuery} from 'react-query'

function Post(props) {
    const [currentPost, setCurrentPost] = useState(null);
    const {data, error, isError, isLoading } = useQuery('posts', async () => API.getPost(props.postID))

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }

    const posts = data;

    // click event to take user to post details
    const handlePostClick = (event) => {
        console.log(event.currentTarget.id);
        console.log(event.currentTarget);
        setCurrentPost(event.currentTarget.id);
        setCurrentPost({
            currentPost: event.currentTarget.id,
        });
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
                                <b>FoodBank:</b> {post.foodBank}
                            </Box>
                            <Button
                                variant="outlined"
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
                                Register
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Post;
