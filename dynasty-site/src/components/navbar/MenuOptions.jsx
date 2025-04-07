import { Box, Button, Tooltip } from "@mui/material";

const pages = ["Members", "League", "History", "Resources"];
const MenuOptions = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {pages.map((page) => (
        <Tooltip key={page} title={page} arrow>
          <Button key={page} sx={{ color: "white" }}>
            {page}
          </Button>
        </Tooltip>
      ))}
    </Box>
  );
};

export default MenuOptions;
