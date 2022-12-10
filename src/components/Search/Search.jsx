import { Box, Typography } from "@mui/material";
import DeliveryButton from "./components/DeliveryButton/DeliveryButton";
import Input from "./components/Input/Input";

const Search = () => {
  return (
    <Box sx={{ display: "flex", mt: "3rem", alignItems: "center" }}>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Typography
          color="initial"
          sx={{ display: "flex", fontSize: "30px", mr: "10px" }}
        >
          Delivery
        </Typography>
        <Typography
          sx={{
            display: "flex",
            color: "#00000060",
            fontSize: "30px",
            fontWeight: 300,
          }}
        >
          History
        </Typography>
      </Box>
      <Input />
      <DeliveryButton />
    </Box>
  );
};

export default Search;
