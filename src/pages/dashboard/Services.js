
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { ServiceCard } from '../../components/ServiceCard';
import { products } from '../../utils/products';



const Services= () => (
  <>
  <Typography variant='h4'>Our Services</Typography>
    
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 1
      }}
    >
      <Container maxWidth={false}>
     
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ServiceCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        
      </Container>
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
    </Box>
  </>
);



export default Services;