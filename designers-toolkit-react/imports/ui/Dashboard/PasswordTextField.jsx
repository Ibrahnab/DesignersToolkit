import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const PasswordTextField = () => (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      width="240px"
      margin="auto"
    >
      <TextField type="password" id="outlined-basic" label="Password" variant="outlined" />
    </Box>
  ); 