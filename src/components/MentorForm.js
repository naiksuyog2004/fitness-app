import React, { useState } from 'react';
import { Stack, Typography, Button, TextField } from '@mui/material';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../Firebase/firestore';

const MentorForm = ({ onCloseForm, onSubmitForm }) => {
    const [mentorData, setMentorData] = useState({ name: '', email: '', phone: '', speciality: '', price: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMentorData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // Store mentor information in the database
            await setDoc(doc(db, "mentors", mentorData.email), {
                name: mentorData.name,
                email: mentorData.email,
                phone: mentorData.phone,
                speciality: mentorData.speciality,
                price: mentorData.price
            });
            onSubmitForm(mentorData); // Notify parent component
            setMentorData({ name: '', email: '', phone: '', speciality: '', price: '' });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="popup-form" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999, backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <form onSubmit={handleSignup} className="form-container" style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '900px' }}>
                <Typography variant="h3" fontWeight="600" color='#FF2635' sx={{ opacity: 0.7, marginBottom: '20px', textAlign: 'center' }}>Be a Mentor</Typography>

                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={mentorData.name}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: '8px' }}
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={mentorData.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: '8px' }}
                />

                <TextField
                    label="Phone Number"
                    variant="outlined"
                    name="phone"
                    value={mentorData.phone}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: '8px' }}
                />

                <TextField
                    label="Speciality"
                    variant="outlined"
                    name="speciality"
                    value={mentorData.speciality}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: '8px' }}
                />

                <TextField
                    label="Price"
                    variant="outlined"
                    name="price"
                    value={mentorData.price}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: '15px' }}
                />

                <Stack direction="row" spacing={2}>
                    <Button
                        variant='contained'
                        color='error'
                        type="submit"
                        sx={{ backgroundColor: '#ff2625', padding: '10px 20px', marginLeft: 'auto' }}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={onCloseForm}
                        variant='contained'
                        color='error'
                        sx={{ backgroundColor: '#ff2625', padding: '10px 20px' }}
                    >
                        Cancel
                    </Button>
                </Stack>
            </form>
            {error && <Typography variant="body1" mt={3} color="error">{error}</Typography>}
        </div>
    );
};

export default MentorForm;
