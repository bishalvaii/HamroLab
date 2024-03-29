import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  button: {
    marginRight: '1rem',
  },
  select: {
    minWidth: 120,
   

  },
  formControl: {
    
      width: '20%', // set the width to 100%
      marginBottom: theme.spacing(2), // add some margin to the bottom
    
  },
  label: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },
  value: {
    marginBottom: '1rem',
    marginTop:' 2rem'
  },
}));

function LabDetails({ formData}) {
  console.log(formData)
  const classes = useStyles();
  return (
    <div  >
      <div style={{ display: 'flex',  alignItems: 'center' }}>
      <Typography sx={{marginBottom: '30px', marginRight: '20px' }}variant="h3  " className={classes.heading} >
        Lab Details
      </Typography>
      <Box
  sx={{
    width: '200px',
    height: '50px',
    bgcolor: 'green',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
  }}
>
  Sample Taken
</Box>
        </div>
      
      <Button sx={{ mx: 2 }} variant="contained" className={classes.button}>
        Edit Tests
      </Button>
      <Link to="/lab/labRecords/entry"><Button sx={{ mx: 2 }} variant="contained" className={classes.button}>
        Enter Test Results
      </Button>
      </Link>
      <FormControl sx={{ mx: 2 }} className={classes.formControl}>
  <InputLabel id="select-label">Cancel test</InputLabel>
  <Select
    labelId="select-label"
    id="select"
    
    
    className={classes.select}
  >
    <MenuItem value="create-bill">Create Bill</MenuItem>
    <MenuItem value="cancel-test">Cancel Lab Test</MenuItem>
  </Select>
</FormControl >
      <div className={classes.value}>
        <Typography className={classes.label}>Client:</Typography>
        <Typography>{formData?.client}</Typography>
      </div>
      <div className={classes.value}>
        <Typography className={classes.label}>Ordered By:</Typography>
        <Typography>{formData?.orderedBy}</Typography>
      </div>
      <div className={classes.value}>
        <Typography className={classes.label}>Referrer:</Typography>
        <Typography>{formData?.referrer}</Typography>
      </div>
      <div className={classes.value}>
        <Typography className={classes.label}>Selected Test:</Typography>
        <Typography>{formData?.selectedTest}</Typography>
      </div>
      <div className={classes.value}>
        <Typography className={classes.label}>Sample Taken:</Typography>
        <Typography>{formData?.sampleTaken}</Typography>
      </div>
      <div className={classes.value}>
        <Typography className={classes.label}>Sample Time:</Typography>
        <Typography>{formData?.sampleTime}</Typography>
      </div>
      <div className={classes.value}>
        <Typography className={classes.label}>Remarks:</Typography>
        <Typography>{formData?.remarks}</Typography>
      </div>
    </div>
  );
  
      
  } 
  export default LabDetails