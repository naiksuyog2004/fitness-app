import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {

  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems='center' px="40px" pt="24px">
      </Stack>
      <Typography
        variant="h5"
        pb='40px'
        mt="20px"
        textAlign="center"
      >
        Made by <br />
        Team Mavericks
      </Typography>
    </Box>
  );
};

export default Footer;
