import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Loader.css";
import { Box } from "@mui/system";

const circularProgressStyle2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
  transform: "scale(4)",
};

const Loader = () => {
  return (
    <Box sx={circularProgressStyle2}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
