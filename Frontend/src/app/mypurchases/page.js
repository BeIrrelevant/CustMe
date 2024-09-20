"use client";
import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon, AccountCircle as AccountCircleIcon, Dashboard as DashboardIcon, Chat as ChatIcon, ShoppingCart as ShoppingCartIcon, Brush as BrushIcon, Print as PrintIcon, Favorite as FavoriteIcon, ExitToApp as LogoutIcon } from '@mui/icons-material';

const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className={`h-screen bg-blue-800 text-white flex flex-col fixed transition-all duration-300 ${isSidebarExpanded ? 'w-48' : 'w-16'}`}>
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
        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <DashboardIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <FavoriteIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Favorites" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <ChatIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Chat" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <BrushIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Designer" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <PrintIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Print Shop" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <ShoppingCartIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="My Purchase" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>
      </List>
    </div>
  );
};

const Navbar = () => (
  <AppBar position="fixed" className="bg-white text-black shadow-md ml-48">
    <Toolbar className="flex justify-between">
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

const purchases = [
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png", 
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Ready for pickup",
  },
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png", 
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Processing",
  },
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png", 
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Picked Up",
  },
];


const MainContent = () => (
  <div className="ml-48 mt-16 p-8">
    <Typography variant="h5" gutterBottom>
      My Purchases
    </Typography>
    <TableContainer component={Paper}>
      <Table aria-label="purchases table">
        <TableHead>
          <TableRow>
            <TableCell>Items</TableCell>
            <TableCell>Prices</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchases.map((purchase, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center">
                  <img
                    src={purchase.image}
                    alt={purchase.item}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <Typography>{purchase.item}</Typography>
                </div>
              </TableCell>
              <TableCell>{purchase.price}</TableCell>
              <TableCell>{purchase.quantity}</TableCell>
              <TableCell>{purchase.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);


const chats = () => (
  <div>
    <Navbar />
    <Sidebar />
    <MainContent />
  </div>
);

export default chats;
