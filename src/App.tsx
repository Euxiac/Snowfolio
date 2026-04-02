import { Box, Typography, Divider, Button } from '@mui/material'
import CustomAppBar from './components/CustomAppbar'
import CustomFooter from './components/CustomFooter'
import TestComponents from './components/Testcomponent'

function App() {

  return (
    <>
    <CustomAppBar/>
      <Box sx={{ display:'flex', paddingTop:16, vw:100, flexDirection:'column', alignItems:'center' }}>
          <Typography variant="h1" gutterBottom>
            Snowfolio
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            A home for Snow's projects
          </Typography>

          <Button variant="contained" color="primary">
            View Projects
          </Button>

          <Divider orientation="horizontal" flexItem sx={{paddingTop:'24px', paddingBottom:'24px'}} />

          <TestComponents/>
    </Box>
    <CustomFooter/>
    </>
  )
}

export default App
