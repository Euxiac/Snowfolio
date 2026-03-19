import { AppBar, Button, Stack, Typography } from "@mui/material";


export default function CustomAppBar() {

return(
    <>
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        minWidth:'100%', 
        display: 'flex',
        padding:'12px'
      }}
    >
        <Stack direction="row" sx={{flexGrow: 1}}>
            <Stack direction="row" spacing={4} sx={{flexGrow: 1}}>
                <Typography variant='h4'> Snowfolio</Typography>
                <Button variant="text">Page 1</Button>
                <Button variant="text">Page 2</Button>
                <Button variant="text">Page 3</Button>
            </Stack>
            <Stack direction="row" spacing={4} sx={{flexGrow: 0}}>
                <Button variant="outlined">Action</Button>
            </Stack>
        </Stack>
    </AppBar>
    </>
);
}