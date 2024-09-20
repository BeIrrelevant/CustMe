"use client";
import React, { useState } from 'react';
import { Autocomplete, TextField, Button, Chip } from '@mui/material';

const skillsList = [
  'Logo Design',
  'Illustration',
  'Typography',
  'Branding',
  '3D Design',
  'Animation',
];

const registration = () => {
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Skills:', skills);
    console.log('Submitted Bio:', bio);
    if (file) {
      console.log('Submitted File:', file.name);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg border border-gray-200">
        <div className="text-black font-extrabold text-2xl text-center">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </div>
        <h2 className="text-center text-lg font-semibold text-black mb-3">
          Professional Information
        </h2>

        <Autocomplete
          multiple
          options={skillsList}
          getOptionLabel={(option) => option}
          value={skills}
          onChange={(event, newValue) => {
            setSkills(newValue);
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Select Skills"
              placeholder="Select Skills"
              fullWidth
            />
          )}
          className="mb-3"
        />

        <div className="mb-3">
          <label htmlFor="portfolio-upload" className="block text-sm font-medium text-gray-700 mb-2">
            Portfolio:
          </label>
          <div
            className="border-dashed border-2 border-gray-400 rounded-lg p-3 text-center bg-white"
            onDrop={handleDrop}
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
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {file && (
              <div className="mt-2">
                <p className="text-gray-700 text-sm">Selected File: {file.name}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <TextField
            label="Tell Us About Yourself (Bio)"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default registration;
