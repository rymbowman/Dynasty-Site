import { Box, Button, Tooltip } from "@mui/material";

const pages = ["Members", "League", "History", "Resources"];
const MenuOptions = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Tooltip key={page} title={page} arrow>
          <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
            {page}
          </Button>
        </Tooltip>
      ))}
    </Box>
  );
};

export default MenuOptions;
