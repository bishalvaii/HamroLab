import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/PeopleOutlineRounded';

export const ClinicMember = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            STAFF MEMBERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            30+
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
              <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
);