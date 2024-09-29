"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Signup() {
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
                <div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg border border-gray-200">
                    <div className="text-black font-extrabold text-4xl text-center">
                        <span className="text-blue-500">C</span>
                        <span className="text-blue-500">u</span>
                        <span className="text-blue-500">s</span>
                        <span className="text-yellow-500">t</span>
                        <span className="text-blue-500">M</span>
                        <span className="text-yellow-500">e</span>
                    </div>
                    <h2 className="text-center text-lg font-semibold text-black mb-7">
                        Register Account to CustMe
                    </h2>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="flex justify-between mb-5">
                            <Button
                                variant="contained"
                                startIcon={<GoogleIcon />}
                                fullWidth
                                className="bg-white text-blue-500 mr-2 hover:bg-gray-100"
                            >
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<FacebookIcon />}
                                fullWidth
                                className="bg-white text-blue-500 ml-2 hover:bg-gray-100"
                            >
                            </Button>
                        </div>

                        <div className="text-center text-black">OR</div>

                        <div className="flex items-center justify-between my-4">
                        <div className="flex-grow border-t border-gray"></div>
                        <span className="mx-4 text-black font-semibold">OR</span>
                        <div className=" flex-grow border-t border-gray"></div>
                        </div>

                        <form className="space-y-4 mt-6">
                            <div className="flex space-x-2">
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{ style: { backgroundColor: 'white' } }}
                                />
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{ style: { backgroundColor: 'white' } }}
                                />
                            </div>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                InputProps={{ style: { backgroundColor: 'white' } }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                type="email"
                                fullWidth
                                InputProps={{ style: { backgroundColor: 'white' } }}
                            />

                            {/* Password Field with Visibility Toggle */}
                            <TextField
                                label="Password"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                fullWidth
                                InputProps={{
                                    style: { backgroundColor: 'white' },
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
                            />

                            {/* Confirm Password Field with Visibility Toggle */}
                            <TextField
                                label="Confirm Password"
                                variant="outlined"
                                type={showConfirmPassword ? 'text' : 'password'}
                                fullWidth
                                InputProps={{
                                    style: { backgroundColor: 'white' },
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
                            />

                            <Button
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
