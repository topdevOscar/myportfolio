import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
   const [formData, setFormData] = useState({
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
         await axios.post('/api/login', formData);
         console.log('Login Successful');
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <h2>Login</h2>
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

export default LoginForm;