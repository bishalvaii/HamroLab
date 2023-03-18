import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  
} from "@mui/material";

const Createdoctor = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, title, department, gender, email, phone, qualification });
    // TODO: Handle form submission, e.g. by sending data to server
  };

  return (
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
  );
};

export default Createdoctor;
