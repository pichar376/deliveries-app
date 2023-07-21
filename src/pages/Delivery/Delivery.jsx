import { Box, ThemeProvider, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import TableData from "../../components/TableData/Table-data";
import Footer from "../../components/Footer/Footer";
import theme from "../../globalThem";
import { styleDelivery } from "./Delivery.styles";
import useDeliveryHistory from "../../hooks/useDeliveryHistory";
import DeliveryStorageService from "../../services/DeliveryStorageService";
import { Route, Routes } from "react-router-dom";
import Shipment from "../Shipment/Shipment";

const Delivery = () => {
  const [deliveryHistory, setDeliveryHistory] = useDeliveryHistory();

  DeliveryStorageService.initialize();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styleDelivery}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <TableData
                deliveryHistory={deliveryHistory}
                setDeliveryHistory={setDeliveryHistory}
              />
            }
          />

          <Route path="/shipment/:id" element={<Shipment />} />
        </Routes>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Delivery;
