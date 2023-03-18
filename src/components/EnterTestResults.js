import { AttachFile } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    
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
    marginBottom: '0.5rem',
    width: '40%',
    
  },
}));

function EnterTestResults({ formData}) {
  console.log(formData)
  const classes = useStyles();
  return (
    <div  >


<div style={{ display: 'flex',  alignItems: 'center' }}>
      <Typography sx={{marginBottom: '30px', marginRight: '20px' }}variant="h3  " className={classes.heading} >
        Lab Test Results
      </Typography>
      </div>
      
   
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
      <div className={classes.value}>
  <Typography className={classes.label}>Test Name:</Typography>
  <Typography>{formData?.testName}</Typography>
</div>
<div className={classes.value}>
  <Typography className={classes.label}>Comment:</Typography>
  <TextareaAutosize
    rowsMin={3}
    placeholder="Add a comment..."
    sx={{ width: '100%', borderRadius: '5px', padding: '0.5rem' }}
  />
</div>
<Box sx={{ display: 'flex', alignItems: 'center', mt: '2rem' }}>
  <IconButton>
    <AttachFile />
  </IconButton>
  <Typography variant="h6">Attachments</Typography>
</Box>
<br />
<Box >
<Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '2rem'}}>
  <Button className={classes.saveButton} variant="contained" color="primary" disableElevation sx={{mr: '1rem'}}>
    Save as Draft
  </Button>
  <Button variant="contained" color="primary" disableElevation>
    Finalize
  </Button>
</Box>

</Box>
    </div>
  );
  
      
  } 
  export default EnterTestResults