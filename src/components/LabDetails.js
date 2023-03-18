import { Button, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  button: {
    marginRight: '1rem',
  },
  select: {
    minWidth: '10rem',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },
  value: {
    marginBottom: '1rem',
  },
});

function LabDetails({ formData}) {
  console.log(formData)
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" className={classes.heading}>
        Lab Details
      </Typography>
      <Button variant="contained" className={classes.button}>
        Edit Tests
      </Button>
      <Button variant="contained" className={classes.button}>
        Enter Test Results
      </Button>
      <Select className={classes.select}>
        <MenuItem value="create-bill">Create Bill</MenuItem>
        <MenuItem value="cancel-test">Cancel Lab Test</MenuItem>
      </Select>
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