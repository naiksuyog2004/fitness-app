import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '60px', xs: '70px' },
      ml: { sm: '60px' }
    }}
      position='relative' p='30px'>

      <Typography
        color='#FF2625'
        fontWeight="600"
        fontSize="35px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }}
        mb='25px' mt='30px'>
        Sweat, Smile <br /> And Repeat
      </Typography>

      <Typography
        fontSize='25px'
        fontFamily="Alegreya"
        lineHeight='25px'
        mb={5}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{ backgroundColor: '#ff2625', padding: '10px' }}>
        Explore Exercises
      </Button>

      <Button
        variant='contained'
        color='error'
        href='#searches'
        sx={{ backgroundColor: '#ff2625', padding: '10px', marginLeft: "4px" }}>
        Search Exercises
      </Button>

      <Typography
        fontWeight='600'
        color='#ff2625'
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px">
        Exercise
      </Typography>

      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />

    </Box>
  )
}

export default HeroBanner