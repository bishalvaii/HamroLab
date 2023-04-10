import { Button, Checkbox, FormControlLabel, Grid, MenuItem, MenuList, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Lab from "./Lab"
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));


export default function LabForm() {
  const [selectedTest, setSelectedTest] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [labs, setLabs] = useState([])
  const [clientname, setClientName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [sampleTime, setSampleTime] = useState(new Date());
  const [orderedBy, setOrderedBy] = useState("")
  const [referrer, setReferrer] = useState("");
  const [sampleTaken, setSampleTaken] = useState(false);
  const classes = useStyles();

  
  const handleTestSelection = (test) => {
    setSelectedTest(test.name);
    setShowDropdown(false);
  };
  
const navigate = useNavigate();
 
  const [isSaved, setIsSaved] = useState(false)
 
  const handleSampleTimeChange = (dateTime) => {
    setSampleTime(dateTime);
  };

  

  const labTests = [
    { id: 1, name: "SARS-CoV-2 PCR Test" },
    { id: 2, name: "Complete Blood Count (CBC)" },
    { id: 3, name: "Liver Function Test (LFT)" },
    { id: 4, name: "Blood Glucose Test" },
    // Add more tests here
  ];
  const handleSearch = () => {
    
  }

  const handleCancelLab = () => {
   navigate.push("/lab")
  }


  const handleSave = () => {
    // save lab details
    setIsSaved(true);
    navigate.push("/lab/labRecords/status=sampleTaken")
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      client_name: clientname,
      referrer: referrer,
      test_name: selectedTest,

      ordered_by: orderedBy,
      sample_taken: sampleTaken,
      sample_time: sampleTime,
      remarks: remarks

    }
   
   try {
     const response = await fetch('http://localhost:4000/api/create/labtests', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },  
       body: JSON.stringify(formData),
     });
     if (response.ok) {
       const labResponse = await fetch("http://localhost:4000/api/labtests");
       const labData = await labResponse.json();
       setLabs(labData)
     } else {
       console.error("Failed to create lab")
     }
   } catch(error) {
     console.log("Shit happens")
   }
 
  }
    

  
  
  

  return (
    <>
    
   
    
    <Paper className={classes.paper}>
    <Typography variant="h4">Create Lab Test</Typography>
    <form onSubmit={handleSubmit} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="client"
            name="client"
            label="Client Name"
            value={clientname}
            onChange={(event) => setClientName(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ordered-by"
            name="ordered-by"
            label="Ordered By"
            value={orderedBy}
            onChange={(event) => setOrderedBy(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="referrer"
            name="referrer"
            label="Referrer"
            value={referrer}
            onChange={(event) => setReferrer(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="test-search"
            name="test-search"
            label="Search for test"
            placeholder="Type to search tests"
            value={selectedTest}
            onClick={() => setShowDropdown(true)}
            onChange={(e) => setSelectedTest(e.target.value)}
            fullWidth
          />
          {showDropdown && (
            <MenuList>
              {labTests.map((test) => (
                <MenuItem key={test.id} onClick={() => handleTestSelection(test)}>
                  {test.name}
                </MenuItem>
              ))}
            </MenuList>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                id="sample-taken"
                name="sample-taken"
                color="primary"
                checked={sampleTaken}
                onChange={(event) => setSampleTaken(true)}
              />
            }
            label="Sample Taken"
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        {sampleTaken && (
            <Grid item xs={12}>
              <DateTimePicker label="Sample Time" inputVariant="outlined" value={sampleTime} onChange={handleSampleTimeChange} />

                         </Grid>
          )}
      </LocalizationProvider>

          <Grid item xs={12}>
            <TextField label="Remarks" variant="outlined" fullWidth multiline rows={4} value={remarks} onChange={(event) => setRemarks(event.target.value)} />
          </Grid>
          <Grid item xs={12} spacing={3}>
            <Link to="/lab"><Button variant="outlined" className={classes.button} onClick={handleCancelLab}>Cancel</Button></Link>
          
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Save</Button>
          </Grid>
         
        
        </Grid>
        </form>
        


        </Paper>
        
        </>
  )
    
  }


       
