import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";



function Createdoctor() {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="doctor-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="specialization">Specialization:</label>
        <input
          id="specialization"
          type="text"
          value={specialization}
          onChange={(event) => setSpecialization(event.target.value)}
        />
      </div>
     
      <button type="submit">Submit</button>
    </form>
  );
}

export default Createdoctor;
