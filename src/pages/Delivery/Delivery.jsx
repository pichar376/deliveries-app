import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import { styleDelivery } from "./Delivery.styles";

const Delivery = () => {
  return (
    <Box sx={styleDelivery}>
      <Header />
    </Box>
  );
};

export default Delivery;
