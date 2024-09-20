"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignupPrinting() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <>
              <div className="min-h-screen flex items-center justify-center bg-blue-50">
                <div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg border border-gray-200">                    {/* CustMe Logo */}
                    <div className="text-black font-extrabold text-2xl text-center mb-3">
                        <span className="text-blue-500">C</span>
                        <span className="text-blue-500">u</span>
                        <span className="text-blue-500">s</span>
                        <span className="text-yellow-500">t</span>
                        <span className="text-blue-500">M</span>
                        <span className="text-yellow-500">e</span>
                    </div>

                    {/* Form Title */}
                    <h2 className="text-center text-lg font-semibold text-black mb-3">
                        Register Account to CustMe
                    </h2>

                    {/* Form */}
                    <form className="space-y-2">
                        {/* Business Name */}
                        <TextField
                            label="Business Name"
                            variant="outlined"
                            fullWidth
                            InputProps={{ style: { backgroundColor: 'white', fontSize: '0.9rem' } }}
                            InputLabelProps={{ style: { fontSize: '0.85rem' } }}
                        />

                        {/* Email Address */}
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            type="email"
                            fullWidth
                            InputProps={{ style: { backgroundColor: 'white', fontSize: '0.9rem' } }}
                            InputLabelProps={{ style: { fontSize: '0.85rem' } }}
                        />

                        {/* Phone Number */}
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            InputProps={{ style: { backgroundColor: 'white', fontSize: '0.9rem' } }}
                            InputLabelProps={{ style: { fontSize: '0.85rem' } }}
                        />

                        {/* Username */}
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            InputProps={{ style: { backgroundColor: 'white', fontSize: '0.9rem' } }}
                            InputLabelProps={{ style: { fontSize: '0.85rem' } }}
                        />

                        {/* Password Field with Visibility Toggle */}
                        <TextField
                            label="Password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            InputProps={{
                                style: { backgroundColor: 'white', fontSize: '0.9rem' },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleTogglePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ style: { fontSize: '0.85rem' } }}
                        />

                        {/* Confirm Password Field with Visibility Toggle */}
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            type={showConfirmPassword ? 'text' : 'password'}
                            fullWidth
                            InputProps={{
                                style: { backgroundColor: 'white', fontSize: '0.9rem' },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleToggleConfirmPasswordVisibility}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ style: { fontSize: '0.85rem' } }}
                        />

                        {/* Submit Button */}
                        <Button
                             className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            variant="contained"
                        >
                            SUBMIT
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
