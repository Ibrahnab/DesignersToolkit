import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const UsernameTextField = () => (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      margin="auto"
      width="240px"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined"/>
    </Box>
  );