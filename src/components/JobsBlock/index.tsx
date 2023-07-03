import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MainTitle } from '../../style'
import jobsData from './jobsData.json'

interface data {
  userId: number
  imgSrc: string
  subTitle: string
  title: string
  info: string
}

const data: data[] = jobsData

// ! JobsBlock Styleds

const subTitle = {
  fontWeight: 700,
  color: '#919eab',
  textAlign: 'center',
  textTransform: 'uppercase',
}

const titleInfo = {
  fontSize: '1rem',
  fontWeight: '400',
  color: '#637381',
  textAlign: 'center',
  margin: '0 auto',
  maxWidth: '480px',
}

const JobsBlock = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'white.main',
        padding: '120px 0 80px 0',
      }}
    >
      <Container>
        <Typography variant="overline" display="block" sx={subTitle}>
          FOR CANDIDATES
        </Typography>
        <Typography variant="h2" sx={MainTitle} p={2}>
          Explore Thousands of Jobs
        </Typography>
        <Typography variant="body2" sx={titleInfo}>
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
          Morbi mattis ullamcorper velit.
        </Typography>
        <Grid
          sx={{
            margin: '80px 0',
            boxSizing: 'border-box',
            justifyContent: { xs: 'center', md: 'space-between' },
            gap: '64px',
          }}
          container
          spacing={2}
          columns={14}
        >
          {data.map((item) => {
            return (
              <Grid
                key={item.userId}
                item
                xs={12}
                md={4}
                sx={{
                  padding: '0px !important',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Card
                  sx={{
                    maxWidth: '340px',
                    boxShadow: 'none',
                  }}
                >
                  <CardMedia
                    image={item.imgSrc}
                    component="img"
                    title="Some title"
                    style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      color: 'red',
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="overline"
                      display="block"
                      sx={subTitle}
                    >
                      {item.subTitle}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: 'center',
                        margin: '16px 0 8px 0',
                        color: 'black.main',
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: 'center', color: '#637381' }}
                    >
                      {item.info}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Button
          sx={{
            textAlign: 'center',
            display: 'flex',
            margin: '0 auto',
            padding: '10px 22px',
            borderRadius: '8px',
            backgroundColor: 'black.main',
            fontWeight: 700,
            fontSize: 15,
            textTransform: 'none',
            ':hover': {
              backgroundColor: 'black.main',
              opacity: 0.9,
            },
          }}
          variant="contained"
          startIcon={<AiOutlineCloudUpload />}
        >
          Upload Your CV
        </Button>
      </Container>
    </Box>
  )
}

export default JobsBlock
