import { Box, Input, ThemeProvider } from "@mui/material";
import Header from "../../components/Header/Header";
import { styleDelivery } from "./Delivery.styles";
import Search from "../../components/Search/Search";
import TableData from "../../components/TableData/Table-data";
import Footer from "../../components/Footer/Footer";
import theme from "../../globalThem";
import DeliveryModal from "./components/DeliveryModal/DeliveryModal";

const Delivery = () => {
  return (
    <ThemeProvider theme={theme}>
      <DeliveryModal />
      <Box sx={styleDelivery}>
        <Header />
        <Search />
        <TableData />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Delivery;
