import "./landing.css";
import * as React from "react";
import NewPost from "../new-post/NewPost";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ResponsiveAppBar from "./ResponsiveAppBar";
import { Card } from "@mui/material";
import Post from "../post/Post";

export default function Landing() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>

      <Post></Post>
    </>
  );
}
