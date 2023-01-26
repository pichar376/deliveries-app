import { Box, IconButton, Modal, Typography } from "@mui/material";
import {
  containerStyles,
  footerStyles,
  modalStyle,
  titleStyles,
} from "./Modal.styles";
import ClearIcon from "@mui/icons-material/Clear";
import { Stack } from "@mui/system";

const ModalBase = ({
  titleModal,
  descriptionModal,
  renderBody,
  renderFooter,
  iconButton,
  openModal,
  onClose,
}) => {
  return (
    <Modal
      sx={{}}
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box sx={containerStyles}>
          <Stack
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography sx={{ ...titleStyles, flexGrow: "1" }}>
              {titleModal}
            </Typography>
            {iconButton && (
              <IconButton
                onClick={onClose}
                sx={{
                  position: "absolute",
                  right: "29px",
                  top: "29px",
                }}
              >
                <ClearIcon />
              </IconButton>
            )}
          </Stack>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {descriptionModal}
          </Typography>
          {renderBody && <Box>{renderBody()}</Box>}
        </Box>
        {renderFooter && <Box sx={footerStyles}>{renderFooter()}</Box>}
      </Box>
    </Modal>
  );
};

export default ModalBase;
