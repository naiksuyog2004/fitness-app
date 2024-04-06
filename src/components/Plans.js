import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Image1 from '../assets/images/Beg.webp'; // Import your images here
import Image2 from '../assets/images/inter.jpg';
import Image3 from '../assets/images/pro.jpg';

const cardTextStyle = {
    textDecoration: 'none', // Remove text decoration
};

const Plans = () => {
    return (
        <Box
            sx={{
                padding: '20px',
                borderRadius: '8px',
                backgroundColor: '#f0f0f0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                marginTop: '40px'
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>Choose Your Plan</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Link to="/beginner" style={cardTextStyle}>
                        <Card>
                            <CardMedia component="img" image={Image1} alt="Image 1" />
                            <CardContent>
                                <Typography variant="h6" sx={cardTextStyle}>Beginner</Typography>
                                <Typography variant="body2" color="textSecondary" sx={cardTextStyle}>It's a plan designed by our experts for people who are Beginners in their exercise journey.</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to="/intermediate" style={cardTextStyle}>
                        <Card>
                            <CardMedia component="img" image={Image2} alt="Image 2" />
                            <CardContent>
                                <Typography variant="h6" sx={cardTextStyle}>Intermediate</Typography>
                                <Typography variant="body2" color="textSecondary" sx={cardTextStyle}>It's a plan designed by our experts for people who are Intermediate in their exercise journey.</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to="/advance" style={cardTextStyle}>
                        <Card>
                            <CardMedia component="img" image={Image3} alt="Image 3" />
                            <CardContent>
                                <Typography variant="h6" sx={cardTextStyle}>Advance</Typography>
                                <Typography variant="body2" color="textSecondary" sx={cardTextStyle}>It's a plan designed by our experts for people who are Advance in their exercise journey.</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Plans;
