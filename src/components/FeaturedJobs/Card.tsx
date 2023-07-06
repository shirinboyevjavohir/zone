import { Box, Typography, Link, Divider, Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { CiLocationOn } from 'react-icons/ci'
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PaymentsIcon from '@mui/icons-material/Payments'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const date = () => {
  const date = new Date()
  const year = date.getFullYear()
  let day: number | string = date.getDate()
  const options = {
    month: 'long' as const,
  }
  const formattedDate = date.toLocaleDateString('en-US', options)

  if (day < 10) {
    day = '0' + day
  }

  return `${day} ${formattedDate} ${year}`
}

interface DataProps {
  userId: number
  imgSrc: string
  subTitle: string
  title: string
  location: string
  year: string
  time: string
  price: string
  status: string
}

const Card = ({
  imgSrc,
  subTitle,
  title,
  location,
  year,
  time,
  price,
  status,
}: DataProps) => {
  return (
    <Box
      sx={{
        width: '344px',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
        borderRadius: '16px',
        backgroundColor: 'transparent',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': {
          boxShadow: '-24px 24px 72px -8px rgba(145, 158, 171, 0.24)',
        },
        '@media(max-width: 780px)': {
          width: '90%',
        },
      }}
    >
      {/* Card Top Container Start */}
      <Box
        sx={{
          padding: '24px 24px 0 24px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={imgSrc}
            alt=""
            style={{ width: '48px', height: '48px', borderRadius: '8px' }}
          />
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'warning.main' }} />}
            sx={{
              '&:hover': { backgroundColor: 'rgba(255, 86, 48, 0.08)' },
            }}
          />
        </Box>

        <Link
          href="#"
          underline="hover"
          sx={{
            marginTop: '24px',
            display: 'block',
            fontSize: '1.125rem',
            fontFamily: 'Barlow',
            color: 'black.main',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {title}
        </Link>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            margin: '4px 0',
            fontSize: '0.875rem',
            fontWeight: '400',
            color: '#00B8D9',
          }}
        >
          {subTitle}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: '#637381',
          }}
        >
          <CiLocationOn
            size={16}
            style={{ stroke: 'black', strokeWidth: '0.4' }}
          />
          <Typography
            variant="body1"
            sx={{ fontSize: '0.875rem', margin: '0' }}
            gutterBottom
          >
            {location}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: '0.75rem', color: '#919EAB', marginTop: '16px' }}
        >
          Posted day: {date()}
        </Typography>
      </Box>
      {/* Card Top Container Finish  */}
      {/* Border Dashed 👇 */}
      <Divider sx={{ margin: '16px 0', borderStyle: 'dashed' }} />
      {/* Card Bottom Container Start */}
      <Box sx={{ padding: '0 24px 24px 24px' }}>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={2}>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <SignalCellularAltOutlinedIcon
                  sx={{ fontSize: '1.2rem', color: '#637381' }}
                />
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    margin: '0',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: '#637381',
                  }}
                >
                  {year}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <AccessTimeIcon sx={{ fontSize: '1.2rem', color: '#637381' }} />
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    margin: '0',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: '#637381',
                  }}
                >
                  {time}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <PaymentsIcon sx={{ fontSize: '1.2rem', color: '#637381' }} />
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    margin: '0',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: '#637381',
                  }}
                >
                  {price}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <PersonOutlinedIcon
                  sx={{ fontSize: '1.2rem', color: '#637381' }}
                />
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    margin: '0',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: '#637381',
                  }}
                >
                  {status}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Card Bottom Container Finish */}
    </Box>
  )
}

export default Card
