import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CalorieCalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [bmi, setBMI] = useState(null);
    const [response, setResponse] = useState('');
    const [recommendedCalories, setRecommendedCalories] = useState('');

    const calculateBMI = () => {
        const heightMeters = height / 100; // Convert height to meters
        const bmiValue = weight / (heightMeters * heightMeters); // Calculate BMI
        setBMI(bmiValue.toFixed(2)); // Round BMI to 2 decimal places

        // Generate response based on BMI
        let generatedResponse = '';
        let generatedCalories = '';
        if (bmiValue < 18.5) {
            generatedResponse = 'You are underweight.';
            generatedCalories = 'Recommended daily calorie intake: 2000 - 3000 calories';
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            generatedResponse = 'You are in a healthy weight range.';
            generatedCalories = 'Recommended daily calorie intake: 1800 - 2400 calories';
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            generatedResponse = 'You are overweight.';
            generatedCalories = 'Recommended daily calorie intake: 1500 - 2200 calories';
        } else {
            generatedResponse = 'You are obese.';
            generatedCalories = 'Recommended daily calorie intake: 1200 - 2000 calories';
        }
        setResponse(generatedResponse);
        setRecommendedCalories(generatedCalories);
    };

    return (
        <Box sx={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <Typography variant="h3" gutterBottom>
                BMI Calculator
            </Typography>
            <Box sx={{ marginBottom: '20px' }}>
                <TextField
                    label="Height (cm)"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    fullWidth
                />
            </Box>
            <Box sx={{ marginBottom: '20px' }}>
                <TextField
                    label="Weight (kg)"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    fullWidth
                />
            </Box>
            <Box sx={{ marginBottom: '20px' }}>
                <FormControl fullWidth>
                    <InputLabel id="gender-label">Sex</InputLabel>
                    <Select
                        labelId="gender-label"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        label="Gender"
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ marginBottom: '20px' }}>
                <TextField
                    label="Age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    fullWidth
                />
            </Box>
            <Button variant="contained" color='error' onClick={calculateBMI} sx={{ marginBottom: '20px' }}>
                Calculate BMI
            </Button>
            {bmi && (
                <Box>
                    <Typography variant="h5">Your BMI: {bmi}</Typography>
                    <Typography variant="body1">{response}</Typography>
                    <Typography variant="body1">{recommendedCalories}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default CalorieCalculator;
