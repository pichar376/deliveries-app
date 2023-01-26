import { Stack } from "@mui/system";
import AutocompleteBase from "../../../AutocompleteBase/AutocompleteBase";
import ModalBase from "../../../ModalBase/ModalBase";
import TextFieldBase from "../../../TextFieldBase/TextFeldBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment } from "@mui/material";
import dataBase from "../../../../dataBase";
import Button from "../../../Button/Button";
import { useState } from "react";
import DeliveryStorageService from "../../../../services/DeliveryStorageService";
import { stackStyles } from "./DeliveryModal.styles";

const getLabelProps = (data, prop) => {
  const renderData = data.map((el) => el[prop]);

  const result = renderData.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return result;
};

export const isValid = (values) => {
  const isPropValid = (prop) => {
    return typeof values[prop] === "string" && values[prop].length > 0;
  };
  return Object.keys(values).every(isPropValid);
};

const DeliveryModal = ({ openModal, onClose, setDeliveryHistory }) => {
  const [form, setForm] = useState({
    orderId: "",
    technician: null,
    platform: null,
    drone: null,
  });
  const updateForm = (prop, value) => {
    setForm({
      ...form,
      [prop]: value,
    });
  };

  const creatDelivery = () => {
    if (isValid(form)) {
      setDeliveryHistory((prevState) => {
        const newValues = [
          { ...form, status: "Pending", technicalCheck: "Passed" },
          ...prevState,
        ];
        DeliveryStorageService.update(newValues);
        return newValues;
      });
      onClose();
    }
  };

  return (
    <>
      <ModalBase
        onClose={onClose}
        openModal={openModal}
        titleModal="New Delivery"
        descriptionModal="Please select the order ID and a technician to deploy the cargo. All
            elements are mandatory."
        renderBody={() => {
          return (
            <>
              <Stack sx={{ ...stackStyles, mt: "55px" }}>
                <TextFieldBase
                  label="Order ID"
                  onChange={(event) => {
                    updateForm("orderId", event.target.value);
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
                  getLabelOption={(option) => option.technician}
                  onChange={(event, value) => {
                    updateForm("technician", value);
                  }}
                />
              </Stack>
              <Stack sx={{ ...stackStyles, mt: "32px" }}>
                <AutocompleteBase
                  options={getLabelProps(dataBase, "platform")}
                  getLabelOption={(option) => option.platform}
                  label="Platform"
                  value={form.platform}
                  onChange={(event, value) => {
                    updateForm("platform", value);
                  }}
                />
                <AutocompleteBase
                  options={getLabelProps(dataBase, "drone")}
                  getLabelOption={(option) => option.drone}
                  label="Drone"
                  value={form.drone}
                  onChange={(event, value) => {
                    updateForm("drone", value);
                  }}
                />
              </Stack>
            </>
          );
        }}
        renderFooter={() => (
          <Stack direction="row" spacing={2}>
            <Box mr="auto" />
            <Button
              variant="contained"
              color="text"
              sx={{ fontWeight: "500" }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ fontWeight: "500" }}
              onClick={creatDelivery}
            >
              Create new delivery
            </Button>
          </Stack>
        )}
      />
    </>
  );
};

export default DeliveryModal;
