import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function MuiTest() {

    return(
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: '#f0f0f0'
                }}
            >

                <Typography variant="h1" component="h1" gutterBottom 
                sx={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#333'
                }}>

                    Hello, MUI!
                </Typography>

                <Button variant="outlined" size="large" startIcon={<DeleteIcon />}>Just Checking</Button>
                

            </Box>
        
        </>
    )
}