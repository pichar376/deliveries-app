import { Box, Typography } from "@mui/material";
import { useState } from "react";
import DeliveryModal from "../../pages/Delivery/components/DeliveryModal/DeliveryModal";
import DeliveryButton from "./components/DeliveryButton/DeliveryButton";
import Input from "./components/Input/Input";

const Search = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
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
      <DeliveryButton onClick={handleClick} />
      {openModal && (
        <DeliveryModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleClick={handleClick}
        />
      )}
    </Box>
  );
};

export default Search;
