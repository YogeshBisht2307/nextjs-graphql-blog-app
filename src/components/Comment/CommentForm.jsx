
import React, { useRef, useState , useEffect } from 'react';
import { submitComment } from '../../middleware';

const CommentForm = ( { slug } ) => {
  const [error, seterror] = useState(false);
  const [localStorage, setlocalStorage] = useState(null);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false); 
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(()=> {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email');
  })

  const handleCommentSubmission = () => {
    seterror(false);

    const { value: comment } = commentEl.current;
    const { value: email } = emailEl.current;
    const { value: name } = nameEl.current;
    const { checked: storeData } = storeDataEl.current;

    if(!comment || !email || !name){
      seterror(true);
      return;
    }

    const commentObj = { name, email, comment, slug }

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    }else{
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
    .then((res) => {
      setshowSuccessMessage(true);
      setTimeout(()=> {
        setshowSuccessMessage(false);
      }, 4000);
    })
  }

  return (
    <div className='bg-slate-800 shdow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl text-gray-200 mb-8 font-semibold border-b pb-4'>
        Leave a Reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
          placeholder='Comment'
          name="comment"
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input 
          type="text" ref={nameEl}
          className='p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
          placeholder='Name'
          name="name"
        />
        <input 
            type="text" ref={emailEl}
            className='p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
            placeholder='Email'
            name="email"
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input 
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className='text-gray-200 cursor-pointer ml-2 text-sm' htmlFor="storeData">Save my e-mail for next time I comment.</label>
        </div>
      </div>
      { error && <p className='text-sm text-red-400'>All fields are required.</p>}
      <div className='mt-8 '>
        <button 
          type="button"
          onClick={handleCommentSubmission}
          className="transition dureation-500 ease bg-green-400 inline-block text-md rounded-full text-gray-200 px-8 py-2 cursor-pointer"
          >
        Post Comment
        </button>
       { showSuccessMessage && <span className='text-l float-right font-semi-bold mt-3 text-green-300'>Comment Submitted for review.</span>}
      </div>

        
    </div>
  )
};

export default CommentForm;
