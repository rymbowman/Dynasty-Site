import { Box } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "red",
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default MainLayout;
