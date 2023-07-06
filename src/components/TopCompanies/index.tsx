import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Container,
  Typography,
  IconButton,
} from '@mui/material'
import { MainTitle } from '../../style/'
import Slider from 'react-slick'
import Jobs from './Jobs.json'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'

interface IconButtonProps {
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
        <Box sx={{ '& .slick-track': { display: 'flex', gap: '20px' } }}>
          <Slider {...settings}>
            {Jobs.map((job) => {
              return (
                <Box
                  key={job.userId}
                  sx={{
                    height: '280px',
                    marginTop: '80px',
                    '& .MuiBox-root:hover': {
                      backgroundColor: 'white.main',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: '248px',
                      padding: '40px 24px',
                      borderRadius: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s, transform 0.3s',
                      '&:hover': {
                        backgroundColor: 'white.main',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    <img
                      src={job.imgSrc}
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '8px',
                        margin: '0 auto',
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                          color: 'white.dark',
                          margin: '20px 0 4px 0',
                          textAlign: 'center',
                        }}
                      >
                        {job.subTitle}
                      </Typography>

                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          textAlign: 'center',
                        }}
                      >
                        {job.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Slider>
        </Box>
      </Container>
    </Box>
  )
}

export default TopCompanies
