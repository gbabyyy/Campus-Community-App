// import React, { useState } from 'react';
// import axios from 'axios';
// function RegistrationPage() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     contact_number: ''
//   });

//   const changeHandler = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     axios.post('http://13.112.86.78:8082/api/student/', formData).then(res => {
//       console.log(res, 'result')
//     }).catch(error => {
//       console.log(error, 'error')
//     })
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <input type="text" name="username" placeholder="Username" value={formData.username} onChange={changeHandler} />
//       <input type="email" name="email" placeholder="Email" value={formData.email} onChange={changeHandler} />
//       <input type="password" name="password" placeholder="Password" value={formData.password} onChange={changeHandler} />
//       <input type="number" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={changeHandler} />

//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default RegistrationPage;


import React, { useState } from 'react';
import axios from 'axios';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    contact_number: ''
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    const requestData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      contact_number: formData.contact_number
    };

    axios.post('http://13.112.86.78:8082/api/student/', requestData)
      .then(res => {
        console.log(res, 'result');
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={changeHandler} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={changeHandler} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={changeHandler} />
      <input type="number" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={changeHandler} />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationPage;
