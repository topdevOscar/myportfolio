import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
   });

   const handleInputChange = event => {
      setFormData({
         ...formData,
         [event.target.name]: event.target.value
      });
   };

   const handleSubmit = async event => {
      event.preventDefault();
      try {
         await axios.post('/api/signup', formData);
         console.log('Signup Successful');
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <h2>Signup</h2>
         <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
         </div>
         <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
         </div>
         <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}

export default SignupForm;