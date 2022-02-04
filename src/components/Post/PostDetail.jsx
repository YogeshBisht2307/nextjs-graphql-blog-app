import React from 'react';
import moment from 'moment';

const PostDetail = ( { post } ) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl text-gray-200 font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="text-gray-200 mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-gray-200 text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'bulleted-list':
        return <ul key={index} className="text-gray-200 text-md mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</ul>;

      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="shadow"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-slate-800 shadow-lg rounded-lg lg:p-8 pb-12 mb-20'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img
          src={post.featureImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img 
              alg={post.author.name}
              height="40px"
              width = "40px"
              className = "align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className='inline align-middle text-gray-200 ml-2 text-sm'>{post.author.name}</p>
          </div>
          <div className="font-sm text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className='mb-8 text-2xl text-gray-200 font-semibold'> { post.title }</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  );
};

export default PostDetail;
