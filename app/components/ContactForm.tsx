'use client';
import { useState, useRef } from "react";

import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
    });
    
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value});
    };
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs.send(
        'service_1ynckb6',
        'template_kymmgkf',
        {
          from_name: form.name,
          to_name: 'Mason',
          from_email: form.email,
          to_email: 'lookluwei@gmail.com',
          message: form.message
        },
        'hN-sVWHphtzq2pUTn',
      )
      .then(() => {
        setLoading(false);
        alert('Thank you.I will get back to you as soon as possible');
  
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);
        console.error(error);
        alert('Something went wrong');
      })
    };
  return (  
    <form
      ref={formRef} 
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-white">Please Contact Me </h2>
      <div className="mb-3">
        <input
          type='text'
          value={form.name} 
          onChange={handleChange}
          placeholder='Your name'
          name='name'
          className='w-full px-5 py-4 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
        />
      </div>

      <div className="mb-3">
        <input
          type='email'
          placeholder='Email'
          value={form.email}
          onChange={handleChange}
          name='email'
          className='w-full px-5 py-4 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
        />
      </div>

      <div className="mb-3">
        <input
          placeholder='Your message'
          name='message'
          value={form.message}
          onChange={handleChange}
          className='w-full px-5 py-4 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
        />
      </div>
      <button 
        type='submit'
        className="px-5 py-4 text-sm font-bold text-white transition-all 
        duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded-lg"
      >
        {loading ? 'Sending' : 'Send'}
      </button>
    </form>
  );
}
 
export default ContactForm;