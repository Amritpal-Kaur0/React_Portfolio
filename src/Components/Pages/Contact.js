import React, { useRef } from 'react';
import Footer from '../footer';
// import { validateName, validateEmail, isFormValid } from './utils/formvalidation'
import emailjs from '@emailjs/browser';



const ContactForm=()=>{
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8hkgwng', 'template_26ypf2g',
       form.current, 
       'zH300VtrXF4lf2C5g')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
    <div className="box  p-20 max-w-xl mx-auto">
      <form ref={form} onSubmit={sendEmail} className="bg-yellow-100 shadow-md  shadow-black rounded px-6 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input required
            type="text"
            name="user_name"
            id="name"
            placeholder="Enter Your FullName"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input required
            type="email"
            name="user_email"
            id="email"
            placeholder="Example@example.com"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea required
            name="message"
            id="message"
            placeholder="Write your message here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Send"
          >
            Submit
          </button>
        </div>
      </form>

    </div>
    <Footer/>
    </div> 
  );
};

export default ContactForm;
