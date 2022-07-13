import { format } from "date-fns";
import { v4 as uuid } from "uuid";

import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "./severity-pill";
import PerfectScrollbar from 'react-perfect-scrollbar'
const orders = [
  {
    id: uuid(),
    ref: "Krishna Thapa",

    customer: {
      name: "Pathology",
    },
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "Ram Subedi",
    amount: 25.1,
    customer: {
      name: "Neurology",
    },
    createdAt: 1555016400000,
    status: "serviced",
  },
  {
    id: uuid(),
    ref: "Bishal Basnet",
    amount: 10.99,
    customer: {
      name: "Radiology",
    },
    createdAt: 1554930000000,
    status: "refunded",
  },
  {
    id: uuid(),
    ref: "Parbati Sharma",
    amount: 96.43,
    customer: {
      name: "Cardiology",
    },
    createdAt: 1554757200000,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "Dermatology",
    amount: 32.54,
    customer: {
      name: "Suman Shrestha",
    },
    createdAt: 1554670800000,
    status: "Refunded",
  },
  {
    id: uuid(),
    ref: "ENT",
    amount: 16.76,
    customer: {
      name: "Subash Gurung",
    },
    createdAt: 1554670800000,
    status: "serviced",
  },
];

export const Appointments = (props) => (
  <Card {...props}>
    <CardHeader title="Upcoming Appointments" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 650 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Specialisation</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Date and Time
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{format(order.createdAt, "dd/MM/yyyy")}</TableCell>
                <TableCell>
                  <SeverityPill
                    color={
                      (order.status === "serviced" && "success") ||
                      (order.status === "refunded" && "error") ||
                      "warning"
                    }
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar >
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);