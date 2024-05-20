// src/ContactForm.js

import React, {useState} from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios'

const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = async (e) => {

    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:4000/api/contact', {
        name, 
        email, 
        message
      })
      setName('')
      setEmail('')
      setMessage('')
      console.log(response)
    } 
    catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <Typography variant='h4' align='center' margin={10}>We'd Love to Hear from You</Typography>
      <Box 
        sx={{
          maxWidth: 500,
          margin: 'auto',
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" align='center' component="h1" gutterBottom>
          Contact Form
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button 
            variant="contained"  
            sx={{ bgcolor: grey[900], color: 'white',borderRadius: 0, '&:hover': { bgcolor: grey[800], } }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </form>
      </Box>`
    </>
  );
};

export default ContactForm;