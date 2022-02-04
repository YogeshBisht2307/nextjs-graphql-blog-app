import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className='text-center mt-16 mb-8 p-12 relative rounded-lg bg-slate-800'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image 
          src={author.name}
          unoptimized
          height="100px"
          width="100px"
          className='align-middle rounded-full p-0 bg-slate-800'
          src={author.photo.url}
        />
      </div>
      <h3 className='text-gray-200 my-4 text-2xl font-bold'>{ author.name }</h3>
      <p className='text-gray-200 text-lg'>{ author.bio }</p>
    </div>
  );
};

export default Author;
