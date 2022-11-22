import { React, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';

const CustomSnakBar = ({ toastState, setToastState }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={toastState.open}
      onClose={() => {
        setToastState((prev)=>{return {...prev, open: false}})
      }}
      message={toastState.message}
      key={"top" + "right"}
      autoHideDuration={8000}
      TransitionComponent={(props) => <Grow {...props} direction="left" />}
      action={
        <>
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={() => {
              setToastState((prev) => ({ ...prev, open: false }));
            }}
          >
            <CloseIcon />
          </IconButton>
        </>
      }
    ></Snackbar>
  );
};

export default CustomSnakBar;
