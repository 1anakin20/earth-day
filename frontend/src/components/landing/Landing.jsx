import "./landing.css";
import * as React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ResponsiveAppBar from "../ResponsiveAppBar";
import Post from "../post/Post";

export default function Landing() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className={"landing__background"}>
        <div className="landing__long">
          <Post postID={"all"} />
        </div>
      </div>
    </div>
  );
}
