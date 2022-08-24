import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Loader/Loader.css";
import { Box } from "@mui/system";

const circularProgressStyle2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "scale(6)",
};

const Loader = () => {
  return (
    <Box className="circularProgressStyle" sx={circularProgressStyle2}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
