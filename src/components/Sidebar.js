import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import StadiumIcon from '@mui/icons-material/Stadium';
import StoreIcon from '@mui/icons-material/Storefront';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const Sidebar = () => {
  // State to keep track of the clicked menu item
  const [selectedItem, setSelectedItem] = useState('Transfers'); // Default to "Transfers"

  return (
    <Box
      sx={{
        width: '15%', // Width of the sidebar
        background: 'linear-gradient(180deg, #2c2f3f, #1d2033)', // Gradient background
        color: '#fff',
        padding: 2,
        position: 'sticky', // Sticky position for scrolling
        top: 0,
        height: 'auto', // Set height to auto
        maxHeight: '90vh', // Set a maximum height
        overflowY: 'auto', // Allow vertical overflow if necessary
        display: 'flex',
        flexDirection: 'column', // Flex direction
      }}
    >
      {/* Display the selected item at the top */}
      <Typography variant="h6" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
        {selectedItem}
      </Typography>

      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        {menuItems.map((item) => (
          <li
            key={item.label}
            style={itemStyle}
            onClick={() => setSelectedItem(item.label)} // Update state on click
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#444')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </Box>
  );
};

// Styling for icons
const iconStyle = {
  marginBottom: '5px',
  color: '#fff',
  fontSize: '1.5rem', // Larger icons for better visibility
};

// Menu items with icons
const menuItems = [
  { icon: <HomeIcon style={iconStyle} />, label: 'Home' },
  { icon: <GroupIcon style={iconStyle} />, label: 'Squads' },
  { icon: <BuildIcon style={iconStyle} />, label: 'SBC' },
  { icon: <TransferWithinAStationIcon style={iconStyle} />, label: 'Transfers' },
  { icon: <StadiumIcon style={iconStyle} />, label: 'Stadium' },
  { icon: <StoreIcon style={iconStyle} />, label: 'Store' },
  { icon: <AccountBalanceIcon style={iconStyle} />, label: 'Club' },
  { icon: <LeaderboardIcon style={iconStyle} />, label: 'Leaderboards' },
];

// Styling for each list item
const itemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '10px 0',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.2s', // Smooth transitions
  padding: '10px', // Padding for items
  borderRadius: '8px', // Rounded corners for items
};

export default Sidebar;
