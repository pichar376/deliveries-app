import { Typography } from "@mui/material";
import { buttonDetailStyle } from "../../buttonDelivery.styles";
import Button from "../Button/Button";

const ButtonTable = ({ Icon, children }) => {
  return (
    <Button
      endIcon={<Icon style={{ color: "#00000075", fontSize: "16px" }} />}
      sx={{
        color: "#000",
        fontWeight: "500",
        fontSize: 16,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonTable;
