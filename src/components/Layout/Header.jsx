import React, { useContext } from 'react';

import Link from 'next/link';

const navigations = [
  { name: 'Contact', url: 'contact'},
  { name: 'Category', url: ''},
  { name: 'About', url: 'about' },
]
const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl text-white">
              Coding Kota
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {navigations.map((nav) => (
            <Link key={nav.url} href={`/${nav.url}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {nav.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
