import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import DeliveryStorageService from "../../services/DeliveryStorageService";
import { useState } from "react";
import ModalDelete from "./components/ModalDelete/ModalDelete";
import { Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import ModalEdit from "./components/ModalEdit/ModalEdit";
import { useModal } from "./hooks/useModal";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 120,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MenuDelivery = ({ orderId, deliveryHistory, setDeliveryHistory }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [isOpenEdit, openModalEdit, closeModalEdit] = useModal();
  const [isOpenDelete, openModalDelete, closeModalDelete] = useModal();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { update } = DeliveryStorageService;

  const deleteRow = (id) => {
    const rowToDelete = deliveryHistory.filter((el) => el.orderId === id);
    const filterRows = deliveryHistory.filter(
      (el) => el.orderId !== rowToDelete[0].orderId
    );

    setDeliveryHistory(filterRows);

    update(filterRows);

    closeModalDelete();
    handleClose();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <ButtonSecondary
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        Icon={KeyboardArrowDownIcon}
      >
        Actions
      </ButtonSecondary>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={openModalEdit} disableRipple>
          Edit
        </MenuItem>
        {isOpenEdit && (
          <ModalEdit
            openModal={isOpenEdit}
            closeModal={closeModalEdit}
            handleClose={handleClose}
            setDeliveryHistory={setDeliveryHistory}
            deliveryHistory={deliveryHistory}
            id={orderId}
          />
        )}
        <MenuItem onClick={openModalDelete} disableRipple>
          Delete
        </MenuItem>
      </StyledMenu>
      {isOpenDelete && (
        <ModalDelete
          openModal={isOpenDelete}
          onClose={closeModalDelete}
          renderBody={() => {
            return (
              <Box>
                <Typography variant="h6" align="center">
                  Are you sure to delete {orderId} delivery
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "2rem",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => {
                      deleteRow(orderId);
                    }}
                  >
                    delete
                  </Button>
                  <Button variant="outlined" onClick={closeModalDelete}>
                    cancel
                  </Button>
                </Stack>
              </Box>
            );
          }}
        />
      )}
    </div>
  );
};

export default MenuDelivery;
