import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      component={"img"}
      src="/src/assets/images/lu-logo.png"
      alt="Logo"
      sx={{
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></Box>
  );
};

export default Logo;
