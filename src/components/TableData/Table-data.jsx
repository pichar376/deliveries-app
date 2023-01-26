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
import { useNavigate } from "react-router-dom";

const TableData = ({ deliveryHistory, setDeliveryHistory }) => {
  const navigate = useNavigate();

  const findRow = (id) => {
    navigate(`/shipment/${id}`);
  };

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
              <TableCell sx={{ ...tableCellStyles, width: 90 }}>
                <Box>
                  <Typography sx={labelStyle}>Status</Typography>
                  <Typography sx={dataStyle}>{row.status}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: 105 }}>
                <Box>
                  <Typography sx={labelStyle}>OrderId</Typography>
                  <Typography sx={{ ...dataStyle, width: "7rem" }}>
                    {row.orderId}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: 124 }}>
                <Box>
                  <Typography sx={labelStyle}>Technician</Typography>
                  <Typography sx={{ ...dataStyle, width: "8rem" }}>
                    {row.technician}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: 70 }}>
                <Box>
                  <Typography sx={labelStyle}>Platform</Typography>
                  <Typography sx={dataStyle}>{row.platform}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: 105 }}>
                <Box>
                  <Typography sx={labelStyle}>Drone</Typography>
                  <Typography sx={dataStyle}>{row.drone}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, width: 124 }}>
                <Box>
                  <Typography sx={{ ...labelStyle, width: "7rem" }}>
                    Technical check
                  </Typography>
                  <Typography sx={dataStyle}>{row.technicalCheck}</Typography>
                </Box>
              </TableCell>

              <TableCell sx={{ padding: "16px 0px 16px 16px" }}>
                <Stack direction="row" sx={{ gap: "16px" }}>
                  <Box mr="auto" />
                  <ButtonSecondary
                    Icon={BsLayoutTextSidebar}
                    onClick={() => {
                      findRow(row.orderId);
                    }}
                  >
                    Details
                  </ButtonSecondary>
                  <MenuDelivery
                    orderId={row.orderId}
                    deliveryHistory={deliveryHistory}
                    setDeliveryHistory={setDeliveryHistory}
                  />
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
