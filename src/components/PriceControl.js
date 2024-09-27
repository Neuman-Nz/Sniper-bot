import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';

const PriceControl = ({ label, price, setPrice }) => {
  const handleIncrease = () => {
    setPrice(prevPrice => Math.min(prevPrice + 100000, 200000000)); // Increase by 100,000
  };

  const handleDecrease = () => {
    setPrice(prevPrice => Math.max(prevPrice - 100000, 0)); // Decrease by 100,000, ensuring it doesn't go below 0
  };

  const handleInputChange = (event) => {
    const value = Math.min(Math.max(event.target.value, 0), 200000000); // Constrain value
    setPrice(value);
  };

  return (
    <Box sx={{ marginBottom: 2, color: '#fff' }}>
      <Typography variant="body1">{label}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
        <Button onClick={handleDecrease} variant="outlined" color="secondary">-</Button>
        <TextField
          type="number"
          value={price}
          onChange={handleInputChange}
          inputProps={{ min: 0, max: 200000000 }} // Set min and max attributes
          sx={{
            width: '100%',
            margin: '0 10px',
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.5)', // Set default border color
              },
              '&:hover fieldset': {
                borderColor: 'blue', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'blue', // Border color when focused
              },
            },
          }}
        />
        <Button onClick={handleIncrease} variant="outlined" color="secondary">+</Button>
      </Box>
    </Box>
  );
};

export default PriceControl;
