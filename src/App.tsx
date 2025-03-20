import { Outlet, Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import './App.css'

function App() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Recommended', path: '/recommended' }
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4 }}>
            BrainTop
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  textTransform: 'none',
                  borderBottom: location.pathname === item.path ? '2px solid white' : 'none'
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {/* Auth buttons aligned to the right */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={Link}
              to="/register"
              color="inherit"
              variant="outlined"
              sx={{ textTransform: 'none' }}
            >
              Register
            </Button>
            <Button
              component={Link}
              to="/login"
              color="inherit"
              variant="outlined"
              sx={{ textTransform: 'none' }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default App