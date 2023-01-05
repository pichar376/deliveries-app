import { Autocomplete, Box, Typography } from "@mui/material";
import { useState } from "react";
import { buttonStyle, labelTextModals } from "../../global.styles";
import TextFieldBase from "../TextFieldBase/TextFeldBase";
const optionDefault = ["no options"];

const AutocompleteBase = ({
  options,
  labelProp,
  startAdornment,
  label,
  onChange,
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
        options={options ? options : optionDefault}
        id="autocomplete"
        renderInput={(params) => (
          <TextFieldBase
            {...params}
            startAdornment={startAdornment}
            onChange={onChange}
            label={label}
          />
        )}
      />
    </Box>
  );
};

export default AutocompleteBase;
