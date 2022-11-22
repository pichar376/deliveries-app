import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import dataBase from "../../dataBase";
import ButtonDetails from "../ButtonDetails/ButtonDetails";
import MenuDelivery from "../Menu/Menu";
import { dataStyle, labelStyle } from "./labelStyle.style";

const TableData = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {dataBase.map((row) => (
            <TableRow key={row.orderId} sx={{ height: 104 }}>
              <TableCell>
                <Box sx={{ display: "flex", flexFlow: "column" }}>
                  <Typography sx={labelStyle}>Status</Typography>
                  <Typography sx={dataStyle}>{row.status}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexFlow: "column" }}>
                  <Typography sx={labelStyle}>OrderId</Typography>
                  <Typography sx={dataStyle}>{row.orderId}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexFlow: "column" }}>
                  <Typography sx={labelStyle}>Technician</Typography>
                  <Typography sx={dataStyle}>{row.technician}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexFlow: "column" }}>
                  <Typography sx={labelStyle}>Platform</Typography>
                  <Typography sx={dataStyle}>{row.platform}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexFlow: "column" }}>
                  <Typography sx={labelStyle}>Drone</Typography>
                  <Typography sx={dataStyle}>{row.drone}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexFlow: "column" }}>
                  <Typography sx={labelStyle}>Technical check</Typography>
                  <Typography sx={dataStyle}>{row.technicalCheck}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <ButtonDetails />
              </TableCell>
              <TableCell>
                <MenuDelivery />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
