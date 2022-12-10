import { Stack, Typography } from "@mui/material";
import { footerStyleStack, footerItemStyles } from "./Footer.styles";

const Footer = () => {
  return (
    <Stack direction="row" sx={footerStyleStack}>
      <Typography sx={{ ...footerItemStyles, flexGrow: 1 }}>
        Powered by Nuvo Cargo
      </Typography>
      <Typography>Help</Typography>
    </Stack>
  );
};

export default Footer;
