import bg from "../assets/images/bg.png";

import { Logo } from "../components";
import Link from "@mui/material/Link";


import useStyles from "../assets/wrappers/Styles";
import { Box, Button, Grid, Typography } from "@mui/material";


const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          m: "0 auto",
          display: "flex",
          alignItems: "center",
          maxWidth: "1120px",
          width: "90vw",
          height: "6rem",
        }}
      >
        <Logo />
      </Box>
      <Box className={classes.heroBox}>
        <Grid container spacing={6} className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={700} className={classes.title}>
              Okhati Dashboard
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Okhati suite comprises of a bunch of smart solutions made for
              clinics, labs & hospitals that consists of EMR , patient-flow
              management, billing, reporting, bulk-messaging, app engagement and
              much more.
            </Typography>
            <Link href="register" underline='none'>
              <Button
                variant="contained"
                color="success"
                sx={{ width: "200px", fontSize: "16px" }}
              >
                LOGIN/REGISTER
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} display={{ xs: "none",md: 'block' ,lg: "block" }}>
            <img src={bg} alt="My Team" className={classes.largeImage} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LandingPage;