import { Box, Typography } from "@mui/material";
import { styleTitle } from "./Search.style";
import Input from "../Input/Input";
import DeliveryButton from "../DeliveryButton/DeliveryButton";

const Search = () => {
  return (
    <Box sx={{ display: "flex", mt: "3rem" }}>
      <Box sx={styleTitle}>
        <Typography
          color="initial"
          sx={{ display: "flex", fontSize: "30px", mr: "10px" }}
        >
          Delivery
        </Typography>
        <Typography sx={{ color: "#00000060", fontSize: "30px" }}>
          History
        </Typography>
      </Box>
      <Input />
      <DeliveryButton />
    </Box>
  );
};

export default Search;
