import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from '../store/BookSlice';

const Addform = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);

  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(
      insertBook({
        title: titleRef.current.value,
        price: priceRef.current.value,
        description: descRef.current.value,
      })
    );
    titleRef.current.value = null;
    priceRef.current.value = null;
    descRef.current.value = null;
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={formSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              className='form-control'
              ref={titleRef}
              id='title'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              className='form-control'
              ref={priceRef}
              id='price'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='description'
              rows='3'
              required
              ref={descRef}
            ></textarea>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={!loggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
