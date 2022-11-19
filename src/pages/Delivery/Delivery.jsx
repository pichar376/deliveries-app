import { Box, Input } from "@mui/material";
import Header from "../../components/Header/Header";
import { styleDelivery } from "./Delivery.styles";
import Search from "../../components/Search/Search";
const Delivery = () => {
  return (
    <Box sx={styleDelivery}>
      <Header />
      <Search />
    </Box>
  );
};

export default Delivery;
