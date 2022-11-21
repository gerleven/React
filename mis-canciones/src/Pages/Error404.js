import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

const Eror404 = () => {
  const url = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert
          severity="error"
          // onClose={() => {
          //   navigate("/");
          // }}
          // action={
          //   <Button
          //     color="inherit"
          //     size="small"
          //     onClick={() => {
          //       navigate("/");
          //     }}
          //   >
          //     Volver
          //   </Button>
          // }
        >
          <AlertTitle>Page not found</AlertTitle>
          the url <b>'{url.pathname}'</b> was not found
        </Alert>
      </Stack>
      <div style={{ margin: "1rem auto", textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: "unset" }}>
          <Button variant="outlined" startIcon={<HomeIcon />}>
            Back
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Eror404;
