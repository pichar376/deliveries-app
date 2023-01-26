import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function Input({ ...rest }) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        height: 34,
        alignItems: "center",
        width: 240,
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.15);",
      }}
    >
      <SearchIcon sx={{ color: "#00000055", ml: "10px" }} />
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: "0.875rem",
          padding: "8px 16px",
        }}
        placeholder="Search"
      />
    </Paper>
  );
}
