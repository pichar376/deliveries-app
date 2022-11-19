import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Input() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 240,
        height: 40,
        boxShadow: `0px 1px 4px  rgba(0, 0, 0, 0.15)`,
      }}
    >
      <SearchIcon sx={{ color: "#00000055" }} />
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      ></IconButton>
    </Paper>
  );
}
