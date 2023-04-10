import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
  Table,
  TableHead,
  
} from "@mui/material";

const Createdoctor = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");
  const [doctors,setDoctors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
     doctor_name: name,
     title: title,
     qualification: qualification,
     gender: gender,
     phone: phone,
     email: email,
     department: department
    };
  
    try {
      const response = await fetch("http://localhost:4000/api/create/doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },                                   
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Doctor created successfully");
        const doctorsResponse = await fetch("http://localhost:4000/api/doctors");
        const doctorsData = await doctorsResponse.json();
        setDoctors(doctorsData);
      } else {
        console.error("Failed to create doctor");
      }
    } catch (error) {
      console.log("this happended");
    }
  }   

  return (
    <>
    <h1>Doctors</h1>
   
    {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="doctors table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Qualification</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell component="th" scope="row">
                {doctor.id}
              </TableCell>
              <TableCell align="right">{doctor.doctor_name}</TableCell>
              <TableCell align="right">{doctor.title}</TableCell>
              <TableCell align="right">{doctor.department}</TableCell>
              <TableCell align="right">{doctor.gender}</TableCell>
              <TableCell align="right">{doctor.email}</TableCell>
              <TableCell align="right">{doctor.phone}</TableCell>
              <TableCell align="right">{doctor.qualification}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Department"
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset" margin="normal" required>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Qualification"
        value={qualification}
        onChange={(event) => setQualification(event.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </>
  );
};

export default Createdoctor;
