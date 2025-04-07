import { AppBar, styled, Toolbar } from "@mui/material";
import MenuOptions from "./MenuOptions";
import Logo from "./Logo";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  padding: "0 20px",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
}));

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
        <Logo />
        <MenuOptions />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
