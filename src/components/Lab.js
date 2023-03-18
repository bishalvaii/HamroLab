import { Button, FormControl, Grid, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  labStatus: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  labStatusButton: {
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
    textTransform: 'none',
  },
  activeLabStatusButton: {
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: '50%',
  },
  searchIcon: {
    paddingLeft: theme.spacing(2),
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
    fontSize: '1rem',
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  },
  createLabButton: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

function Lab() {
  const classes = useStyles();
  const [labStatus, setLabStatus] = useState('all');
  const [client, setClient] = useState('');
  const [orderedBy, setOrderedBy] = useState('');
  const [referrer, setReferrer] = useState('');
  const [test, setTest] = useState('');
  const [sampleTaken, setSampleTaken] = useState(false);
  const [sampleTime, setSampleTime] = useState('');
  const [remarks, setRemarks] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [createLabTest, setCreateLabTest] = useState(false);
  const [labTests, setLabTests] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClientChange = (event) => {
    setClient(event.target.value);
  };

  const handleOrderedByChange = (event) => {
    setOrderedBy(event.target.value);
  };

  const handleReferrerChange = (event) => {
    setReferrer(event.target.value);
  };

  const handleTestChange = (event) => {
    setTest(event.target.value);
  };

  const handleSampleTakenChange = (event) => {
    setSampleTaken(event.target.checked);
  };

  const handleSampleTimeChange = (event) => {
    setSampleTime(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handleCreateLabTest = () => {

  };
  const handleLabStatusChange = () => {
    
  }

  const handleCancel = () => {
    setCreateLabTest(false);
  };

  const handleSave = () => {
    // Logic to save the new lab test
    setCreateLabTest(false);
  };
  const handleSaveLabTest = (newLabTest) => {
    setLabTests([...labTests, newLabTest]);
  };


  
  if (labStatus !== 'all') {
    labTests = labTests.filter((test) => test.status.toLowerCase().includes(labStatus.toLowerCase()));
  }

  return (
    <div className={classes.root}>
      <h1>Lab Information Management System</h1>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select value={labStatus} onChange={handleLabStatusChange}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="ordered">Ordered</MenuItem>
              <MenuItem value="sample-taken">Sample Taken</MenuItem>
              <MenuItem value="incomplete-result">Incomplete Result</MenuItem>
              <MenuItem value="result-ready">Result Ready</MenuItem>
              <MenuItem value="canceled">Canceled</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item className={classes.searchBox}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by test ID, customer name, lab test name, ordered on, collected on, status, turn around time"
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <i className="fa fa-search"></i>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Link to="/lab/create">
            <Button variant="contained" color="primary" className={classes.createButton}>
              Create New Lab
            </Button>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.labForm}>
        {/* Lab Form component goes here */}
      </div>
    </div>
    );
    }
    export default Lab
         
