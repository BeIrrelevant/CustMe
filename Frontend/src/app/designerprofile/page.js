"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Card, CardContent, Collapse } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon, AccountCircle as AccountCircleIcon, Dashboard as DashboardIcon, Chat as ChatIcon, ShoppingCart as ShoppingCartIcon, Brush as BrushIcon, Print as PrintIcon, Favorite as FavoriteIcon, ExitToApp as LogoutIcon, Star as StarIcon, StarHalf as StarHalfIcon, Message as MessageIcon, ArrowBackIos, ArrowForwardIos, ExpandMore as ExpandMoreIcon, Person as PersonIcon } from '@mui/icons-material';

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
        <div className="flex flex-col items-center p-4">
          <Avatar alt="Ivan Camus" src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60 }} />
          <Typography variant="h6" className="mt-2">Ivan Camus</Typography>
          <Typography variant="body2">User</Typography>
        </div>
      )}

      <List className="flex-grow">
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <DashboardIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <FavoriteIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Favorites" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <ChatIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Chat" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <BrushIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Designer" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
            <PrintIcon />
          </ListItemIcon>
          {isSidebarExpanded && <ListItemText primary="Print Shop" primaryTypographyProps={{ fontSize: '0.875rem' }} />}
        </ListItem>
        <ListItem button className="py-2">
          <ListItemIcon className="text-white" style={{ marginRight: isSidebarExpanded ? '1px' : '0px' }}>
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

const StarRating = () => (
  <div className="flex items-center">
    <StarIcon className="text-yellow-500" />
    <StarIcon className="text-yellow-500" />
    <StarIcon className="text-yellow-500" />
    <StarIcon className="text-yellow-500" />
    <StarHalfIcon className="text-yellow-500" />
    <Typography variant="body2" className="ml-2">4.0</Typography>
  </div>
);

const PortfolioCarousel = () => {
  const images = [
    { src: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg', alt: 'Leveria' },
    { src: 'https://png.pngtree.com/png-clipart/20230324/original/pngtree-modern-demo-logo-design-vector-file-png-image_9002366.png', alt: 'Arterial Coffee' },
    { src: '/path/to/supastar.png', alt: 'Supastar' },
    { src: '/path/to/blackburgh.png', alt: 'Blackburgh' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center">
      <IconButton onClick={handlePrev}>
        <ArrowBackIos />
      </IconButton>
      <div className="w-[600px] h-[400px] bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="h-full object-contain" />
      </div>
      <IconButton onClick={handleNext}>
        <ArrowForwardIos />
      </IconButton>
    </div>
  );
};

const AboutMeCard = () => (
  <Card className="mb-6 w-full flex justify-center items-center" style={{ marginTop: '50px' }}>
    <CardContent>
      <div className="flex items-center justify-center mb-4">
        <PersonIcon className="mr-2" />
        <Typography variant="h6">About me</Typography>
      </div>

      <div className="flex items-center mb-2">
        <BrushIcon className="mr-2" />
        <Typography variant="body1" className="mt-2">
          Skills: Logo Design, Illustration, Typography, Animation
        </Typography>
      </div>

      <Typography variant="body2" className="mt-4 text-justify">
        Hello, I am a perfectionist having more than 10 years of professional experience specialized in minimalism and simplicity. Looking forward to working with you! Don't forget to SAVE my gig!
      </Typography>
    </CardContent>
  </Card>
);

const ReviewCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="mb-4 w-full">
      <CardContent>
        <div className="flex items-center mb-2">
          <Avatar alt="Kyle Dave Cabanas" src="/static/images/avatar/1.jpg" className="mr-2" />

          <div className="flex-grow">
            <Typography variant="subtitle1">Kyle Dave Cabanas</Typography>
            <Typography variant="body2" color="textSecondary">2 months ago</Typography>
          </div>

          <StarRating />
        </div>

        <Typography variant="body2" className="mt-2">
          Hello, I am a perfectionist having more than 10 years of professional experience specialized in minimalism and simplicity. Looking forward to working with you. Don't forget to SAVE my gig!!!
        </Typography>

        <Typography variant="body2" className="mt-2">
          Duration: 7 Days
        </Typography>

        <IconButton onClick={handleExpandClick} className="mt-2">
          <Avatar alt="Seller Response" src="/static/images/avatar/2.jpg" className="mr-2" />
          <Typography variant="body2">Seller Response</Typography>
          <ExpandMoreIcon className={`ml-auto ${expanded ? 'rotate-180' : ''}`} />
        </IconButton>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              Thank you for your feedback! It was a pleasure working with you. I look forward to future collaborations!
            </Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
};

const ReviewsSection = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <Typography variant="h6" className="mb-4">Reviews</Typography>
    <ReviewCard />
  </div>
);

const MainContent = () => (
  <div className="ml-48 mt-16 p-8 bg-gray-50">
    <div className="relative mb-6">
      <div className="relative h-72 w-full">
        <img src="https://timelinecovers.pro/facebook-cover/download/beautiful_sunset-facebook-cover.jpg" alt="cinema background" className="object-cover w-full h-full rounded-t-lg" />
      </div>

      <div className="absolute left-3 -bottom-14 flex items-center">
        <Avatar
          alt="Ivan Camus"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 120, height: 120, border: '3px solid white' }}
          className="shadow-lg"
        />
      </div>
    </div>

    <div className="flex items-center mb-4" style={{ marginLeft: '140px', marginTop: '-16px' }}>
      <div>
        <Typography variant="h5" className="font-bold ">Ivan Camus</Typography>
        <div className="flex items-center mt-1">
          <Typography variant="body2" className="mr-1">4.8</Typography>
          <StarRating />
        </div>
      </div>

      <div className="ml-auto mr-8">
        <Button
          variant="outlined"
          startIcon={<MessageIcon />}
          color="primary"
        >
          Message
        </Button>
      </div>
    </div>

    <div className="flex justify-between items-start mb-6">
      <div className="w-1/3 pr-4 flex justify-center">
        <AboutMeCard />
      </div>

      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <Typography variant="h6" className="mb-4">Portfolio</Typography>
        <PortfolioCarousel />
      </div>
    </div>

    <ReviewsSection />
  </div>
);

const designerprofile = () => (
  <div>
    <Navbar />
    <Sidebar />
    <MainContent />
  </div>
);

export default designerprofile;
