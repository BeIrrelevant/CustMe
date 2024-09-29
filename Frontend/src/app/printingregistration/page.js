"use client";
import React, { useState } from "react";
import { Autocomplete, TextField, Button, Chip } from "@mui/material";


const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

const printingServicesList = [
  "Business Cards Printing",
  "Brochure/Flyer Printing",
  "Large Format Printing (Banners, Posters)",
  "T-shirt/Clothing Printing",
  "Packaging/Box Printing",
  "Digital Printing",
  "Offset Printing",
  "3D Printing",
];

const printingregistration = () => {
  const [printingServices, setPrintingServices] = useState([]);
  const [portfolioFile, setPortfolioFile] = useState(null);
  const [certificationsFile, setCertificationsFile] = useState(null);
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.0060 }); // Default location (NYC)
  const [zoom, setZoom] = useState(15); // Default zoom level

  const handlePortfolioFileChange = (e) => setPortfolioFile(e.target.files[0]);
  const handleCertificationsFileChange = (e) => setCertificationsFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Printing Services:", printingServices);
    console.log("Submitted Bio:", bio);
    if (portfolioFile) console.log("Submitted Portfolio:", portfolioFile.name);
    if (certificationsFile) console.log("Submitted Certifications:", certificationsFile.name);
    console.log("Selected Location:", location);
  };

  // Build the static map URL
  const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=${zoom}&size=600x400&maptype=roadmap&markers=color:red%7Clabel:S%7C${location.lat},${location.lng}&key=${GOOGLE_MAPS_API_KEY}`;

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("drag-over");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("drag-over");
  };

  const handleDrop = (e, setFile) => {
    e.preventDefault();
    e.stopPropagation();
    setFile(e.dataTransfer.files[0]);
    e.target.classList.remove("drag-over");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <div className="text-black font-extrabold text-2xl text-center">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Printing Services Multi-select with Chips */}
          <div className="mb-4 mt-5">
            <Autocomplete
              multiple
              options={printingServicesList}
              value={printingServices}
              onChange={(event, newValue) => setPrintingServices(newValue)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip label={option} {...getTagProps({ index })} variant="outlined" />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Printing Services" placeholder="Select Services" fullWidth />
              )}
            />
          </div>

          {/* Portfolio File Upload */}
          <div className="mb-3">
            <label htmlFor="portfolio-upload" className="block text-sm font-medium text-gray-700 mb-2">
              Portfolio:
            </label>
            <div
              className="border-dashed border-2 border-gray-400 rounded-lg p-3 text-center bg-white"
              onDrop={(e) => handleDrop(e, setPortfolioFile)}
              onDragOver={handleDragOver}
            >
              <div className="flex flex-col items-center">
                <svg
                  className="h-8 w-8 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4-4m0 0l4 4m-4-4v12m5-5h5a2 2 0 002-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M9 11h6"
                  ></path>
                </svg>
                <p className="text-gray-500 text-sm mb-2">Drag & Drop here</p>
                <p className="text-gray-500 text-sm mb-3">or</p>
                <label
                  htmlFor="portfolio-upload"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Browse files
                </label>
                <input
                  id="portfolio-upload"
                  type="file"
                  onChange={handlePortfolioFileChange}
                  className="hidden"
                />
              </div>
              {portfolioFile && (
                <div className="mt-2">
                  <p className="text-gray-700 text-sm">Selected File: {portfolioFile.name}</p>
                </div>
              )}
            </div>
          </div>

          {/* Certifications File Upload */}
          <div className="mb-3">
            <label htmlFor="certifications-upload" className="block text-sm font-medium text-gray-700 mb-2">
              Certifications/Accreditations (Optional):
            </label>
            <div
              className="border-dashed border-2 border-gray-400 rounded-lg p-3 text-center bg-white"
              onDrop={(e) => handleDrop(e, setCertificationsFile)}
              onDragOver={handleDragOver}
            >
              <div className="flex flex-col items-center">
                <svg
                  className="h-8 w-8 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4-4m0 0l4 4m-4-4v12m5-5h5a2 2 0 002-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M9 11h6"
                  ></path>
                </svg>
                <p className="text-gray-500 text-sm mb-2">Drag & Drop here</p>
                <p className="text-gray-500 text-sm mb-3">or</p>
                <label
                  htmlFor="certifications-upload"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Browse files
                </label>
                <input
                  id="certifications-upload"
                  type="file"
                  onChange={handleCertificationsFileChange}
                  className="hidden"
                />
              </div>
              {certificationsFile && (
                <div className="mt-2">
                  <p className="text-gray-700 text-sm">Selected File: {certificationsFile.name}</p>
                </div>
              )}
            </div>
          </div>

          {/* Static Map Image */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Your Shop Location (Static Map)</label>
            <img
              src={mapImageUrl}
              alt="Shop Location"
              className="w-full h-64 object-cover border-2 border-gray-300 rounded-lg"
            />
          </div>

          {/* About the Business */}
          <div className="mb-4">
            <TextField
              label="About the Business"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default printingregistration;

