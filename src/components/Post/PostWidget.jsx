import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPost } from '../../middleware';

const PostWidget = ({ slug, categories }) => {
  const [ relatedPosts, setRelatedPosts ] = useState([]);

  useEffect(()=>{
    if (slug) {
      getSimilarPost(slug, categories)
        .then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-slate-800 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold text-gray-200 border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle shadow-lg rounded"
              src={post.featureImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-400 font-xs  text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={index}><span className='cursor-pointer text-gray-200 hover:text-green-300 text-sm'>{post.title}</span></Link>
          </div>
        </div>
      ))}
    </div>
  )
};

export default PostWidget;
