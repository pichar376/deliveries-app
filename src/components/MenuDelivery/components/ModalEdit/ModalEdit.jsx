import { InputAdornment, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import DeliveryStorageService from "../../../../services/DeliveryStorageService";
import SearchIcon from "@mui/icons-material/Search";
import AutocompleteBase from "../../../AutocompleteBase/AutocompleteBase";
import ModalBase from "../../../ModalBase/ModalBase";
import { stackStyles } from "../../../Search/components/DeliveryModal/DeliveryModal.styles";
import TextFieldBase from "../../../TextFieldBase/TextFeldBase";
import dataBase from "../../../../dataBase";
import Button from "../../../Button/Button";

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

const ModalEdit = ({
  deliveryHistory,
  setDeliveryHistory,
  openModal,
  closeModal,
  handleClose,
  id,
}) => {
  const currentDelivery = deliveryHistory.filter((el) => el.orderId === id);

  const [{ orderId, technician, platform, drone, status }] = currentDelivery;

  const dataToEdit = {
    orderId,
    technician,
    platform,
    drone,
    status,
  };
  const [deliveryEdit, setDeliveryEdit] = useState(dataToEdit);

  const updateForm = (prop, value) => {
    setDeliveryEdit({
      ...deliveryEdit,
      [prop]: value,
    });
  };

  const editDelivery = () => {
    if (isValid(deliveryEdit)) {
      setDeliveryHistory((prevState) => {
        const newValues = [
          { ...deliveryEdit, status: "Pending", technicalCheck: "Passed" },
          ...prevState.filter((el) => el.orderId !== orderId),
        ];
        DeliveryStorageService.update(newValues);
        return newValues;
      });

      closeModal();
      handleClose();
    }
  };

  return (
    <>
      <ModalBase
        iconButton
        onClose={closeModal}
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
                  value={deliveryEdit.orderId}
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
                  value={deliveryEdit.technician}
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
                  value={deliveryEdit.platform}
                  onChange={(event, value) => {
                    updateForm("platform", value);
                  }}
                />
                <AutocompleteBase
                  options={getLabelProps(dataBase, "drone")}
                  getLabelOption={(option) => option.drone}
                  label="Drone"
                  value={deliveryEdit.drone}
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
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ fontWeight: "500" }}
              onClick={editDelivery}
            >
              Edit Delivery
            </Button>
          </Stack>
        )}
      />
    </>
  );
};

export default ModalEdit;
