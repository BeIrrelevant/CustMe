"use client";
// Importing necessary dependencies
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon, AccountCircle as AccountCircleIcon, Dashboard as DashboardIcon, Chat as ChatIcon, ShoppingCart as ShoppingCartIcon, Brush as BrushIcon, Print as PrintIcon, MoreVert as MoreVertIcon, ExitToApp as LogoutIcon } from '@mui/icons-material';

const Sidebar = () => {
  // State to manage sidebar collapse/expand
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Toggle sidebar on burger icon click
  const handleSidebarToggle = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div
      className={`h-screen bg-blue-800 text-white flex flex-col fixed transition-all duration-300 ${isSidebarExpanded ? 'w-48' : 'w-16'
        }`}
    >
      {/* Burger Icon */}
      <div className="p-4 flex justify-between items-center">
        <IconButton onClick={handleSidebarToggle} className="text-white">
          <MenuIcon />
        </IconButton>
      </div>

      {/* User Avatar Section */}
      {isSidebarExpanded && (
        <div className="flex flex-col items-center p-4">
          <Avatar alt="Ivan Carmuz" src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60 }} />
          <Typography variant="h6" className="mt-2">Ivan Carmuz</Typography>
          <Typography variant="body2">User</Typography>
        </div>
      )}

      {/* Navigation List */}
      <List className="flex-grow">
        {/* Dashboard */}
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <DashboardIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        {/* Chat */}
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <ChatIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Chat" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        {/* Designer */}
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <BrushIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Designer" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        {/* Print Shop */}
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <PrintIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Print Shop" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        {/* My Purchase */}
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <ShoppingCartIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="My Orders" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>
      </List>
    </div>
  );
};

const Navbar = () => (
  <AppBar position="fixed" className="bg-white text-black shadow-md ml-48">
    <Toolbar className="flex justify-between">
      {/* Left Section: Menu Icon and Logo */}
      <div className="flex items-center">
        <div className="text-black font-extrabold text-4xl ml-8">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </div>
      </div>

      {/* Center Section: Search Bar */}
      <div className="relative flex-grow max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          <SearchIcon className="text-black" />
        </div>
        <InputBase
          placeholder="Search…"
          className="pl-12 pr-4 py-2 rounded-full bg-gray-200 text-black w-full"
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>

      {/* Right Section: Notifications, Mail, and User Icon */}
      <div className="flex items-center">
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton edge="end" color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

const PostCard = ({ postText }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-white p-4 mb-4 rounded-md shadow-md max-w-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Avatar alt="Mel Anthony Rusiana" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} />
          <div className="ml-3">
            <Typography variant="body1" className="font-bold">Mel Anthony Rusiana</Typography>
            <Typography variant="body2" className="text-gray-500">September 15, 2024</Typography>
          </div>
        </div>
        <IconButton onClick={handleMenuOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        </Menu>
      </div>
      <Typography variant="body1" className="mb-4">
        {postText}
      </Typography>
      <Button variant="contained" color="warning" className="w-full">Interested</Button>
    </div>
  );
};

// Updated Main Content Component (Center Aligned)
const MainContent = () => (
  <div className="ml-48 mt-16 p-8 flex justify-center">
    <div className="w-full max-w-xl">
      <Typography variant="h5" className="mb-6">Clients Post</Typography>
      
      <PostCard postText="I need a custom T-shirt design for our upcoming family reunion. Interested designers, please message me with your ideas and portfolio." />
      <PostCard postText="I need a custom logo" />
      <PostCard postText="I need a custom T-shirt design" />
    </div>
  </div>
);

// Main App Component
const App = () => (
  <div>
    <Navbar /> {/* Custom Navbar */}
    <Sidebar /> {/* Static Sidebar */}
    <MainContent /> {/* Main Content Area */}
  </div>
);

export default App;

