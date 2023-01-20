import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";

const Shipment = () => {
  let { id } = useParams();

  console.log(id);
  return (
    <Box>
      <Typography sx={{ fontSize: "24px", margin: "3rem 0 .5rem 0" }}>
        {id}
      </Typography>
    </Box>
  );
};

export default Shipment;
