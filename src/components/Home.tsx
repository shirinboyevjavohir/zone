import { Box } from '@mui/material'
import JobsBlock from './JobsBlock'
import TopCompanies from './TopCompanies'
import FeaturedJobs from './FeaturedJobs'
import HotCategories from './HotCategories'
import Header from './Header'

const Home = () => {
  return (
    <Box>
      <Header />
      <JobsBlock />
      <FeaturedJobs />
      <TopCompanies />
      <HotCategories />
    </Box>
  )
}

export default Home
