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
  Divider,
  IconButton,
  Drawer,
  Tooltip
} from '@mui/material/';
import { Link } from 'react-router-dom';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const pages = ['cv', 'blog', 'about'];

// get more help here -> https://codesandbox.io/s/material-ui-drawer-example-forked-16zfsl?file=/index.js:548-553

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{bgcolor: 'primary.main'}}>
        <Link to="/">
          <Box
            component="img"
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
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.toUpperCase()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

          <Box sx={{display: { xs: 'none', md: 'flex' } }}>
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
              <IconButton
              >
                {
                  <ModeNightIcon />
                }
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%' },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;