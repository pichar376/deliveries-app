import { Box, Typography } from "@mui/material";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: 16,
          fontWeight: 600,
          lineHeight: "24px",
          flexGrow: 1,
        }}
      >
        Dronocargo
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: 16, mr: 1 }}>Regina Zepeda</Typography>
        <BsPersonCircle style={{ fontSize: 20, color: "#00000075" }} />
      </Box>
    </header>
  );
};

export default Header;
