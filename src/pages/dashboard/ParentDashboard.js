import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ClinicBudget, ClinicPatient } from "../../components/ClinicPatient";
import { ClinicMember, ClinicTask } from "../../components/ClinicMember";
import { ClinicDoctors, ClinicProfit } from "../../components/ClinicDoctors";
import { Box, Container, Grid } from "@mui/material";

import { ClinicAppointment } from "../../components/ClinicAppointment";

const ParentDashboard = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          flexWrap: 'wrap'
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <ClinicAppointment />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <ClinicPatient />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <ClinicMember />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <ClinicDoctors sx={{ height: "100%" }} />
            </Grid>
          
            
            
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default ParentDashboard;