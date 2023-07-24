// import React, { useState } from 'react';
// import Footer from './footer';
// import { validateName, validateEmail, isFormValid } from './utils/formvalidation';



// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//   name: '',
//     email: '',
//     message: '',
//   });
//   const
//    [errors, setErrors] = useState({
//     name: false,
//     email: false,
//   });
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log(formData);
//         // Validate the form before submitting
//         const isValid = isFormValid(formData);

//         if (isValid) {
//           // Form submission logic here
//           console.log(formData);
//           // Reset the form fields
//           setFormData({
//             name: '',
//             email: '',
//             message: '',
//           });
//         } else {
//           // Set the errors state to indicate the invalid fields
//           setErrors({
//             name: !validateName(formData.name),
//             email: !validateEmail(formData.email),
//           });
//         }
//       };

// // export default function Contact() {
// return (
//     // <div id="contact" className='bg-green-200 m-3 text-3xl w-full h-screen '>
//     //   <h2 >Hi, I am Contact</h2>
//     // </div>
    
//     // <div className="container mx-auto p-4">
//     // <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
   
//     <div className=" box max-w-md mx-auto">
//       <form onSubmit={handleSubmit} className="bg-yellow-100 shadow-md  shadow-black rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder=" Enter Your FullName"
//             value={formData.name}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Example@example.com"
//             value={formData.email}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Write your message here"
//             value={formData.message}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             rows="4"
//           />
//         </div>
//         <div className="flex items-center justify-center">
//           <button
//             type="submit"
//             className=" bg-amber-400 hover:bg-amber-500 btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//     // </div>
    
    
//   );
// }
// // };

// export default function Contact() {
//   return (
//     <div className="container pb-20  p-4">
//       <h1 className="text-2xl flex justify-center font-bold mb-10">Contact Us</h1>
//       <ContactForm />
//       <Footer/>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Footer from './footer';
import { validateName, validateEmail, isFormValid } from './utils/formvalidation'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    const isValid = isFormValid(formData);

    if (isValid) {
      // Form submission logic here
      console.log(formData);
      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      // Set the errors state to indicate the invalid fields
      setErrors({
        name: !validateName(formData.name),
        email: !validateEmail(formData.email),
      });
    }
  };

  return (
    <div>
    <div className="box  p-20 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-yellow-100 shadow-md  shadow-black rounded px-6 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your FullName"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic mt-1">Name is required.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Example@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1">Invalid email address.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
