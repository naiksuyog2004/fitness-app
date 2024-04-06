import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        alignItems: 'center',
        borderBottom: '2px solid #FF2625',
        backgroundColor: '#FFF',
        padding: '10px 20px',
        position: 'sticky', // Make the Navbar sticky
        top: 4, // Stick it to the top of the viewport
        zIndex: 1000, // Ensure it stays above other elements
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={Logo} alt="logo" style={{ width: '58px', height: '48px', borderRadius: '20%', marginRight: '10px' }} />
        <span style={{ fontSize: '38px', fontWeight: 'bold', letterSpacing: '2px' }}>FitHub</span>
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="center"
        fontWeight="bold"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link>
        {/* <Link to="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</Link> */}
        {/* <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a> */}
        <Link to="/mentors" style={{ textDecoration: 'none', color: '#3A1212' }}>Mentors</Link>
        <Link to="/shop" style={{ textDecoration: 'none', color: '#3A1212' }}>Shop</Link>
        <Link to="/plans" style={{ textDecoration: 'none', color: '#3A1212' }}>Plans</Link>
        <Link to="/calorie-calculator" style={{ textDecoration: 'none', color: '#3A1212' }}>Calorie Calculator</Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
