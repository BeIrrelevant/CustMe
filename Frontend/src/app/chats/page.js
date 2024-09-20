"use client";
// Importing necessary dependencies
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Button, ListItemIcon } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon, AccountCircle as AccountCircleIcon, Dashboard as DashboardIcon, Chat as ChatIcon, ShoppingCart as ShoppingCartIcon, Brush as BrushIcon, Print as PrintIcon, Favorite as FavoriteIcon, ExitToApp as LogoutIcon, Send as SendIcon, PhotoCamera as PhotoCameraIcon } from '@mui/icons-material';

// Sidebar (Unchanged from your code)
const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className={`h-screen bg-blue-800 text-white flex flex-col fixed transition-all duration-300 ${isSidebarExpanded ? 'w-48' : 'w-16'}`}>
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

// Navbar (Unchanged from your code)
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

// Conversation List (Left Side) for the MainContent
const ConversationList = ({ conversations, selectedConversation, setSelectedConversation }) => (
  <div className="w-1/3 h-full bg-gray-100">
    <Typography variant="h6" className="p-4">Messages</Typography>
    <List className="overflow-y-auto h-5/6">
      {conversations.map((conv, index) => (
        <ListItem
          key={index}
          button
          selected={selectedConversation === index}
          onClick={() => setSelectedConversation(index)}
          className={`border-b ${selectedConversation === index ? 'bg-blue-100' : ''}`}
        >
          <ListItemAvatar>
            <Avatar alt={conv.name} src={conv.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={conv.name}
            secondary={conv.lastMessage}
            primaryTypographyProps={{ fontWeight: selectedConversation === index ? 'bold' : 'normal' }}
            secondaryTypographyProps={{ color: 'textSecondary' }}
          />
          <Typography variant="body2" color="textSecondary" className="text-right">
            {conv.time}
          </Typography>
        </ListItem>
      ))}
    </List>
  </div>
);

// Chat Area (Right Side) for the MainContent
const ChatArea = ({ conversation }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage(''); // Handle sending message logic here
    }
  };

  const handleUploadImage = (event) => {
    // Handle the image upload logic here
    console.log(event.target.files[0]);
  };

  return (
    <div className="flex-grow h-full p-4">
      <Paper elevation={3} className="p-4 h-full flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center mb-4 border-b pb-2">
          <Avatar alt={conversation.name} src={conversation.avatar} />
          <div className="ml-4">
            <Typography variant="h6">{conversation.name}</Typography>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto mb-4">
          <List>
            {conversation.messages.map((msg, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={msg.sender} src={msg.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={msg.sender}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">{msg.text}</Typography>
                      <br />
                      <Typography component="span" variant="body2" color="textSecondary">{msg.time}</Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>

        {/* Input Area */}
        <div className="flex items-center">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Send message..."
          />

          {/* Upload Image Icon */}
          <IconButton color="primary" component="label">
            <input hidden accept="image/*" type="file" onChange={handleUploadImage} />
            <PhotoCameraIcon />
          </IconButton>

          {/* Send Icon */}
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};

// Main Content Component (with Conversation List and Chat Area)
const MainContent = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);

  // Sample conversations and messages
  const conversations = [
    {
      name: 'Charles Cahayagan',
      avatar: '/static/images/avatar/2.jpg',
      lastMessage: 'Hi, I want to make your design',
      time: '10:36 PM',
      messages: [
        { sender: 'Charles Cahayagan', text: 'Hi, I want to make your design', time: '10:36 PM', avatar: '/static/images/avatar/2.jpg' },
      ],
    },
    {
      name: 'Ivan Carmuz',
      avatar: '/static/images/avatar/1.jpg',
      lastMessage: 'I’m looking for something with...',
      time: '4:37 PM',
      messages: [
        { sender: 'Ivan Carmuz', text: 'I’m looking for something with...', time: '4:37 PM', avatar: '/static/images/avatar/1.jpg' },
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Left Side: Conversation List */}
      <ConversationList
        conversations={conversations}
        selectedConversation={selectedConversation}
        setSelectedConversation={setSelectedConversation}
      />

      {/* Right Side: Chat Area */}
      <ChatArea conversation={conversations[selectedConversation]} />
    </div>
  );
};

// Main App Component
const App = () => (
  <div className="h-screen">
    <Navbar />
    <Sidebar />
    <div className="ml-48 mt-16 h-full flex-grow p-8 flex flex-col"> {/* Main content container */}
      <MainContent /> {/* The updated Conversation List and Chat Area */}
    </div>
  </div>
);

export default App;
