import * as React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DoctorList() {
  const [doctors,setDoctors] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/doctors");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors: ", error);
      }
    };

    fetchData();
  }, []);

  
  return (
   <div>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant='h4'>Our Doctors</Typography>
      <Link to="/doctors/create">
        <Button variant='contained' color='primary'>Create Doctor</Button>
      </Link>
    </div>
    <TableContainer component={Paper}>
        <Table aria-label="Doctors table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Qualification</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.doctor_name}</TableCell>
                <TableCell>{doctor.title}</TableCell>
                <TableCell>{doctor.department}</TableCell>
                <TableCell>{doctor.gender}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.phone}</TableCell>
                <TableCell>{doctor.qualification}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}
