import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Adb as AdbIcon } from '@mui/icons-material';

function Layout({ children }) {
  return (
    <>
      <AppBar position="static" className="bg-white">
        <Toolbar className="flex justify-between items-center px-4">
          <div className="text-black font-extrabold text-4xl ml-8">
            <span className="text-blue-500">C</span>
            <span className="text-blue-500">u</span>
            <span className="text-blue-500">s</span>
            <span className="text-yellow-500">t</span>
            <span className="text-blue-500">M</span>
            <span className="text-yellow-500">e</span>
          </div>

          <div className="hidden md:flex flex-grow justify-end items-center">
            <Link href="#home" className="text-black font-semibold mx-4 cursor-pointer hover:text-blue-500">
              Home
            </Link>
            <Link href="#about" className="text-black font-semibold mx-4 cursor-pointer hover:text-blue-500">
              About
            </Link>
            <Link href="#services" className="text-black font-semibold mx-4 cursor-pointer hover:text-blue-500">
              Services
            </Link>
            <Link href="/Sign-in" className="bg-white rounded text-blue-500 font-semibold mx-2 py-1 px-4 hover:bg-gray-200">
              Sign In
            </Link>
            <Link href="/Sign-up" className="bg-blue-500 rounded text-white font-semibold mx-2 py-1 px-4 hover:bg-blue-600">
              Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <AdbIcon className="text-white" />
          </div>
        </Toolbar>
      </AppBar>
      <main className="min-h-screen">{children}</main> {/* Added min-h-screen */}
    </>
  );
}

export default Layout;