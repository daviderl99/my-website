import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../shared/images/logo.png';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  Drawer,
  Tooltip
} from '@mui/material/';
import { Link } from 'react-router-dom';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './Header.css';

const pages = ['cv', 'blog', 'about'];

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              sx={{
                mr: 2,
                height: 75,
                width: 75,
                maxHeight: { xs: 50, md: 100 },
                maxWidth: { xs: 50, md: 100 },
              }}
              alt="Logo"
              src={Logo}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              display: { xs: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            David Erlich
          </Typography>

          <Box sx={{display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page} key={page}>
                <Button
                  sx={{
                    my: 2,
                    fontWeight: 700,
                    color: 'white',
                    display: 'block'
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Tooltip title="Dark mode">
              <IconButton onClick={toggleTheme} className="btn__theme">
                {
                  isDarkMode ?
                    <WbSunnyOutlinedIcon /> :
                    <ModeNightIcon />
                }
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
            <IconButton
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Box component="nav">
          <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%' }
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{bgcolor: 'primary.main'}}>
                <Link to="/">
                  <Box
                    component="img"
                    onClick={() => setIsDrawerOpen(false)}
                    sx={{
                      height: 75,
                      width: 75,
                      maxHeight: { xs: 50, md: 100 },
                      maxWidth: { xs: 50, md: 100 },
                    }}
                    alt="Logo"
                    src={Logo}
                  />
                </Link>
              </Box>
              <List>
                {pages.map((page) => (
                  <ListItem key={page} component={Link} to={page} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={page.toUpperCase()} onClick={() => setIsDrawerOpen(false)} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;