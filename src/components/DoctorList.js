import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DoctorList() {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant='h4'>Our Doctors</Typography>
      <Link to="/doctors/create">
        <Button variant='contained' color='primary'>Create Doctor</Button>
      </Link>
    </div>
  );
}
