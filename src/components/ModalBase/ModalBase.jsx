import { Box, IconButton, Modal, Typography } from "@mui/material";
import { modalStyle, titleStyles } from "./Modal.styles";
import ClearIcon from "@mui/icons-material/Clear";

const ModalBase = ({
  titleModal,
  descriptionModal,
  renderBody,
  renderFooter,
  openModal,
  handleClick,
}) => {
  return (
    <Box>
      <Modal
        sx={{}}
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box>
            <Typography sx={titleStyles}>{titleModal}</Typography>
            <IconButton
              onClick={handleClick}
              sx={{
                position: "absolute",
                right: "20px",
                top: "20px",
              }}
            >
              <ClearIcon />
            </IconButton>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {descriptionModal}
          </Typography>
          {renderBody && <Box>{renderBody()}</Box>}

          {renderFooter && <Box>{renderFooter()}</Box>}
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalBase;
