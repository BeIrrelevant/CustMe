import React from "react";
// Import Button and Icon components (assuming you are using Material-UI)
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Signin() {
<<<<<<< HEAD
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
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
=======
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-black font-extrabold text-4xl text-center">
            <span className="text-blue-500">C</span>
            <span className="text-blue-500">u</span>
            <span className="text-blue-500">s</span>
            <span className="text-yellow-500">t</span>
            <span className="text-blue-500">M</span>
            <span className="text-yellow-500">e</span>
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
>>>>>>> a63d821290022b64acaf0a908d3c1edc2c2a1173

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
            <div className="flex items-center justify-between my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-black font-semibold">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="mt-10">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-blue-600 hover:text-blue-500"
                        role="link"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
