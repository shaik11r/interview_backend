
import { Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
function signup(){
    return(
        <div>
            <Container >
                <Box component='form' >
                    <TextField required id='email' label='Email address' name='email' autoComplete='email' autoFocus/>
                    <TextField required id='password' label='Password' name='password' autoComplete='current-password' autoFocus/>
                </Box>

            </Container>
        </div>
    )
}