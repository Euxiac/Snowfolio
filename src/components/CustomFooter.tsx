import * as React from 'react';
import { Alert, BottomNavigation, Box, Button, Collapse, Slide } from "@mui/material";

export default function CustomFooter() {
const [open, setOpen] = React.useState(true);
return(
    <BottomNavigation
        sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            boxShadow: 0,
            bgcolor: 'transparent',
            display: 'flex',
            padding:'12px'
    }}
    >
        <Box sx={{position:'absolute', right:'0', zIndex:'-1', paddingRight:'16px'}}><img src={'../public/Duck.png'} alt="Duck" height="120" width="100"/></Box>
        <Slide direction="up" in={open}>
            <Alert severity="warning" action={<Button color="inherit" size="small" onClick={() => {
                        setOpen(false);
                    }}>Dismiss</Button>}sx={{flexGrow: 1}}>
                This website is under construction.
            </Alert>
        </Slide>
    </BottomNavigation>
);
}