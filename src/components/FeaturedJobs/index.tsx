import { Box, Container, Button, Grid, Typography } from '@mui/material'
import FeaturedJobsData from './FeaturedJobsData.json'
import Card from './Card'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const FeaturedJobs = () => {
  return (
    <Box
      sx={{
        padding: { xs: '40px 0 80px 0', md: '80px 0 120px 0' },
        backgroundColor: 'white.main',
      }}
    >
      <Container>
        <Box sx={{ width: '100%' }}>
          <Grid container>
            <Grid item md={4} sm={12}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'white.dark',
                  textAlign: { md: 'left', sm: 'center' },
                  margin: '8px 0',
                }}
              >
                FEATURED JOBS
              </Typography>
            </Grid>
            <Grid item md={8} sm={12}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  textAlign: { md: 'left', sm: 'center' },
                  fontSize: { md: '1.875rem', sm: '1.625rem' },
                  fontWeight: 700,
                  fontFamily: 'Barlow',
                  color: 'black.main',
                  margin: '8px 0 8px 20px',
                }}
              >
                Jobs available apply to Editorial Specialist, Account Manager,
                Human Resources Specialist and more!
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            padding: '80px 0',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '40px',
            margin: '0 auto',
            '@media(max-width: 780px)': {
              justifyContent: 'center',
            },
            '@media(max-width: 1180px)': {
              justifyContent: 'space-around',
            },
          }}
        >
          {FeaturedJobsData.map((item) => {
            return <Card key={item.userId} {...item} />
          })}
        </Box>
        <Button
          sx={{
            textAlign: 'center',
            display: 'flex',
            margin: '0 auto',
            padding: '7px 21px',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            fontWeight: 700,
            fontSize: '15px',
            textTransform: 'capitalize',
            border: '1px solid rgba(145, 158, 171, 0.32)',
            color: 'black.main',
            ':hover': {
              backgroundColor: 'rgba(33, 43, 54, 0.08)',
              borderColor: 'black.main',
            },
          }}
          variant="outlined"
          endIcon={<ChevronRightIcon />}
        >
          view all jobs
        </Button>
      </Container>
    </Box>
  )
}

export default FeaturedJobs
