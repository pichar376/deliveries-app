import { Box, ThemeProvider } from "@mui/material";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import TableData from "../../components/TableData/Table-data";
import Footer from "../../components/Footer/Footer";
import theme from "../../globalThem";
import { styleDelivery } from "./Delivery.styles";
import useDeliveryHistory from "../../hooks/useDeliveryHistory";
import DeliveryStorageService from "../../services/DeliveryStorageService";
import { Route, Routes, useLocation } from "react-router-dom";
import Shipment from "../Shipment/Shipment";

const Delivery = () => {
  const [deliveryHistory, setDeliveryHistory] = useDeliveryHistory();

  const location = useLocation();

  DeliveryStorageService.initialize();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styleDelivery}>
        <Header />
        {location.pathname === "/" && (
          <Search
            deliveryHistory={deliveryHistory}
            setDeliveryHistory={setDeliveryHistory}
          />
        )}

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
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Delivery;
