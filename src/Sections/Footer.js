import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box>
      <Divider
        variant='fullWidth'
        sx={{
          borderTop: '1px solid white'
        }}
      />
      <Typography>Footer</Typography>
    </Box>
  );
};

export default Footer;
