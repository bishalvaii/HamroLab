import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ScienceIcon from '@mui/icons-material/Science';
import { Science } from '@mui/icons-material';

export const ClinicAppointment = (props) => (
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
            TOTAL LABS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            200+
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
            <ScienceIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);