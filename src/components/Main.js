import React from 'react'
import Navbar from './Navbar'
import Home from '../pages/Home'
import Footer from './Footer'
import { Box } from '@mui/material';

const Main = () => {
    return (
        <Box>
            <Home />
            <Footer />
        </Box>
    )
}

export default Main