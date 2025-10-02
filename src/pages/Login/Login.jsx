// import React from 'react'
// import './Login.css';
// import logo from '../../assets/logo.png'

// const Login = () => {
//   return (
//     <div className='login'>
//       <img src={logo} className='login-logo' alt="" />
//       <div className="login-form">

//       <h1>Sign In</h1>
//       <form >
//         <input type="text"  placeholder='Your name' required/>
//         <input type="email" placeholder='Your email' required />
//         <input type="password" placeholder='Password' required />
//         <button>Sign Up</button>
//         <div className='form-help'>
//           <div className='remember'>
//             <input type="checkbox"  />
//             <label htmlFor="">Remember Me</label>
//           </div>
//           <p>Need Help?</p>
//         </div>
//       </form>
// <div className="form-switch">
//   <p>New to Netflix ? <span>Sign Up Now</span></p>
//   <p> Already Have  Account  ? <span>Sign In Now</span></p>
// </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  // Manage whether user is signing in or signing up
  const [isSignIn, setIsSignIn] = useState(true);

  // Form input state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      console.log("🔐 Signing In with:", formData);
      // 👉 Add your login API call here
    } else {
      console.log("📝 Signing Up with:", formData);
      // 👉 Add your signup API call here
    }
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          {/* Show Name input only in Sign Up */}
          {!isSignIn && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <div className="form-help">
            <div className="remember">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        {/* Switch between Sign In / Sign Up */}
        <div className="form-switch">
          {isSignIn ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setIsSignIn(false)}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsSignIn(true)}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
