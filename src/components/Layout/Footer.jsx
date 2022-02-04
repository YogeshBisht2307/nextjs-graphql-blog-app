import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container mx-auto px-10 mb-6">
      <div className="border-t lg:px-5 md:px-2 py-8 flex flex-wrap mx-auto items-center justify-center">
        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative sm:w-72 w-40 sm:mr-4 mr-2">
            <label htmlFor="footer-field" className="leading-7 text-sm text-gray-200">Subscribe Now!</label>
            <input 
                type="text"
                id="footer-field" 
                name="footer-field"
                className="w-full bg-slate-800 rounded border border-gray-800 mb-2 focus:ring-1
                focus:ring-indigo-700 text-base outline-none text-gray-200 py-1 px-3 
                leading-7 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="inline-flex transition duration-500 ease transform hover:-translate-y-1 
          bg-green-400 text-lg font-medium rounded-full text-white mb-2 px-6 py-1 cursor-pointer">
            Subscribe
          </button>
          
        </div>
        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
          <a className="text-gray-200 cursor-pointer">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200 cursor-pointer">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200 cursor-pointer">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200 cursor-pointer">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
      <div className="bg-slate-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-200 text-sm text-center sm:text-left">
            © 2021 Coding Kota
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-200 text-sm">
            Daily dose of Coding Stuff !</span>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
