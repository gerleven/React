import { React, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";


const CustomSnakBar = () => {
  
    let toastStateInit = {
      open: true,
      message: "Hi Snack bar!",
    };
    
    const [toastState, setToastState] = useState(toastStateInit);
    
    return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toastState.open}
        onClose={() => {}}
        message={toastState.message}
        key={"top" + "right"}
        autoHideDuration={6000}
        TransitionComponent={(props) => <Slide {...props} direction="left" />}
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