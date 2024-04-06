import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, Card, CardContent } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firestore';
import MentorForm from './MentorForm'; // Import MentorForm here

const Mentors = () => {
    const [showForm, setShowForm] = useState(false);
    const [mentors, setMentors] = useState([]);

    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleSubmitForm = (mentorData) => {
        setMentors([...mentors, mentorData]);
        handleCloseForm();
    };

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'mentors'));
                const mentorData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMentors(mentorData);
            } catch (error) {
                console.error('Error fetching mentors: ', error);
            }
        };

        fetchMentors();
    }, []);

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '30px', marginBottom: '20px' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Our Mentors
                </Typography>
                <Button
                    variant='contained'
                    color='error'
                    onClick={handleOpenForm}
                    sx={{ marginRight: '40px' }}
                >
                    Be a Mentor
                </Button>
            </Box>
            {showForm && <MentorForm onCloseForm={handleCloseForm} onSubmitForm={handleSubmitForm} />}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
                {mentors.map((mentor) => (
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
                ))}
            </div>
        </div>
    );
};

export default Mentors;
