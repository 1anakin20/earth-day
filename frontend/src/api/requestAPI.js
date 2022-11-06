import axios from "axios";

const API_URL = "http://localhost:3000";

export async function getPost(postId) {
    const url = new URL(API_URL);
    url.pathname = `/post/${postId}`;
    try {
        return (await axios.get(url)).data;
    } catch (error) {
        console.error("Could not get all posts", error);
        throw error;
    }
}