// src/components/Layout.js
import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
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
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" sx={{fontWeight:'bold' }}/>
          </ListItem>
          <ListItem button component={Link} to="/chart">
            <ListItemText primary="Bar Chart" />
          </ListItem>
          <ListItem button component={Link} to="/piechart">
            <ListItemText primary="Pie Chart" />
          </ListItem>
        </List>
        <ListItem button component={Link} to="/linechart">
            <ListItemText primary="Line Chart" />
        </ListItem>
      </Drawer>

      <div style={{ flexGrow: 1, padding: '20px' }}>
        <AppBar position="static" sx={{ backgroundColor: '#181C24' }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
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
