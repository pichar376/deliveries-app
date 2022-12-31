import { FormControl, Typography } from "@mui/material";
import { buttonStyle, labelTextModals } from "../../global.styles";
import { OutlinedInput } from "@mui/material";

const TextFieldBase = ({ labelProp, InputProps, inputProps, ...rest }) => {
  return (
    <FormControl>
      <Typography sx={labelTextModals}>{labelProp}</Typography>
      <OutlinedInput
        inputProps={inputProps}
        {...InputProps}
        {...rest}
        sx={{ ...buttonStyle, width: "240px", height: "40px" }}
      />
    </FormControl>
  );
};

export default TextFieldBase;
