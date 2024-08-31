import Link from 'next/link';
import React from 'react';

function Home() {
    
  return (
    <div className="min-h-screen bg-white-200">
    <div className="bg-white-100 p-4 flex justify-between items-center">       
        <div className="text-black font-extrabold text-4xl  ml-8">
            <span className="text-blue-500">C</span>
            <span className="text-blue-500">u</span>
            <span className="text-blue-500">s</span>
            <span className="text-yellow-500">t</span>
            <span className="text-blue-500">M</span>
            <span className="text-yellow-500">e</span>
        </div>
            <div className="flex justify-end items-center ">
                    <div className="text-black font-semibold mr-10">Home</div>
                    <div className="text-black font-semibold ">About</div>
                    <Link href="/Services" passHref>
                    <div className="text-black font-semibold ml-10 mr-10 ">Services</div>
                    </Link>
                    <Link href="/Sign-in" passHref>
                    <button className="bg-blue-500 rounded text-white ml-3 font-semibold px-5 py-2">Sign In</button>
                    </Link>
                    <Link href="/Sign-up" passHref>
                    <button className="bg-yellow-500 rounded text-white ml-3 font-semibold px-5 py-2">Sign Up</button>
                    </Link>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-16 lg:mt-20 lg:space-x-40">
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-black font-extrabold text-5xl lg:text-6xl">Personalize your world with</h1>
          <h1 className="text-black font-extrabold text-5xl lg:text-6xl mt-2">CustMe</h1>
          <p className="text-black font-normal mt-4 text-xl">Connect with Designers and Printing providers.</p>
          <div className="flex space-x-6 mt-7">
          <Link href="/Sign-up" passHref>
            <div className="bg-yellow-500 rounded text-black font-semibold px-4 py-2">Get Started</div> </Link>
            <div className="bg-white rounded text-black font-semibold px-4 py-2 border border-gray-300">Learn More</div>
          </div>
        </div>

        <div className="flex justify-center items-center w-100 h-80 ml-8">
        <img src="https://www.printxpand.com/blog/wp-content/uploads/2021/04/top_10_inspiring_examples_of_brands_offering_product_customization-f.png" alt="Your Image" className="w-full h-auto max-w-full max-h-full" />
        </div>
        
    </div>
  </div>
  );
}

export default Home;