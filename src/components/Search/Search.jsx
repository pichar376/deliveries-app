import { Box, Typography } from "@mui/material";
import { useState } from "react";
import DeliveryButton from "./components/DeliveryButton/DeliveryButton";
import DeliveryModal from "./components/DeliveryModal/DeliveryModal";
import Input from "./components/Input/Input";

const Search = ({ deliveryHistory, setDeliveryHistory }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
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
      <DeliveryButton onClick={handleOpen} />
      {openModal && (
        <DeliveryModal
          deliveryHistory={deliveryHistory}
          setDeliveryHistory={setDeliveryHistory}
          openModal={openModal}
          setOpenModal={setOpenModal}
          onClose={handleClose}
        />
      )}
    </Box>
  );
};

export default Search;
