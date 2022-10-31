import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../shared/images/logo.svg';

const pages = ['CV', 'Blog', 'About'];

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              mr: 2,
              height: 75,
              width: 75,
              maxHeight: { xs: 100, md: 167 },
              maxWidth: { xs: 100, md: 250 },
            }}
            alt="Logo"
            src={Logo}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              display: { xs: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            David Erlich
          </Typography>

          <Box sx={{display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <MenuIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;