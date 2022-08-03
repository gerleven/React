import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h3>Dashboard</h3>
      <button onClick={handleClick}>Go Home</button>
    </>
  );
};

export default Dashboard;
