
// import React, { useState } from 'react';
// import './Login.css';
// import logo from '../../assets/logo.png';

// const Login = () => {
//   // Manage whether user is signing in or signing up
//   const [isSignIn, setIsSignIn] = useState(true);

//   // Form input state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     remember: false,
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignIn) {
//       console.log("🔐 Signing In with:", formData);
//       // 👉 Add your login API call here
//     } else {
//       console.log("📝 Signing Up with:", formData);
//       // 👉 Add your signup API call here
//     }
//   };

//   return (
//     <div className="login">
//       <img src={logo} className="login-logo" alt="Logo" />
//       <div className="login-form">
//         <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
//         <form onSubmit={handleSubmit}>
         
//           {!isSignIn && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             {isSignIn ? "Sign In" : "Sign Up"}
//           </button>

//           <div className="form-help">
//             <div className="remember">
//               <input
//                 type="checkbox"
//                 name="remember"
//                 checked={formData.remember}
//                 onChange={handleChange}
//               />
//               <label>Remember Me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>

//         {/* Switch between Sign In / Sign Up */}
//         <div className="form-switch">
//           {isSignIn ? (
//             <p>
//               New to Netflix?{" "}
//               <span onClick={() => setIsSignIn(false)}>Sign Up Now</span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{" "}
//               <span onClick={() => setIsSignIn(true)}>Sign In Now</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // if you're using React Router
// import './Login.css';
// import logo from '../../assets/logo.png';

// const Login = () => {
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     remember: false,
//   });

//   const [users, setUsers] = useState([]); // store registered users
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate(); // navigation hook

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignIn) {
//       // Check if user exists
//       const userExists = users.find(
//         (u) => u.email === formData.email && u.password === formData.password
//       );

//       if (userExists) {
//         setMessage("✅ Sign In Successful!");
//         navigate("/login"); // redirect to /login page
//       } else {
//         setMessage("❌ Invalid email or password!");
//       }
//     } else {
//       // Sign Up flow
//       if (!formData.name || !formData.email || !formData.password) {
//         setMessage("⚠️ Please fill all fields!");
//         return;
//       }

//       const alreadyExists = users.some((u) => u.email === formData.email);
//       if (alreadyExists) {
//         setMessage("⚠️ Email already registered. Please Sign In!");
//         return;
//       }

//       // Save user
//       setUsers([...users, { ...formData }]);
//       setMessage("🎉 Sign Up Successful! Please Sign In.");
//       setIsSignIn(true); // switch to sign-in page
//       setFormData({ name: "", email: "", password: "", remember: false }); // clear form
//     }
//   };

//   return (
//     <div className="login">
//       <img src={logo} className="login-logo" alt="Logo" />
//       <div className="login-form">
//         <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>

//         {message && <p className="message">{message}</p>}

//         <form onSubmit={handleSubmit}>
//           {!isSignIn && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             {isSignIn ? "Sign In" : "Sign Up"}
//           </button>

//           <div className="form-help">
//             <div className="remember">
//               <input
//                 type="checkbox"
//                 name="remember"
//                 checked={formData.remember}
//                 onChange={handleChange}
//               />
//               <label>Remember Me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>

//         <div className="form-switch">
//           {isSignIn ? (
//             <p>
//               New to Netflix?{" "}
//               <span onClick={() => setIsSignIn(false)}>Sign Up Now</span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{" "}
//               <span onClick={() => setIsSignIn(true)}>Sign In Now</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import logo from "../../assets/logo.png";

// const Login = () => {
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     remember: false,
//   });

//   const [users, setUsers] = useState([]); // registered users
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   // ✅ Load users from localStorage on mount
//   useEffect(() => {
//     const storedUsers = localStorage.getItem("users");
//     if (storedUsers) {
//       setUsers(JSON.parse(storedUsers));
//     }

//     // ✅ Show logout message if redirected from sign out
//     const logoutMsg = localStorage.getItem("logoutMessage");
//     if (logoutMsg) {
//       setMessage(logoutMsg);
//       localStorage.removeItem("logoutMessage"); // clear after showing once
//     }

//     // ✅ Auto-login if remembered
//     const rememberedUser = localStorage.getItem("rememberedUser");
//     if (rememberedUser) {
//       const user = JSON.parse(rememberedUser);
//       setMessage(`👋 Welcome back, ${user.name || "User"}!`);
//       navigate("/login"); // redirect to home page
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignIn) {
//       // ✅ Sign In
//       const userExists = users.find(
//         (u) => u.email === formData.email && u.password === formData.password
//       );

//       if (userExists) {
//         setMessage("✅ Sign In Successful!");

//         // Save remembered user
//         if (formData.remember) {
//           localStorage.setItem("rememberedUser", JSON.stringify(userExists));
//         }

//         navigate("/login"); // go to home
//       } else {
//         setMessage("❌ Invalid email or password!");
//       }
//     } else {
//       // ✅ Sign Up
//       if (!formData.name || !formData.email || !formData.password) {
//         setMessage("⚠️ Please fill all fields!");
//         return;
//       }

//       const alreadyExists = users.some((u) => u.email === formData.email);
//       if (alreadyExists) {
//         setMessage("⚠️ Email already registered. Please Sign In!");
//         return;
//       }

//       const newUsers = [...users, { ...formData }];
//       setUsers(newUsers);

//       // ✅ Save to localStorage so it persists on reload
//       localStorage.setItem("users", JSON.stringify(newUsers));

//       setMessage("🎉 Sign Up Successful! Please Sign In.");
//       setIsSignIn(true);

//       // Reset form
//       setFormData({ name: "", email: "", password: "", remember: false });
//     }
//   };

//   const handleNeedHelp = () => {
//     alert("Please contact Netflix support at support@netflix.com");
//   };

//   return (
//     <div className="login">
//       <img src={logo} className="login-logo" alt="Logo" />
//       <div className="login-form">
//         <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>

//         {message && <p className="message">{message}</p>}

//         <form onSubmit={handleSubmit}>
//           {!isSignIn && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             {isSignIn ? "Sign In" : "Sign Up"}
//           </button>

//           <div className="form-help">
//             <div className="remember">
//               <input
//                 type="checkbox"
//                 name="remember"
//                 checked={formData.remember}
//                 onChange={handleChange}
//               />
//               <label>Remember Me</label>
//             </div>
//             <p onClick={handleNeedHelp} className="help-link">
//               Need Help?
//             </p>
//           </div>
//         </form>

//         <div className="form-switch">
//           {isSignIn ? (
//             <p>
//               New to Netflix?{" "}
//               <span onClick={() => setIsSignIn(false)}>Sign Up Now</span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{" "}
//               <span onClick={() => setIsSignIn(true)}>Sign In Now</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  const [users, setUsers] = useState([]); // store registered users
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // ✅ Load users from localStorage + auto-login check
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

    const logoutMsg = localStorage.getItem("logoutMessage");
    if (logoutMsg) {
      setMessage(logoutMsg);
      localStorage.removeItem("logoutMessage");
    }

    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      const user = JSON.parse(rememberedUser);
      setMessage(`👋 Welcome back, ${user.name || "User"}!`);
      navigate("/login"); // go to home page
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      // ✅ Sign In (check against localStorage users)
      const userExists = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (userExists) {
        setMessage("✅ Sign In Successful!");

        if (formData.remember) {
          localStorage.setItem("rememberedUser", JSON.stringify(userExists));
        }

        navigate("/login"); // home page
      } else {
        setMessage("❌ Invalid email or password!");
      }
    } else {
      // ✅ Sign Up
      if (!formData.name || !formData.email || !formData.password) {
        setMessage("⚠️ Please fill all fields!");
        return;
      }

      const alreadyExists = users.some((u) => u.email === formData.email);
      if (alreadyExists) {
        setMessage("⚠️ Email already registered. Please Sign In!");
        return;
      }

      const newUsers = [...users, { ...formData }];
      setUsers(newUsers);

      // Save to localStorage
      localStorage.setItem("users", JSON.stringify(newUsers));

      setMessage("🎉 Sign Up Successful! Please Sign In.");
      setIsSignIn(true);

      setFormData({ name: "", email: "", password: "", remember: false });
    }
  };

  const handleNeedHelp = () => {
    toast.info("Please contact Netflix support at support@netflix.com");
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {message && <p className="message">{message}</p>}

        <form onSubmit={handleSubmit}>
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
            <p onClick={handleNeedHelp} className="help-link">
              Need Help?
            </p>
          </div>
        </form>

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
       <ToastContainer />
    </div>
  );
};

export default Login;
