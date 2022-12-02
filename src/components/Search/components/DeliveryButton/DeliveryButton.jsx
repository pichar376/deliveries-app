import * as React from "react";
import Button from "../../../Button/Button";

export default function DeliveryButton() {
  return (
    <Button
      variant="contained"
      sx={{
        ml: "1rem",
        textTransform: "none",
        width: 132,
        backgroundColor: "#307460",
        padding: "8px 16px",
      }}
    >
      New Delivery
    </Button>
  );
}
