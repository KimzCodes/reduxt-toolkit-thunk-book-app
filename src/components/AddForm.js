import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from '../store/bookSlice';

const Addform = () => {
  const [input, setInput] = useState({ title: '', price: '', description: '' });
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { book: selectedBook } = useSelector((state) => state.books);

  useEffect(() => {
    setInput((prev) => ({ ...prev, ...selectedBook }));
  }, [selectedBook]);

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: input.title,
      price: input.price,
      description: input.description,
    };
    dispatch(insertBook(data));
    setInput((prev) => ({ ...prev, title: '', price: '', description: '' }));
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title'
              required
              value={input.title}
              name='title'
              onChange={inputHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              className='form-control'
              id='price'
              required
              value={input.price}
              name='price'
              onChange={inputHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              value={input.description}
              name='description'
              onChange={inputHandler}
            ></textarea>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
