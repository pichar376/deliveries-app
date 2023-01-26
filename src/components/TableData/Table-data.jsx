import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuDelivery from "../MenuDelivery/MenuDelivery";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { dataStyle, labelStyle, tableCellStyles } from "./table.styles";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

const TableData = ({ deliveryHistory }) => {
  return (
    <TableContainer sx={{ mt: "50px" }}>
      <Table>
        <TableBody>
          {deliveryHistory.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                height: "104px",
                "&&.MuiTableRow-root": {
                  ...(row.status === "Pending" && {
                    borderBottom: "2px solid #307460",
                  }),
                },
              }}
            >
              <TableCell sx={{ ...tableCellStyles, width: "90px" }}>
                <Box>
                  <Typography sx={labelStyle}>Status</Typography>
                  <Typography sx={dataStyle}>{row.status}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: "99px" }}>
                <Box>
                  <Typography sx={labelStyle}>OrderId</Typography>
                  <Typography sx={dataStyle}>{row.orderId}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: "124px" }}>
                <Box>
                  <Typography sx={labelStyle}>Technician</Typography>
                  <Typography sx={dataStyle}>{row.technician}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: "58px" }}>
                <Box>
                  <Typography sx={labelStyle}>Platform</Typography>
                  <Typography sx={dataStyle}>{row.platform}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: "75px" }}>
                <Box>
                  <Typography sx={labelStyle}>Drone</Typography>
                  <Typography sx={dataStyle}>{row.drone}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: "107px" }}>
                <Box>
                  <Typography sx={labelStyle}>Technical check</Typography>
                  <Typography sx={dataStyle}>{row.technicalCheck}</Typography>
                </Box>
              </TableCell>

              <TableCell>
                <Stack direction="row" sx={{ gap: "16px" }}>
                  <Box mr="auto" />
                  <ButtonSecondary Icon={BsLayoutTextSidebar}>
                    Details
                  </ButtonSecondary>
                  <MenuDelivery />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
