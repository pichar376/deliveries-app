import { FormControl, InputLabel } from "@mui/material";
import { buttonStyle, labelTextModals } from "../../global.styles";
import { OutlinedInput } from "@mui/material";

const TextFieldBase = ({
  label,
  onChange,
  value,
  InputProps,
  inputProps,
  id,
  InputLabelProps,
  ...rest
}) => {
  return (
    <FormControl sx={{}}>
      {label && (
        <InputLabel
          shrink
          htmlFor={id}
          {...InputLabelProps}
          sx={{ ...labelTextModals, top: "-.4rem", left: "-.8rem" }}
        >
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        inputProps={inputProps}
        {...InputProps}
        {...rest}
        value={value}
        onChange={onChange}
        sx={{ ...buttonStyle, width: "240px", height: "40px" }}
      />
    </FormControl>
  );
};

export default TextFieldBase;
