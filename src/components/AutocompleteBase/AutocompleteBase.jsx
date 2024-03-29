import { Autocomplete, Box } from "@mui/material";
import { buttonStyle } from "../../global.styles";
import TextFieldBase from "../TextFieldBase/TextFeldBase";

const AutocompleteBase = ({
  options,
  startAdornment,
  label,
  onChange,
  value,
}) => {
  return (
    <Box>
      <Autocomplete
        sx={{
          ...buttonStyle,
          "&.MuiAutocomplete-root": {
            width: "240px",
          },
          "& .MuiInputBase-root": {
            padding: "0 39px 0 0",
            height: "40px",
          },
          "& .MuiFormControl-root": {
            height: "40px",
          },
          "& .MuiAutocomplete-popupIndicator": {
            color: "rgba(0, 0, 0, 0.25)",
          },
        }}
        disablePortal
        value={value}
        onChange={onChange}
        options={options}
        id="autocomplete"
        renderInput={(params) => (
          <TextFieldBase
            {...params}
            startAdornment={startAdornment}
            label={label}
          />
        )}
      />
    </Box>
  );
};

export default AutocompleteBase;
