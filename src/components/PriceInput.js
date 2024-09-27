// PriceInput.js
import React from 'react';
import { Grid, TextField } from '@mui/material';

const PriceInput = ({ label }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <TextField fullWidth label={label} type="number" />
    </Grid>
  );
};

export default PriceInput;
