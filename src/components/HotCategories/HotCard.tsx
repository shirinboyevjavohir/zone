import { Grid, Box, Typography } from '@mui/material'

interface DataProps {
  id: number
  src: string
  title: string
  job: string
}

const HotCard = ({ src, title, job }: DataProps) => {
  return (
    <Grid item sx={{ padding: '20px' }} md={3} sm={6} xs={12}>
      <Box
        sx={{
          color: 'black.main',
          border: '1px solid rgba(145, 158, 171, 0.24)',
          borderRadius: '16px',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px 0',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#fff',
            boxShadow: '-24px 24px 72px -8px rgba(145, 158, 171, 0.24)',
            '& .css-1re9jup': {
              backgroundColor: 'warning.main',
            },
          },
        }}
      >
        <Box
          sx={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={src}
            alt=""
            className="st5"
            style={{ width: '48px', height: '48px' }}
          />
        </Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: ' 1.125rem',
            fontWeight: 600,
            fontFamily: 'Barlow',
            overflow: 'hidden',
            color: 'black.main',
            marginTop: '20px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: '0.875rem', marginTop: '4px', color: 'white.dark' }}
        >
          {job}
        </Typography>
      </Box>
    </Grid>
  )
}

export default HotCard
