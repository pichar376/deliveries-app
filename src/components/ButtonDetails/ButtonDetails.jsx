import { Typography } from "@mui/material";
import { buttonDetailStyle } from "../../buttonDelivery.styles";
import { BsLayoutTextSidebar } from "react-icons/bs";
import Button from "../Button/Button";

const ButtonDetails = () => {
  return (
    <Button
      endIcon={
        <BsLayoutTextSidebar style={{ color: "#00000075", fontSize: "16px" }} />
      }
      sx={{
        color: "#000",
        fontWeight: "500",
        fontSize: 16,
      }}
    >
      Details
    </Button>
  );
};

export default ButtonDetails;
