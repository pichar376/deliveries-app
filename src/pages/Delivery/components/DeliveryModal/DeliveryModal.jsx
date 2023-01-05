import { Stack } from "@mui/system";
import { useState } from "react";
import AutocompleteBase from "../../../../components/AutocompleteBase/AutocompleteBase";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import TextFieldBase from "../../../../components/TextFieldBase/TextFeldBase";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import dataBase from "../../../../dataBase";

const getLabelProps = (data, prop) => {
  const renderData = data.map((el, index) => el[prop]);

  const result = renderData.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return result;
};

const stackStyles = {
  display: "flex",
  flexFlow: "row wrap",
  gap: "1rem",
  mt: "32px",
  justifyContent: "center",
};

const DeliveryModal = ({ openModal, handleClick }) => {
  const [form, setForm] = useState({
    platform: "",
    drone: "",
    technician: "",
    orderId: "",
  });
  return (
    <>
      <ModalBase
        handleClick={handleClick}
        openModal={openModal}
        titleModal="New Delivery"
        descriptionModal="Please select the order ID and a technician to deploy the cargo. All
            elements are mandatory."
        renderBody={() => {
          return (
            <>
              <Stack sx={stackStyles}>
                <TextFieldBase
                  label="Order ID"
                  onChange={(e) => {
                    setForm({ orderId: e.target.value });
                  }}
                  value={form.orderId}
                />
                <AutocompleteBase
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{ ml: "1rem", color: "rgba(0, 0, 0, 0.25)" }}
                      />
                    </InputAdornment>
                  }
                  options={getLabelProps(dataBase, "technician")}
                  label="Technician"
                  value={form.technician}
                  onChange={(e, value) => {
                    setForm({
                      technician: e.target.value,
                    });
                  }}
                />
              </Stack>
              <Stack sx={stackStyles}>
                <AutocompleteBase
                  options={getLabelProps(dataBase, "platform")}
                  label="Platform"
                  value={form.platform}
                  onChange={(e) => {
                    setForm({
                      platform: e.target.value,
                    });
                  }}
                />
                <AutocompleteBase
                  options={getLabelProps(dataBase, "drone")}
                  label="Drone"
                  value={form.drone}
                  onChange={(e) => {
                    setForm({
                      drone: e.target.value,
                    });
                  }}
                />
              </Stack>
            </>
          );
        }}
      />
    </>
  );
};

export default DeliveryModal;
