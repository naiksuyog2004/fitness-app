import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Footer from './Footer';
import Login from './Login';
import { Box } from '@mui/material';
import { auth } from '../Firebase/setup';
import { onAuthStateChanged } from 'firebase/auth';

const Main = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => setUser(u));
        return () => unsub();
    }, []);

    return (
        <Box>
            {/* <Navbar /> */}

            {user ? (
                <>
                    <Home />
                    <Footer />
                </>
            ) : (
                <Login />
            )}
        </Box>
    );
};

export default Main;
