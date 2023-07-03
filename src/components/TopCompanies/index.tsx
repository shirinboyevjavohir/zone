import { Box, Container, Typography } from '@mui/material'
import { MainTitle } from '../../style/'
import Slider from 'react-slick'

const settings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
}

const TopCompanies = () => {
  return (
    <Box
      sx={{
        padding: '120px 0',
        backgroundColor: '#F9FAFB',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom sx={MainTitle}>
          Top Companies
        </Typography>
        <Box sx={{ width: '300px' }}>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </Box>
      </Container>
    </Box>
  )
}

export default TopCompanies
