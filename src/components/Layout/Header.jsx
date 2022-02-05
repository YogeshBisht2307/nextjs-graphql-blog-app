import React, { useState } from 'react';
import { BRAND_NAME, NAVIGATION_ITEMS } from '../../constants';

import Link from 'next/link';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div>
           <nav className="container mx-auto px-2 lg:px-10 md:px-10 mb-8">
			<div className="border-b w-full inline-block border-gray-300 py-3">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							<a href="/" className="flex items-center py-4 px-2">
								<img src="/favicon.png" alt="Logo" className="h-8 w-8 lg:h-12 lg:w-12 mr-1"/>
								<h2 className="font-semibold text-gray-100 text-xl lg:text-2xl md:text-2xl">{ BRAND_NAME }</h2>
							</a>
						</div>
					
						<div className="hidden md:flex items-center space-x-1 ml-4">
							<a href="/about" className="py-4 px-2 text-gray-100 font-medium transition duration-300">About</a>
                            <a href="/services" className="py-4 px-2 text-gray-100 font-medium transition duration-300">Services</a>
							<a href="/contact" className="py-4 px-2 text-gray-100 font-medium transition duration-300">Contact Us</a>
						</div>
					</div>
				
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 font-medium text-gray-800 bg-gray-200 px-8 rounded-full transition duration-300">Join</a>
					</div>
				
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={()=>setNavOpen(!navOpen)}>
						<svg className=" w-6 h-6 text-gray-200 hover:text-gray-200"
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div className={ navOpen ? "mobile-menu lg:hidden md:hidden bg-slate-800 rounded mt-2 p-4 absolute z-30 mx-2  inset-x-0": "hidden mobile-menu"}>
				<ul className="">
					<li><a href="#services" className="block text-sm px-2 py-4 text-gray-200 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 text-gray-200 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 text-gray-200 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		</nav>
        </div>
        // <div classNameName='container mx-auto px-10 mb-8'>
        //     <div classNameName='border-b w-full inline-block border-blue-400 py-8'>
        //         <div classNameName='md:float-left block'>
        //             <Link href="/">
        //                 <span classNameName="cursor-pointer font-bold text-3xl text-white">
        //                   { BRAND_NAME }
        //                 </span>
        //             </Link>
        //         </div>
        //         <div classNameName='hidden md:float-left md:contents'>
        //             {NAVIGATION_ITEMS.map((nav, index) => (
        //                 <Link key={ index } href={`/${ nav.url }`}>
        //                     <span classNameName='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
        //                       { nav.name }
        //                     </span>
        //                 </Link>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Header;
