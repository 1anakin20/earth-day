import "./landing.css";
import * as React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ResponsiveAppBar from "../ResponsiveAppBar";
import {Card} from "@mui/material";

export default function Landing() {
  return (
    <>
      <ResponsiveAppBar />

      <Card variant="outlined">Posts go here</Card>
    </>
  );
}
