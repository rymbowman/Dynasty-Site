import { AppBar, Box, Container, Toolbar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={"img"}
            src="/src/assets/images/lu-logo.png"
            sx={{ width: "3rem", height: "3rem" }}
          ></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
