import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import PrintIcon from '@mui/icons-material/Print';

const Join = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          padding: "2rem",
          width: "80%",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Join our community
        </Typography>

        <div className="flex justify-around mt-8">
          <Card
            className="flex flex-col items-center p-4 hover:bg-blue-50 cursor-pointer mr-4"
            sx={{
              border: '1px solid #e0e0e0', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <PaletteIcon style={{ fontSize: 50, color: '#2196F3' }} />
            <CardContent>
              <Typography variant="h6" component="div" className="text-center">
                Showcase your skills and attract clients for your design projects.
              </Typography>
              <Typography variant="body2" className="text-center mt-4 font-bold">
                I AM DESIGNER
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="flex flex-col items-center p-4 hover:bg-blue-50 cursor-pointer ml-4"
            sx={{
              border: '1px solid #e0e0e0', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <PrintIcon style={{ fontSize: 50, color: '#2196F3' }} />
            <CardContent>
              <Typography variant="h6" component="div" className="text-center">
                Offer your printing services to a wide audience and grow your business.
              </Typography>
              <Typography variant="body2" className="text-center mt-4 font-bold">
                I AM PRINTING PROVIDER
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Box>
    </div>
  );
};

export default Join;

