import React from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";

import Logo from "./../../assets/imgs/logo3.png";
const Navbar = (): JSX.Element => {
    return (
        <header className="text-slate-700 bg-c1  relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
        <a href="#" className="ml-10 flex items-center whitespace-nowrap text-2xl font-black">
            <img src={Logo} alt="" className="w-[5em] " />
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
          {/* <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg> */}
          <TiThMenu fontSize={"25px"} color='black'/>
        </label>
        <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Components</a></li>
            <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Pricing</a></li>
            <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Contact</a></li>
            <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">FAQ</a></li>
          </ul>
          <hr className="mt-4 w-full lg:hidden" />
          <div className="my-4 mr-8 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-5 lg:space-y-0">
            <a href="#" title="" className="font-semibold whitespace-nowrap rounded-[50px]  px-8 py-3 text-black border-2 border-black hover:bg-black hover:text-white transition duration-300  font-medium">Signup</a>
            <a href="#" title="" className="font-semibold whitespace-nowrap rounded-[50px]  px-8 py-3 text-white bg-black  rounded-full hover:bg-[#70d560] hover:text-black hover:border-1 hover:border-black transition duration-300 font-medium ">Login</a>
          </div>
        </nav>
      </header>
    
    );
}
// #endregion

export default Navbar;