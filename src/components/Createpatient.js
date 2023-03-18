import React, { useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Createpatient = () => {
  const [patientName, setPatientName] = useState("");
  const [diseaseName, setDiseaseName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ patientName, diseaseName, dateTime, doctorName, status });
    // TODO: Handle form submission, e.g. by sending data to server
  };

  return (
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
  );
};

export default Createpatient;
