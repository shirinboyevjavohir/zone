import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Badge } from '@mui/material'

const pages = ['Home', 'Components', 'Documentation']
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavbarLinkStyled = {
  my: 2,
  color: 'white.main',
  display: 'flex',
  textTransform: 'capitalize',
  fontSize: '0.875rem',
  '&:hover': {
    color: 'warning.main',
  },
}

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <AppBar position="fixed" sx={{ background: 'transparent' }}>
        <Container>
          <Toolbar disableGutters>
            {/* Logo start */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: {},
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.1rem',
                color: 'white.main',
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: '26px',
              }}
            >
              ZONE
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                ml: 2,
                mr: 2,
                position: 'relative',
              }}
            >
              <Badge
                sx={{
                  '& .MuiBadge-badge': {
                    padding: '0px 5px',
                    fontSize: 11,
                    color: '#006C9C',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(0, 184, 217, 0.16)',
                  },
                  position: 'absolute',
                  top: '-15px',
                  left: '2px',
                }}
                badgeContent={'V2.0'}
                color="primary"
              />
              <Badge
                sx={{ position: 'absolute', left: '-10px', bottom: '-5px' }}
                color="error"
                variant="dot"
              />
            </Box>
            {/* Logo end */}

            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'warning.main',
                    position: 'absolute',
                    left: '3px',
                    display: 'none',
                  }}
                ></Box>
                <Button onClick={handleCloseNavMenu} sx={NavbarLinkStyled}>
                  Home
                </Button>
              </Box>
              <Button onClick={handleCloseNavMenu} sx={NavbarLinkStyled}>
                Components
              </Button>
              <Button
                id="resources-button"
                onClick={handleClick}
                aria-controls={open ? 'resources-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? true : undefined}
                endIcon={<KeyboardArrowDownIcon />}
                sx={NavbarLinkStyled}
              >
                Pages
              </Button>
              <Button onClick={handleCloseNavMenu} sx={NavbarLinkStyled}>
                Documentation
              </Button>
            </Box>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{ 'aria-labelledby': 'resources-button' }}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={handleClose}>Blog</MenuItem>
              <MenuItem onClick={handleClose}>Psops</MenuItem>
              <Box>
                <Typography>Salom</Typography>
              </Box>
            </Menu>

            {/* Start icons */}
            <Box sx={{ flexGrow: 0, display: 'flex', gap: '4px' }}>
              <IconButton aria-label="search">
                <SearchIcon sx={{ color: 'white.main' }} />
              </IconButton>
              <IconButton
                aria-label="setting"
                sx={{
                  color: 'white.main',
                  animation: 'spin 4s linear infinite',
                  '@keyframes spin': {
                    '0%': {
                      transform: 'rotate(0deg)',
                    },
                    '100%': {
                      transform: 'rotate(360deg)',
                    },
                  },
                }}
              >
                <SettingsOutlinedIcon />
              </IconButton>
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: 'capitalize',
                  padding: '6px 16px',
                  borderRadius: '8px',
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  )
}
export default ResponsiveAppBar
