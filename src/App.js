// import router from "./routes";
// import { AuthProvider } from "./contexts/authContext";
// import { RouterProvider, useRoutes } from "react-router-dom";

// function App() {
//   return (
//     <AuthProvider>
//       {/* <Header /> */}
//       <div className="w-full h-screen flex flex-col">
//         <RouterProvider router={router} />
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;




import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Mentors from './components/Mentors';
import CalorieCalculator from './components/CalorieCalculator';
import Plans from './components/Plans';
import Shops from './components/Shops';
import Beginner from './components/Beginner';
import Intermediate from './components/Intermediate';
import Advance from './components/Advance';

const App = () => {
  const location = useLocation();

  // Check if the current route is "/" or "/home"
  const shouldDisplayNavbarAndFooter = location.pathname === '/' || location.pathname === '/home';

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/shop" element={<Shops />} />

        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advance" element={<Advance />} />

        {/* <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Box>
  );
};

export default App;
