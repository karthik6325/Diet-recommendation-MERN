import './form.css';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error('Error sending message!');
    e.target.reset();
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' />
        <label>Email</label>
        <input type='text' name='email' />
        <label>Message</label>
        <textarea rows='6' name='message' placeholder='Type your message here' />
        <button type='submit' className='btn'>
          Submit
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default Form;