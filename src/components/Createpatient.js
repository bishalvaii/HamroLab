import React, { useState } from "react";
import { TextField, Button, Grid,MenuItem } from "@mui/material";


function Createpatient() {
  const [patientName, setPatientName] = useState('');
  const [diseaseName, setDiseaseName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="patient-form">
      <div>
        <label htmlFor="patientName">Patient Name:</label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(event) => setPatientName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="diseaseName">Name of Disease:</label>
        <input
          id="diseaseName"
          type="text"
          value={diseaseName}
          onChange={(event) => setDiseaseName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateTime">Date and Time:</label>
        <input
          id="dateTime"
          type="datetime-local"
          value={dateTime}
          onChange={(event) => setDateTime(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="doctorName">Referred Doctor:</label>
        <input
          id="doctorName"
          type="text"
          value={doctorName}
          onChange={(event) => setDoctorName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <input
          id="status"
          type="text"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Createpatient;
