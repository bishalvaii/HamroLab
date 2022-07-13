import { makeStyles } from "@mui/styles";





const styles = (theme) => {
  return {
    toolBar: {
      height: '10vh',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: 'white',
    },
  
   
 
    heroBox: {
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '50px',
      marginBottom: '80px',
    },
   
    title: {
      paddingBottom: '15px',
    },
    subtitle: {
      opacity: '1',
      paddingBottom: '30px',
    },
    largeImage: {
      width: '100%',
    },
    
    
   
  };
};

const useStyles = makeStyles(styles);
export default useStyles;