"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Card, CardContent, CardActions, Divider, Box } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon, AccountCircle as AccountCircleIcon, Dashboard as DashboardIcon, Chat as ChatIcon, ShoppingCart as ShoppingCartIcon, Brush as BrushIcon, Print as PrintIcon, Favorite as FavoriteIcon, Photo, Edit as EditIcon, PushPin as PinIcon, Delete as DeleteIcon, CameraAlt as CameraIcon } from '@mui/icons-material';

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
  <AppBar position="fixed" className="bg-white text-black shadow-md" style={{ marginLeft: '48px' }}>
    <Toolbar className="flex justify-between">
      <div className="flex items-center">
        <Typography variant="h4" className="font-extrabold ml-8">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </Typography>
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

const PostInput = () => (
  <div className="bg-white shadow-sm rounded-lg p-4 mb-6 mx-auto max-w-md">
    <div className="flex items-center space-x-4">
      <Avatar src="/static/images/avatar/1.jpg" alt="User Avatar" className="h-10 w-10" />
      <div className="flex-grow bg-gray-100 p-2 rounded-full">
        <input
          type="text"
          placeholder="What's on your mind, Ivan?"
          className="bg-transparent w-full focus:outline-none text-gray-600"
        />
      </div>
    </div>
    <hr className="my-4 border-gray-300" />
    <div className="flex justify-center items-center mt-2 space-x-2">
      <IconButton aria-label="upload photo" color="primary">
        <Photo fontSize="small" className="text-green-600" />
      </IconButton>
      <Typography variant="body2" className="text-black font-semibold cursor-pointer">
        Photo
      </Typography>
    </div>
  </div>
);

const PostCard = ({ postContent, postDate, postImage }) => (
  <Card variant="outlined" className="mb-4 mx-auto" style={{ maxWidth: '500px' }}>
    <CardContent>
      <div className="flex items-center mb-2">
        <Avatar src="/static/images/avatar/1.jpg" alt="User Avatar" className="mr-3" />
        <div>
          <Typography variant="body1" className="font-semibold">Ivan Carmuz</Typography>
          <Typography variant="body2" color="textSecondary">{postDate}</Typography>
        </div>
      </div>
      <Typography variant="body2" className="mb-2">{postContent}</Typography>
      {postImage && (
        <div className="my-3">
          <img src={postImage} alt="Post Image" className="rounded-lg w-full object-cover" style={{ maxHeight: '200px' }} />
        </div>
      )}
    </CardContent>
    <Divider />
    <CardActions className="flex justify-between">
      <Button startIcon={<PinIcon />} size="small">Pin Post</Button>
      <Button startIcon={<EditIcon />} size="small">Edit Post</Button>
      <Button startIcon={<DeleteIcon />} size="small">Move to the trash</Button>
    </CardActions>
  </Card>
);

const MainContent = () => (
  <div className="ml-48 mt-16 p-8 bg-gray-50">
    <div className="relative mb-6">
      <div className="relative h-72 w-full">
        <img src="https://timelinecovers.pro/facebook-cover/download/beautiful_sunset-facebook-cover.jpg" alt="cinema background" className="object-cover w-full h-full rounded-t-lg" />
        <div className="absolute bottom-4 right-4">
          <Button variant="contained" color="primary" startIcon={<CameraIcon />}>
            Edit cover photo
          </Button>
        </div>
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
        <Typography variant="h5" className="font-bold">Ivan Carmuz</Typography>
      </div>
      <div className="ml-auto mr-8">
        <Button variant="outlined" startIcon={<EditIcon />} color="primary">
          Edit profile
        </Button>
      </div>
    </div>
    
    <PostInput />
    
    {/* Posts */}
    <div className="mt-6">
    <Typography variant="h6" className="mb-4" style={{ marginLeft: '210px' }}>Posts</Typography>


      <PostCard 
        postContent="I need a custom T-shirt design for our upcoming family reunion. Interested designers, please message me with your ideas and portfolio."
        postDate="September 15, 2024"
      />

      <PostCard 
        postContent="Seeking a creative designer to develop a vibrant and eye-catching flyer for a community event. Contact me if you have relevant experience."
        postDate="September 15, 2024"
        postImage="https://via.placeholder.com/400x200?text=Community+Outreach"
      />
    </div>
  </div>
);

const ClientProfile = () => (
  <div>
    <Navbar />
    <Sidebar />
    <MainContent />
  </div>
);

export default ClientProfile;


