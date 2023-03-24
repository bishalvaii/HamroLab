import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from './severity-pill';
import { Link } from 'react-router-dom';


const orders = [
  {
    id: uuid(),
    ref: 'Krishna Thapa',
    
    customer: {
      name: 'Low BP'
    },
    createdAt: 1555016400000,
    status: 'pending',
    refer: 'Bishnu Timilsina',
  },
  {
    id: uuid(),
    ref: 'Ram Subedi',
    amount: 25.1,
    refer: 'Bishnu Timilsina',
    customer: {
      name: 'Migrane'
    },
    createdAt: 1555016400000,
    status: 'serviced'
  },
  {
    id: uuid(),
    ref: 'Bishal Basnet',
    refer: 'Bishnu Timilsina',
    amount: 10.99,
    customer: {
      name: 'Cancer'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'Parbati Sharma',
    refer: 'Bishnu Timilsina',
    amount: 96.43,
    customer: {
      name: 'Diabetes'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'Dermatology',
    refer: 'Bishnu Timilsina',
    amount: 32.54,
    refer: 'Bishnu Timilsina',
    customer: {
      name: 'Sore Throat'
    },
    createdAt: 1554670800000,
    status: 'Refunded'
  },
  {
    id: uuid(),
    ref: 'ENT',
    amount: 16.76,
    refer: 'Bishnu Timilsina',
    customer: {
      name: 'Kidney Diesease'
    },
    createdAt: 1554670800000,
    status: 'serviced'
  }
];

export const Patients = (props) => (
  <Card {...props}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
     <CardHeader title="Patients List" />
     <Link to="/patients/create"><Button sx={{marginRight: '4rem'}}variant='contained' color='primary'  >Create Patient</Button></Link>
    </div>
   
    <PerfectScrollbar>
      <Box sx={{ minWidth: 650 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
               Patient Name
              </TableCell>
              <TableCell>
               Name of Disease
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date and Time
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Referred Doctor
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {format(order.createdAt, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell>
                  {order.refer}
                </TableCell>
                
                <TableCell>
                  <SeverityPill
                    color={(order.status === 'serviced' && 'success')
                    || (order.status === 'refunded' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
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