import "./landing.css";
import * as React from "react";
import {QueryClient, QueryClientProvider} from "react-query";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ResponsiveAppBar from "../ResponsiveAppBar";
import Post from "../post/Post";

export default function Landing(props) {
  const {role, username} = props;
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div>
          <ResponsiveAppBar />
          <div className={"landing__background"}>
            <div className="landing__long">
              <Post postID={"all"} />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </div>
  );
}
