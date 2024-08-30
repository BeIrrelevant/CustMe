import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const ServiceCard = ({ title, description, buttonText, imageUrl }) => {
  return (
    <Card className="shadow-lg w-full md:w-80">
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
        className="object-cover w-full"
      />
      <CardContent className="text-center">
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-2">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="justify-center">
        <Button
          variant="contained"
          className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Typography variant="h4" gutterBottom>
        CustMe Services
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full md:w-auto">
        <ServiceCard
          title="Design Services"
          description="Connect with freelance designers to create unique, personalized designs tailored to your needs."
          buttonText="Explore Design Services"
          imageUrl="https://s3-ap-south-1.amazonaws.com/internshala-blog/wp-content/uploads/2021/02/Careers-in-graphic-design.jpg.webp"
        />
        <ServiceCard
          title="Printing Services"
          description="Access a wide range of high-quality printing options to bring your designs to life, from digital prints to eco-friendly solutions."
          buttonText="Explore Printing Options"
          imageUrl="https://image.freepik.com/free-vector/digital-printing-concept-illustration_23-2148470662.jpg"
        />
      </div>
    </div>
  );
};

export default Services;
