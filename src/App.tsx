import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Alert, Box, Breadcrumbs, Link, Typography, AppBar, Container, Stack, Button, BottomNavigation } from '@mui/material'
import CustomAppBar from './components/CustomAppbar'
import CustomFooter from './components/CustomFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CustomAppBar/>
      <section id="PageContent">
        <Box sx={{ flexGrow: 1, pt:16, pd:8}}>
          <Stack spacing={4} sx={{height:'100%'}}>
            <Typography variant="h1" gutterBottom>
              Snowfolio
            </Typography>
            <Typography>A home for Snow's projects</Typography>
            <Typography variant="h1" gutterBottom>
              Snowfolio
            </Typography>
            <Typography variant="h1" gutterBottom>
              Snowfolio
            </Typography>
            <Typography variant="h1" gutterBottom>
              Snowfolio
            </Typography>
            <Typography variant="h1" gutterBottom>
              Snowfolio
            </Typography>
            <Typography variant="h1" gutterBottom>
              Snowfolio
            </Typography>
          </Stack>
        </Box>
      </section>
      
      <CustomFooter/>
    </Box>
  )
}

export default App
