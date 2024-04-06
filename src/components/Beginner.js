import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image1 from '../assets/images/mon.png';
import Image2 from '../assets/images/tue.png';
import Image3 from '../assets/images/thur.png';
import Image4 from '../assets/images/fri.png';

const Beginner = () => {
    return (
        <Box textAlign="center" mt={4}>
            <Typography variant="h4">Upper/Lower 4 Day Bodybuilding Workout</Typography>
            <Box mt={8} display="flex" justifyContent="center">
                <Grid container spacing={3} alignItems="flex-start" ml={10}>
                    <Grid item xs={6} >
                        <Typography variant="h5" gutterBottom align="left" sx={{ borderBottom: '1px solid black', paddingBottom: '8px' }}>Weekly Workout Schedule</Typography>
                        <Typography variant="body1" align="left">Monday: Upper Workout</Typography>
                        <Typography variant="body1" align="left">Tuesday: Lower Workout</Typography>
                        <Typography variant="body1" align="left">Wednesday: Rest</Typography>
                        <Typography variant="body1" align="left">Thursday: Upper Workout</Typography>
                        <Typography variant="body1" align="left">Friday: Lower Workout</Typography>
                        <Typography variant="body1" align="left">Saturday: Rest</Typography>
                        <Typography variant="body1" align="left">Sunday: Rest</Typography>
                    </Grid>
                    <Box borderLeft="1px solid black" height="100%" my={2} mx={4} />
                    <Grid item xs={5}>
                        <Typography variant="h5" gutterBottom align="left" sx={{ borderBottom: '1px solid black', paddingBottom: '8px' }}>WORKOUT SUMMARY</Typography>
                        <Typography variant="body1" align="left">Main Goal: Build Muscle</Typography>
                        <Typography variant="body1" align="left">Workout Type: Split</Typography>
                        <Typography variant="body1" align="left">Training Level: Beginner</Typography>
                        <Typography variant="body1" align="left">Program Duration: 8 weeks</Typography>
                        <Typography variant="body1" align="left">Days Per Week: 4</Typography>
                        <Typography variant="body1" align="left">Time Per Workout: 45-60 minutes</Typography>
                        <Typography variant="body1" align="left">Equipment Required: Barbell, Bodyweight, Cables, Dumbbells, EZ Bar, Machines</Typography>
                        <Typography variant="body1" align="left">Target Gender: Male & Female</Typography>
                        <Typography variant="body1" align="left">Recommended Supps: Creatine, Whey Protein, Pre-Workout (optional), Multivitamin Packs</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={4} display="flex" justifyContent="center">
                <img src={Image1} alt="Image1" style={{ marginRight: '10px', width: '700px' }} />
                <img src={Image2} alt="Image2" style={{ marginLeft: '10px', width: '700px' }} />
            </Box>
            <Box mt={4} mb={8} display="flex" justifyContent="center">
                <img src={Image3} alt="Image3" style={{ marginRight: '10px', width: '700px' }} />
                <img src={Image4} alt="Image4" style={{ marginLeft: '10px', width: '700px' }} />
            </Box>
        </Box>
    );
};

export default Beginner;
