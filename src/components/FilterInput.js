// FilterInput.js
import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';

const FilterInput = ({ label, values }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <TextField
        select
        fullWidth
        label={label}
        defaultValue={values[0]}
        sx={{
          backgroundColor: 'white', // Set the background color to white
          width: '150px', // Adjust width here (can set specific width like '300px' if needed)
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Default border color
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.5)', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'blue', // Border color when focused
            },
          },
        }}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};

export default FilterInput;
