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


export default function LabForm(props) {
  const [selectedTest, setSelectedTest] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const classes = useStyles();

  
  const handleTestSelection = (test) => {
    setSelectedTest(test.name);
    setShowDropdown(false);
  };
  const {
    handleCancel,
    
    onDataSave // callback function passed from parent component
  } = props;
const navigate = useNavigate();
 
  const [isSaved, setIsSaved] = useState(false)
  const [formData, setFormData] = useState({
    client: '',
    orderedBy: '',
    referrer: '',
    selectedTest: '',
    sampleTaken: false,
    sampleTime: '',
    remarks: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
    ReactDOM.render(<Lab formData={formData} />, document.getElementById('root'));
  }
  //   const formData = { client, orderedBy, referrer, selectedTest, sampleTaken, sampleTime, remarks };
  
  //   try {
  //     const response = await fetch('/api/labtests', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //       },  
  //       body: JSON.stringify(formData),
  //     });
  
  //     const data = await response.json();
  //     console.log('Saved lab test:', data);
    
  //     // Here, you can update your UI with the saved data
  //   } catch (error) {
  //     console.error('Failed to save lab test:', error);
  //     // Here, you can show an error message to the user
  //   }
  
  //   setClient("");
  //   setOrderedBy("");
  //   setReferrer("");
  //   setTest("");
  //   setSampleTaken(false);
  //   setSampleTime("");
  //   setRemarks("");
  // };
  

  return (
  
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
            value={formData.client}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ordered-by"
            name="ordered-by"
            label="Ordered By"
            value={formData.orderedBy}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="referrer"
            name="referrer"
            label="Referrer"
            value={formData.referrer}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="test-search"
            name="test-search"
            label="Search for test"
            placeholder="Type to search tests"
            value={formData.selectedTest}
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
                checked={formData.sampleTaken}
                onChange={handleChange}
              />
            }
            label="Sample Taken"
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        {formData.sampleTaken && (
            <Grid item xs={12}>
              <DateTimePicker label="Sample Time" inputVariant="outlined" value={formData.sampleTime} onChange={handleChange} />

                         </Grid>
          )}
      </LocalizationProvider>

          <Grid item xs={12}>
            <TextField label="Remarks" variant="outlined" fullWidth multiline rows={4} value={formData.remarks} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} spacing={3}>
            <Link to="/lab"><Button variant="outlined" className={classes.button} onClick={handleCancelLab}>Cancel</Button></Link>
            <Link to="/lab/labRecords/status=sampleTaken"><Button variant="contained" color="primary" type="submit" onClick={handleSave }>Save</Button></Link>
          </Grid>
         
        
        </Grid>
        </form>
        </Paper>
  )
    
  }


       
