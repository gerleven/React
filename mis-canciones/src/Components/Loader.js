import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

// const root = 
//   {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "50vh",
//     transform: "scale(4)"
//   }

const Loader = () => {
  
  return (
    // <div className={root}>
    <div>
      <CircularProgress />
    </div>
  );
};

export default Loader;
