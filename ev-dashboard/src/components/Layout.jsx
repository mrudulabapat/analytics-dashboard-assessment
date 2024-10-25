// src/components/Layout.js
import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';

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
          {['Dashboard', 'Bar Chart', 'Pie Chart', 'Line Diagram', 'Info'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
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
