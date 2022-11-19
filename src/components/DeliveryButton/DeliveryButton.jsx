import * as React from "react";
import Button from "@mui/material/Button";

export default function DeliveryButton() {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{ ml: "1rem", textTransform: "none", width: 132, height: 40 }}
    >
      New Delivery
    </Button>
  );
}
