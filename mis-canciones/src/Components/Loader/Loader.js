import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Loader.css";
import { Box } from "@mui/system";

/*How to replace makeStyle with a "myStyle object" and "sx" property: */
const circularProgressStyle2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
  transform: "scale(4)",
};

const Loader = () => {
  return (
    <>
      <Box sx={circularProgressStyle2}>
        <CircularProgress />
      </Box>

      {/*How to replace makeStyle with a "CSS class" and "className" property: */}
      {/* <Box className="circularProgressStyle">
        <CircularProgress />
      </Box> */}
    </>
  );
};

export default Loader;
