import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Box className="text-center">
        <Typography variant="h2" component="h1" className="mb-4 text-primary-600">
          Welcome to AIOT Platform
        </Typography>
        <Typography variant="h5" component="p" className="mb-8 text-gray-600">
          Artificial Intelligence Internet of Things
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          className="bg-primary-500 hover:bg-primary-600"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
