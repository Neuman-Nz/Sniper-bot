import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, TextField, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import Sidebar from './Sidebar';
import FilterInput from './FilterInput';
import PriceControl from './PriceControl'; // Ensure this points to your PriceControl component

// Icons import
import FilterListIcon from '@mui/icons-material/FilterList';
import BidIcon from '@mui/icons-material/AttachMoney';
import BuyIcon from '@mui/icons-material/ShoppingCart';

// Filters definition
const filters = {
  quality: { label: 'Quality', values: ['Any', 'Gold', 'Silver', 'Bronze'], icon: <FilterListIcon /> },
  position: { label: 'Position', values: ['Any', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'], icon: <FilterListIcon /> },
  nationality: { label: 'Nationality', values: ['Any', 'England', 'Spain', 'Brazil'], icon: <FilterListIcon /> },
  rarity: { label: 'Rarity', values: ['Any', 'Common', 'Rare'], icon: <FilterListIcon /> },
  chemistryStyle: { label: 'Chemistry Style', values: ['Any', 'Basic', 'Sniper', 'Anchor'], icon: <FilterListIcon /> },
  league: { label: 'League', values: ['Any', 'Premier League', 'La Liga', 'Serie A'], icon: <FilterListIcon /> },
  playStyles: { label: 'Play Styles', values: ['Any', 'Power', 'Speed', 'Precision'], icon: <FilterListIcon /> },
  club: { label: 'Club', values: ['Any', 'Manchester United', 'Real Madrid', 'Barcelona'], icon: <FilterListIcon /> }, // New Club Filter
};

const TransferMarket = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [bidPrice, setBidPrice] = useState(0);
  const [buyNowPrice, setBuyNowPrice] = useState(0);
  const [activeTab, setActiveTab] = useState(0); // State for active tab

  const handleFilterClick = (key) => {
    setActiveFilter(activeFilter === key ? null : key); // Toggle filter
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue); // Update active tab
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#1d2033', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h5" sx={{ color: '#fff' }}>Search the Transfer Market</Typography>

        {/* Sticky Navbar */}
        <AppBar position="sticky" sx={{ backgroundColor: '#000', marginBottom: 2 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}></Typography>
            <Tabs value={activeTab} onChange={handleTabChange} textColor="inherit" sx={{ marginLeft: 'auto' }}>
              <Tab label="Players" />
              <Tab label="Managers" />
              <Tab label="Club Items" />
              <Tab label="Consumables" />
            </Tabs>
          </Toolbar>
        </AppBar>

        {/* Search Field */}
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter player's name"
          variant="outlined"
          sx={{
            width: '52.5%',
            marginBottom: 1,
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

        {/* Filters Card */}
        <Card sx={{ backgroundColor: '#000', width: '50%', margin: '0 auto', padding: 2, transform: 'translateX(-45%)' }}>
          <CardContent>
            <Grid container spacing={1}>
              {/* Filters */}
              {Object.entries(filters).map(([key, { label, values, icon }]) => (
                <Grid item xs={5} key={key}>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: '#fff', cursor: 'pointer' }} onClick={() => handleFilterClick(key)}>
                    {icon}
                    <Typography sx={{ marginLeft: 1, color: '#fff' }}>{label}</Typography>
                  </Box>
                  {activeFilter === key && <FilterInput label={label} values={values} />}
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Bid Price and Buy Now Price in one column */}
        <Grid container spacing={2} sx={{ marginTop: 2, justifyContent: 'center', transform: 'translateX(-27%)' }}>
          <Grid item xs={5}>
            <PriceControl label="Bid Price" price={bidPrice} setPrice={setBidPrice} />
            <PriceControl label="Buy Now Price" price={buyNowPrice} setPrice={setBuyNowPrice} />
          </Grid>
        </Grid>

        {/* Search and Reset Buttons */}
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="outlined" color="secondary" size="small">
                Reset
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" size="small">
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TransferMarket;
