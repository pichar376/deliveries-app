import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { modalStyle, titleStyles } from "./Modal.styles";
import ClearIcon from "@mui/icons-material/Clear";

const ModalBase = ({
  titleModal,
  descriptionModal,
  renderBody,
  renderFooter,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>

      <Modal
        sx={{}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box>
            <Typography sx={titleStyles}>{titleModal}</Typography>
            <IconButton
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
    </div>
  );
};

export default ModalBase;
