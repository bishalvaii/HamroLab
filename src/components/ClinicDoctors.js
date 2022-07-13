import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import LocalHospital from '@mui/icons-material/LocalHospital';

export const ClinicDoctors = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL DOCTORS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
           10
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}  
          >
              <LocalHospital  />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);