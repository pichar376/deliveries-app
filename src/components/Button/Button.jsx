import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

const Button = styled(MuiButton)(() => ({
  textTransform: "none",
  fontSize: "16px",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.15);",
  whiteSpace: "nowrap",
  "&.MuiButton-sizeMedium": {
    padding: "7px 16px",
  },
}));

export default Button;
