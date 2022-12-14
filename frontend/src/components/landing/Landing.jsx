import "./Landing.css";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import ResponsiveAppBar from "../ResponsiveAppBar";
import Post from "../post/Post";

export default function Landing() {
  const queryClient = new QueryClient();

  return (
    <div className="landing">
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
