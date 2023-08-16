import { Box, Container, Grid, Typography, Button } from '@mui/material'
import HotCard from './HotCard'
import CardDatas from './HotCategoriesData.json'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const HotCategories = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '40px 0 80px 0', md: '80px 0 120px 0' },
        backgroundColor: 'white.main',
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontSize: { lg: '3rem', md: '2.75rem', xs: '2.5rem' },
            textAlign: 'center',
            fontWeight: 700,
            fontFamily: 'Barlow',
            color: 'black.main',
          }}
        >
          Hot Categories
        </Typography>
        <Grid container sx={{ margin: '80px 0' }} spacing={2} margin={2}>
          {CardDatas.map((data) => {
            return <HotCard key={data.id} {...data} />
          })}
        </Grid>
        <Button
          sx={{
            textAlign: 'center',
            display: 'flex',
            margin: '0 auto',
            padding: '12px 23px',
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
          View All Categories
        </Button>
      </Container>
    </Box>
  )
}

export default HotCategories
