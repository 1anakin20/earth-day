import "./Post.css";
import { useState } from "react";
import { Box, Button, Card, Grid } from "@mui/material";
import { flexbox } from "@mui/system";

////////////////////////// DUMMY DATA  ////////////////////////
const posts = [
  {
    farm: "Marvin's Farm",
    cropType: "Potatoes",
    description: "Very Good Farm",
    date: "2022-10-24",
    address: "231 rue FarmVille",
    foodBank: "Super Food Bank",
    capacity: 20,
    urgent: true,
    remaining: 10,
    id: 1,
  },
  {
    farm: "Bill's Farm",
    cropType: "Corn",
    description: "have the best corn in the world",
    date: "2022-11-04",
    address: "24 rue eastWood",
    foodBank: "Millers food and CO",
    capacity: 100,
    urgent: true,
    remaining: 76,
    id: 2,
  },
  {
    farm: "Claire's",
    cropType: "Pumpkins",
    description: "So many pumpkins",
    date: "2022-11-06",
    address: "456 AtWood Street",
    foodBank: "halloween food bank",
    capacity: 54,
    urgent: false,
    remaining: 2,
    id: 3,
  },
  {
    farm: "Claire's Second Farm",
    cropType: "Pumpkins",
    description: "So many pumpkins",
    date: "2022-11-06",
    address: "456 AtWood Street",
    foodBank: "halloween food bank",
    capacity: 54,
    remaining: 15,
    urgent: false,
    id: 4,
  },
];

//////////////////////////////////////////

const Post = () => {
  const [currentPost, setCurrentPost] = useState(null);

  // click event to take user to post details
  const handlePostClick = (event) => {
    console.log(event.currentTarget.id);
    console.log(event.currentTarget);
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
};

export default Post;
