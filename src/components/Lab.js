import { Button, FormControl, Grid, InputAdornment, MenuItem, Select, TextField,Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
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
  const [labs, setLabs] = useState([])


  const [searchTerm, setSearchTerm] = useState('');
  const [createLabTest, setCreateLabTest] = useState(false);
  const [labTests, setLabTests] = useState([]);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/labtests");
        const data = await response.json();
        setLabs(data);
      } catch (error) {
        console.error("Failed to fetch labs: ", error);
      }
    };

    fetchData();
  }, []);
 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell>Ordered By</TableCell>
            <TableCell>Referrer</TableCell>
            <TableCell>Sample Taken</TableCell>
            <TableCell>Sample Time</TableCell>
            <TableCell>Selected Test</TableCell>
            <TableCell>Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(labs) && labs.map((lab) => (
            <TableRow key={lab.id}>
              <TableCell>{lab.client_name}</TableCell>
              <TableCell>{lab.ordered_by}</TableCell>
              <TableCell>{lab.referrer}</TableCell>
              <TableCell>{lab.sample_taken ? "Yes" : "No"}</TableCell>
              <TableCell>{new Date(lab.sample_time).toLocaleString()}</TableCell>
              <TableCell>{lab.test_name}</TableCell>
              <TableCell>{lab.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>  
    
  )
}
export default Lab