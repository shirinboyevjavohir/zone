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
import SearchIcon from '@mui/icons-material/Search'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import { Badge, Drawer } from '@mui/material'

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
const NavbarLinkStyledDark = {
  color: 'black.main',
  display: 'flex',
  textTransform: 'capitalize',
  fontSize: '0.875rem',
  '&:hover': {
    color: 'warning.main',
  },
  width: '100%',
  justifyContent: 'flex-start',
}

function ResponsiveAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
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
    setIsDrawerOpen(false)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <AppBar position="fixed" sx={{ background: 'dark.main' }}>
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            {/* Logo start */}
            <Box>
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
            </Box>
            {/* Logo end */}

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
            <Box
              sx={{
                flexGrow: 0,
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textAlign: 'right',
              }}
            >
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
                  padding: '4px 14px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '0.875rem',
                  minWidth: '64px',
                  backgroundColor: 'rgb(33, 43, 54)',
                  height: '35px',
                  marginLeft: '8px',
                  '&:hover': {
                    backgroundColor: 'rgb(69, 79, 91)',
                  },
                  display: { md: 'block', xs: 'none' },
                }}
              >
                Buy Now
              </Button>
              {/* Drawer Side Menu Start */}
              <IconButton
                sx={{ display: { md: 'none', xs: 'flex' } }}
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon sx={{ color: 'white.main' }} />
              </IconButton>

              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <Box p={2} sx={{ width: '250px' }} role="presentation">
                  <Box
                    onClick={() => setIsDrawerOpen(false)}
                    sx={{ position: 'relative', cursor: 'pointer' }}
                  >
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        display: {},
                        fontFamily: 'Barlow',
                        fontWeight: 900,
                        letterSpacing: '.1rem',
                        color: 'black.main',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        fontSize: '24px',
                      }}
                    >
                      ZONE
                    </Typography>
                    <Badge
                      sx={{
                        position: 'absolute',
                        bottom: '13px',
                        marginLeft: '4px',
                      }}
                      color="error"
                      variant="dot"
                    />
                  </Box>

                  <Box sx={{ paddingLeft: '10px', marginTop: '10px' }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={NavbarLinkStyledDark}
                    >
                      Home
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={NavbarLinkStyledDark}
                    >
                      Components
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={NavbarLinkStyledDark}
                    >
                      Pages
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={NavbarLinkStyledDark}
                    >
                      Docs
                    </Button>
                    <Button
                      onClick={() => setIsDrawerOpen(false)}
                      variant="contained"
                      sx={{
                        display: 'block',
                        width: '100%',
                        marginTop: '8px',
                        textTransform: 'capitalize',
                        borderRadius: '8px',
                        backgroundColor: 'rgb(33, 43, 54)',
                        '&:hover': {
                          backgroundColor: 'rgb(69, 79, 91)',
                        },
                      }}
                    >
                      Buy Now
                    </Button>
                  </Box>
                </Box>
              </Drawer>
              {/* Drawer Side Menu Finish */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  )
}
export default ResponsiveAppBar
