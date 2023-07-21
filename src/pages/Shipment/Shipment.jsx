import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";

const Shipment = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <Box>
      <Button sx={{ marginTop: "30px", color: "#307460" }} onClick={goToHome}>
        {"<<"}Go Back
      </Button>
      <Typography sx={{ fontSize: "24px", margin: "3rem 0 .5rem 0" }}>
        {id}
      </Typography>
    </Box>
  );
};

export default Shipment;
