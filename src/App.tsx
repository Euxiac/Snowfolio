import './App.css'
import { Box, Typography, Stack } from '@mui/material'
import CustomAppBar from './components/CustomAppbar'
import CustomFooter from './components/CustomFooter'

function App() {

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
