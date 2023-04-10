

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
} from '@mui/material';

import { Link } from 'react-router-dom';
import React, {  useState } from 'react';




export const Patients = () => {
  const [patients, setPatients] = useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/patients");
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Failed to fetch patients: ", error);
      }
    };

    fetchData();
  }, []);

  
  return (
<div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant='h4'>Our Patients</Typography>
      <Link to="/patients/create">
        <Button variant='contained' color='primary'>Create Patient</Button>
      </Link>
    </div>
<TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Disease Name</TableCell>
              <TableCell>Date Time</TableCell>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.patient_name}</TableCell>
                <TableCell>{patient.disease_name}</TableCell>
                <TableCell>{patient.date_time}</TableCell>
                <TableCell>{patient.doctor_name}</TableCell>
                <TableCell>{patient.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
</div>
  )

  
   
    

  
};