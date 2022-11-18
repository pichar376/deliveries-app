import { Box, Typography } from "@mui/material";
import { BsPersonCircle } from "react-icons/bs";
import { styleContact, styleHeader, styleSearch } from "./Header.styles";

const Header = () => {
  return (
    <Box sx={styleHeader}>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h1"
          color="initial"
          sx={{ fontSize: 16, fontWeight: "bold", flexGrow: 1 }}
        >
          Dronocargo
        </Typography>
        <Box sx={styleContact}>
          <Typography
            variant="h1"
            sx={{ fontSize: 16, mr: 1, fontWeight: "200" }}
          >
            Regina Zepeda
          </Typography>
          <BsPersonCircle style={{ fontSize: 20, color: "#00000075" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
