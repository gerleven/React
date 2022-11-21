import React, { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteIcon from "@mui/icons-material/Delete";
import PanToolIcon from "@mui/icons-material/PanTool";

const AlertDialog = ({ id, deleteSong }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const iconStyles = { marginRight: "5px" };
  return (
    <>
      <IconButton edge="end" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Deletion confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Confirm that you want to delete the song with id <b>{id}</b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              deleteSong(id);
              handleClose();
            }}
            color="primary"
            style={{ marginRight: "5px" }}
          >
            <DeleteForeverIcon style={{ ...iconStyles }} /> Remove
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            <PanToolIcon style={{ ...iconStyles }} /> Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
