import React, { useEffect, useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Createpatient = () => {
  const [patientName, setPatientName] = useState("");
  const [diseaseName, setDiseaseName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [status, setStatus] = useState("");
  const [patients, setPatients] = useState([]);

 const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = {
    patient_name: patientName,
    disease_name: diseaseName,
    date_time: dateTime,
    doctor_name: doctorName,
    status: status,
  };

  try {
    const response = await fetch("http://localhost:4000/api/create/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },                                   
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Patient created successfully");
      const patientsResponse = await fetch("http://localhost:4000/api/patients");
      const patientsData = await patientsResponse.json();
      setPatients(patientsData);
    } else {
      console.error("Failed to create patient");
    }
  } catch (error) {
    console.log("this happended");
  }
}
  



  return (
    <>
    
    <h1>Patients</h1>
    <ul>
      {patients.map((patient) => (
        <li key={patient.id}>
          <p>Patient Name: {patient.patient_name}</p>
          <p>Disease Name: {patient.disease_name}</p>
          <p>Date Time: {patient.date_time}</p>
          <p>Doctor Name: {patient.doctor_name}</p>
          <p>Status: {patient.status}</p>
        </li>
      ))}
    </ul>
    
    <form onSubmit={handleSubmit}>
      <TextField
        label="Patient Name"
        variant="outlined"
        value={patientName}
        onChange={(event) => setPatientName(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Name of Disease"
        variant="outlined"
        value={diseaseName}
        onChange={(event) => setDiseaseName(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date and Time"
        variant="outlined"
        type="datetime-local"
        value={dateTime}
        onChange={(event) => setDateTime(event.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Referred Doctor"
        variant="outlined"
        value={doctorName}
        onChange={(event) => setDoctorName(event.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          variant="outlined"
        >
          <MenuItem value="">Select Status</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
    </>
  );
};

export default Createpatient;
