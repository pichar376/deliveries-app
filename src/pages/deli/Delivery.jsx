import { Box, ThemeProvider } from "@mui/material";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import TableData from "../../components/TableData/Table-data";
import Footer from "../../components/Footer/Footer";
import theme from "../../globalThem";
import { styleDelivery } from "./Delivery.styles";
import useDeliveryHistory from "../../hooks/useDeliveryHistory";
import DeliveryStorageService from "../../services/DeliveryStorageService";

const Delivery = () => {
  const [deliveryHistory, setDeliveryHistory] = useDeliveryHistory();

  DeliveryStorageService.initialize();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styleDelivery}>
        <Header />
        <Search
          deliveryHistory={deliveryHistory}
          setDeliveryHistory={setDeliveryHistory}
        />
        <TableData deliveryHistory={deliveryHistory} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Delivery;
