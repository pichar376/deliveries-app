import { Button, Typography } from "@mui/material";
import { buttonDetailStyle } from "../../buttonDelivery.styles";
import { BsLayoutTextSidebar } from "react-icons/bs";

const ButtonDetails = () => {
  return (
    <Button
      sx={buttonDetailStyle}
      endIcon={<BsLayoutTextSidebar style={{ color: "#00000075" }} />}
    >
      <Typography
        sx={{
          color: "#000",
          fontWeight: "500",
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
        }}
      >
        Details
      </Typography>
    </Button>
  );
};

export default ButtonDetails;
