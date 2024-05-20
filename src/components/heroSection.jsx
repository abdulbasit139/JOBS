import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { grey, blue } from '@mui/material/colors';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />
      <Container
        sx={{
          zIndex: 1,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Discover Your Next Tech Job
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Find opportunities in React, MERN Stack, Angular, and more.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: blue[500],
            color: 'white',
            '&:hover': {
              bgcolor: blue[700],
            },

          }}
          onClick={() => navigate('/jobs')}
        >
          Browse Jobs
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
