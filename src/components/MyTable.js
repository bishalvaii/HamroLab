import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.green,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name,calories, fat, carbs, protein,rice,dal) {
  return { name, calories, fat, carbs, protein,rice,dal };
}

const rows = [
  createData(123, 'user1', 'Blood', 'Chaitra 29','Taken'),
  createData(222, 'user2','Glucose', 'Falgun 7', 'Ready'),
  createData(333, 'user3', 'Urine', 'Magh 19', 'Taken'),
  createData(444, 'user3', 'liver', 'Baishak 20', 'Ordered'),
  createData(555, 'user4', 'Renal', 'Chaitra 1', 'Incomplete'),
];

export default function CustomizedTables() {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TEST ID</StyledTableCell>
            <StyledTableCell align="right">CLIENT</StyledTableCell>
            <StyledTableCell align="right">LAB TEST</StyledTableCell>
            <StyledTableCell align="right">ORDERED ON</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}