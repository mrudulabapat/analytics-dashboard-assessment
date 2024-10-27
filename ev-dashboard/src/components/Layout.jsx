// src/components/Layout.js
import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const getListItemStyle = (path) => ({
    backgroundColor: location.pathname === path ? 'yellow' : 'transparent',
    borderRadius: '4px', 
    
  });

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', backgroundColor: '#181C24', color: 'white' },
        }}
      >
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard Charts
            </Typography>
        </Toolbar>
        <List>
          <ListItem button component={Link} to="/" sx={getListItemStyle('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/chart" sx={getListItemStyle('/chart')}>
            <ListItemText primary="Bar Chart" />
          </ListItem>
          <ListItem button component={Link} to="/piechart" sx={getListItemStyle('/piechart')}>
            <ListItemText primary="Pie Chart" />
          </ListItem>
          <ListItem button component={Link} to="/linechart" sx={getListItemStyle('/linechart')}>
              <ListItemText primary="Line Chart" />
          </ListItem>
          </List>
      </Drawer>

      <div style={{ flexGrow: 1, padding: '20px' }}>
        <AppBar position="static" sx={{ backgroundColor: '#181C24' }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{fontWeight:'bold'}}>
              EV Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
