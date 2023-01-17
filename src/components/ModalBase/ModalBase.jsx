import { Box, IconButton, Modal, Typography } from "@mui/material";
import {
  containerStyles,
  footerStyles,
  modalStyle,
  titleStyles,
} from "./Modal.styles";
import ClearIcon from "@mui/icons-material/Clear";

const ModalBase = ({
  titleModal,
  descriptionModal,
  renderBody,
  renderFooter,
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
          <Typography sx={titleStyles}>{titleModal}</Typography>
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
