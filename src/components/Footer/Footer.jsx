import { Box, Stack, Typography } from "@mui/material";
import { footerStyleStack, footerItemStyles } from "./Footer.styles";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", margin: "1rem auto" }}>
      <Stack direction="row" sx={{ ...footerStyleStack }}>
        <Typography sx={{ ...footerItemStyles }}>
          Powered by Nuvo Cargo
        </Typography>
        <Typography>Developed by PicharDev</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
