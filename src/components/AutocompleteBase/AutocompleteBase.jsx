import { Autocomplete, Box, Typography } from "@mui/material";
import { buttonStyle, labelTextModals } from "../../global.styles";
import TextFieldBase from "../TextFieldBase/TextFeldBase";
const optionDefault = ["no options"];

const AutocompleteBase = ({ options, labelProp, startAdornment, ...rest }) => {
  return (
    <Box>
      <Typography sx={labelTextModals} htmlFor="autocomplete">
        {labelProp}
      </Typography>
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
        options={options ? options : optionDefault}
        id="autocomplete"
        renderInput={(params) => (
          <TextFieldBase {...params} startAdornment={startAdornment} />
        )}
      />
    </Box>
  );
};

export default AutocompleteBase;
