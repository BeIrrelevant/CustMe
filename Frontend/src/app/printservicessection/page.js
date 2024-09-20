"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon, AccountCircle as AccountCircleIcon, Dashboard as DashboardIcon, Chat as ChatIcon, ShoppingCart as ShoppingCartIcon, Brush as BrushIcon, Print as PrintIcon, Favorite as FavoriteIcon, ExitToApp as LogoutIcon, Star as StarIcon, FiberManualRecord as FiberManualRecordIcon, ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon, Favorite, FavoriteBorder } from '@mui/icons-material'; // PhotoCamera icon

const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
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

      {isSidebarExpanded && (
        <div className="flex flex-col items-center p-2">
          <Avatar alt="Ivan Carmuz" src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60 }} />
          <Typography variant="h6" className="mt-2">Ivan Carmuz</Typography>
        </div>
      )}

      <List className="flex-grow">
        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <DashboardIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Dashboard" />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <FavoriteIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Favorites" />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <ChatIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Chat" />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <BrushIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Designer" />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <PrintIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Print Shop" />}
        </ListItem>

        <ListItem button className="py-2">
          <ListItemIcon className="text-white">
            <ShoppingCartIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="My Purchase" />}
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


const ProductCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false); 
  const images = [
    'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg',
    'https://png.pngtree.com/png-clipart/20230324/original/pngtree-modern-demo-logo-design-vector-file-png-image_9002366.png',
    'https://png.pngtree.com/png-clipart/20230324/original/pngtree-modern-demo-logo-design-vector-file-png-image_9002366.png',
    'https://png.pngtree.com/png-clipart/20230324/original/pngtree-modern-demo-logo-design-vector-file-png-image_9002366.png'
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const handleFavoriteToggle = () => {
    setIsFavorited((prevState) => !prevState); 
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs relative">
   
      <div className="relative">
        <img
          src={images[currentImageIndex]}
          alt="Logo Design"
          className="w-full h-32 object-contain rounded-lg" 
        />
 
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1 cursor-pointer" onClick={handlePrevImage}>
          <ArrowBackIosIcon fontSize="small" />
        </div>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1 cursor-pointer" onClick={handleNextImage}>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
     
        <div className="absolute top-2 right-2">
          <IconButton onClick={handleFavoriteToggle}>
            {isFavorited ? (
              <Favorite style={{ color: 'red', fontSize: '24px' }} />  // Filled heart when favorited
            ) : (
              <FavoriteBorder style={{ color: 'gray', fontSize: '24px' }} />  // Outline heart when not favorited
            )}
          </IconButton>
        </div>
      </div>

      <div className="flex justify-center space-x-1 mt-2">
        {images.map((_, index) => (
          <FiberManualRecordIcon
            key={index}
            style={{ fontSize: '8px', color: index === currentImageIndex ? '#000' : '#d3d3d3' }}
          />
        ))}
      </div>

  
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <Avatar
            src="/static/images/avatar/1.jpg"
            alt="Mel Anthony Rusiana"
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant="body2" className="text-gray-700">
             <span className="font-semibold">Mel Anthony Rusiana</span>
          </Typography>
          
        </div>

        <Typography variant="body1" className="font-semibold mt-2">
          I will design a professional minimalist modern business logo
        </Typography>

        <div className="flex items-center space-x-1 mt-2">
          <StarIcon fontSize="small" style={{ color: '#ffc107' }} />
          <Typography variant="body2" className="font-semibold">
            4.9
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            (1k+)
          </Typography>
        </div>
      </div>
    </div>
  );
};


const MainContent = () => (
  <div className="ml-48 mt-16 p-8">
    

    <div className="flex justify-between items-center mb-4">
      <Typography variant="h4">Printing Services</Typography>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {Array(4).fill(0).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>

    
    <div className="flex justify-between items-center mt-8 mb-4">
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {Array(4).fill(0).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>

    <div className="flex justify-between items-center mt-8 mb-4">
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {Array(4).fill(0).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  </div>
);


const printservices = () => (
  <div>
    <Navbar />
    <Sidebar />
    <MainContent />
  </div>
);

export default printservices;