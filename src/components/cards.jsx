import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Cards = () => {

  const navigate  = useNavigate()

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/jobs');
        setJobs(response.data)
      } 
      catch (error) {
        console.log("Error while fetching jobs Data:", error)
      }
    }
    fetchData();
  }, [])

  

  return (
    <Box sx={{ flexGrow: 1, padding: 3, paddingBottom: 10, boxShadow: 3, margin: 5 }}>
      <Typography variant='h4' align='center' margin={4}>Featured Jobs</Typography>
      <Grid container spacing={2} justifyContent="center">
      {jobs && jobs.length > 0 ? (
        jobs.slice(0, 3).map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={card.image}
                alt={card.title}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = 'https://via.placeholder.com/250'; // Fallback image
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
        
      ) : (
        <Typography variant="h6" color="text.secondary" align="center">
          No jobs available
        </Typography>
      )}
        </Grid>
        <Box display="flex" justifyContent="center" mt={4}>
          <Button onClick={() => navigate('/jobs')} variant="contained" sx={{ bgcolor: grey[900], color: 'white',borderRadius: 0, '&:hover': { bgcolor: grey[800], } }}>
            Show More
          </Button>
        </Box>
    </Box>
  );
};

export default Cards;
