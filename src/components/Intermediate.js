import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image1 from '../assets/images/Imon.png';
import Image2 from '../assets/images/Itue.png';
import Image3 from '../assets/images/Iwed.png';
import Image4 from '../assets/images/Ifri.png';
import Image5 from '../assets/images/Isat.png';
import Image6 from '../assets/images/Isun.png';

const Intermediate = () => {
    return (
        <Box textAlign="center" mt={4}>
            <Typography variant="h4">Pull, Push, Legs Bodybuilding Workout</Typography>
            <Box mt={8} display="flex" justifyContent="center">
                <Grid container spacing={3} alignItems="flex-start" ml={10}>
                    <Grid item xs={6} >
                        <Typography variant="h5" gutterBottom align="left" sx={{ borderBottom: '1px solid black', paddingBottom: '8px' }}>Weekly Workout Schedule</Typography>
                        <Typography variant="body1" align="left">Monday: Push Workout</Typography>
                        <Typography variant="body1" align="left">Tuesday: Pull Workout</Typography>
                        <Typography variant="body1" align="left">Wednesday: Legs Workout</Typography>
                        <Typography variant="body1" align="left">Thursday: Rest</Typography>
                        <Typography variant="body1" align="left">Friday: Push Workout</Typography>
                        <Typography variant="body1" align="left">Saturday: Pull Workout</Typography>
                        <Typography variant="body1" align="left">Sunday: Legs Workout</Typography>
                    </Grid>
                    <Box borderLeft="1px solid black" height="100%" my={2} mx={4} />
                    <Grid item xs={5}>
                        <Typography variant="h5" gutterBottom align="left" sx={{ borderBottom: '1px solid black', paddingBottom: '8px' }}>WORKOUT SUMMARY</Typography>
                        <Typography variant="body1" align="left">Main Goal: Build Muscle</Typography>
                        <Typography variant="body1" align="left">Workout Type: Split</Typography>
                        <Typography variant="body1" align="left">Training Level: Intermediate</Typography>
                        <Typography variant="body1" align="left">Program Duration: 12 weeks</Typography>
                        <Typography variant="body1" align="left">Days Per Week: 6</Typography>
                        <Typography variant="body1" align="left">Time Per Workout: 45-75 minutes</Typography>
                        <Typography variant="body1" align="left">Equipment Required: Barbell, Bodyweight, Cables, Dumbbells, EZ Bar, Machines</Typography>
                        <Typography variant="body1" align="left">Target Gender: Male & Female</Typography>
                        <Typography variant="body1" align="left">Recommended Supps: Protein Powder, Whey Protein, Pre-Workout (optional), Multivitamin Packs</Typography>
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
            <Box mt={4} mb={8} display="flex" justifyContent="center">
                <img src={Image5} alt="Image5" style={{ marginRight: '10px', width: '700px' }} />
                <img src={Image6} alt="Image6" style={{ marginLeft: '10px', width: '700px' }} />
            </Box>
        </Box>
    );
};

export default Intermediate;
