import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../middleware';

const Categories = () => {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className='bg-slate-800 shadow-lg rounded-lg p-4 lg:p-8 md:p-8 mb-24 pb-12'>
      <h3 className='text-xl mb-8 font-semibold text-gray-200 border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 text-sm lg:text-md md:text-md text-gray-200'>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
