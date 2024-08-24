import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Signup() {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center bg-white">
                <div className="bg-gray-95 p-8 rounded-lg shadow-lg max-w-md w-full">
                    <div className="text-black font-extrabold text-4xl text-center">
                        <span className="text-blue-500">C</span>
                        <span className="text-blue-500">u</span>
                        <span className="text-blue-500">s</span>
                        <span className="text-yellow-500">t</span>
                        <span className="text-blue-500">M</span>
                        <span className="text-yellow-500">e</span>
                    </div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Register Account to CustMe
                    </h2>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="flex justify-between mb-4">
                            <Button
                                variant="contained"
                                startIcon={<GoogleIcon />}
                                fullWidth
                                className="bg-white text-blue-500 mr-2 hover:bg-gray-100"
                            >
                                Sign up with Google
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<FacebookIcon />}
                                fullWidth
                                className="bg-white text-blue-500 ml-2 hover:bg-gray-100"
                            >
                                Sign up with Facebook
                            </Button>
                        </div>

                        <div className="text-center text-white mb-4">OR</div>

                        <form className="space-y-4">
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
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                InputProps={{ style: { backgroundColor: 'white' } }}
                            />
                            <TextField
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                InputProps={{ style: { backgroundColor: 'white' } }}
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

