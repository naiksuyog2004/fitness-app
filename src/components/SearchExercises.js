import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {

      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${search}?limit=100`, exerciseOptions);

        if (Array.isArray(exercisesData)) {
          let searchedExercises = exercisesData.filter(
            (exercise) =>
              exercise.name.toLowerCase().includes(search.trim()) ||
              exercise.target.toLowerCase().includes(search.trim()) ||
              exercise.equipment.toLowerCase().includes(search.trim()) ||
              exercise.bodyPart.toLowerCase().includes(search.trim())
          );

          if (searchedExercises.length === 0) {
            searchedExercises = exercisesData;
          }

          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

          setSearch('');
          setExercises(searchedExercises);
        } else {
          console.error('Invalid response format:', exercisesData);
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    }
  };

  return (
    <Stack
      id="searches"
      alignItems='center'
      mt='37px'
      justifyContent='center'
      p='20px'>

      <Typography
        fontWeight='700'
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
        mb='50px' textAlign='center'>
        Awesome Exercise You <br />
        Should Know
      </Typography>

      <Box position='relative' mb='72px' >

        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />

        <Button className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>

      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>

    </Stack>
  )
}

export default SearchExercises