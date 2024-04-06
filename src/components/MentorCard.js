import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const MentorCard = ({ mentor }) => {
    return (
        <Card sx={{ marginBottom: '20px', width: '100%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
                <Typography variant="h5" sx={{ marginBottom: '10px' }}>{mentor.name}</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: '8px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    Email: {mentor.email}
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: '8px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    Phone: {mentor.phone}
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: '8px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    Speciality: {mentor.speciality}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ marginRight: '8px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        Price:
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#1e88e5' }}>
                        ₹ {mentor.price.toLocaleString()} INR
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default MentorCard;
