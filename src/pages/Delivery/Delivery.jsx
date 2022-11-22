import { Box, Input } from "@mui/material";
import Header from "../../components/Header/Header";
import { styleDelivery } from "./Delivery.styles";
import Search from "../../components/Search/Search";
import TableData from "../../components/TableData/Table-data";
const Delivery = () => {
  return (
    <Box sx={styleDelivery}>
      <Header />
      <Search />
      <TableData />
    </Box>
  );
};

export default Delivery;
