import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:6000/user/login", {
        username,
        email,
        password,
        role,
      });
      
      // Lakukan sesuatu dengan respon dari backend
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row justify-content-center">
          <div className="auth-card">
            <h3 className="text-center">Login</h3>
            <form>
              <div>
              <input
                  type="text"
                  name="username"
                  placeholder="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div></div>
                <input
                
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                />
                <div></div>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-control"
                />
                <div></div>
                <input
                  type="role"
                  name="role"
                  placeholder="role"
                  className="form-control"
                />
                <div></div>
                <div className="d-flex justify-content-center gap-15 align-items-center mt-6">
                    <button className="button border-0 mt-1">Login</button>
                    <Link to="/register" className="button register mt-1 text-white">Register</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div>
//       <div className="login-wrapper py-5 home-wrapper-2">
//         <div className="row justify-content-center">
//           <div className="auth-card">
//             <h3 className="text-center">Login</h3>
//             <form>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   className="form-control"
//                 />
//                 <div></div>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   className="form-control"
//                 />
//                 <div></div>
//                 <input
//                   type="role"
//                   name="role"
//                   placeholder="role"
//                   className="form-control"
//                 />
//                 <div></div>
//                 <div className="d-flex justify-content-center gap-15 align-items-center mt-6">
//                     <button className="button border-0 mt-1">Login</button>
//                     <Link className="button register mt-1 text-white">Register</Link>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import Axios from "axios";

// const Login = () => {
//   const register = () => {
//     Axios.post("http://localhost:6000/user/register", {
//       username: username,
//       email: email,
//       password: password,
//       role: role,
//     }).then((response) => {
//       console.log(response);
//     }).catch(err => { 
//       if (err.response) { 
//         // client received an error response (5xx, 4xx)
//       } else if (err.request) { 
//         // client never received a response, or request never left 
//       } else { 
//         // anything else 
//       } 
//     })
//   };

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   return (
//     <div>
//       <div className="login-wrapper py-5 home-wrapper-2">
//         <div className="row justify-content-center">
//           <div className="auth-card">
//             <h3 className="text-center">Login</h3>
//             <form>
//               <div>
//                 <input
//                   type="username"
//                   name="username"
//                   placeholder="username"
//                   className="form-control"
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <div></div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   className="form-control"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div></div>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   className="form-control"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <div></div>
//                 <input
//                   type="role"
//                   name="role"
//                   placeholder="role"
//                   className="form-control"
//                   onChange={(e) => setRole(e.target.value)}
//                 />
//                 <div></div>
//                 <div className="d-flex justify-content-center gap-15 align-items-center mt-6">
//                   <button className="button border-0 mt-1">Login</button>
//                   <button
//                     className="button register mt-1 text-white"
//                     onClick={register}
//                   >
//                     Register
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // import React, { useState } from "react";
// // import Axios from "axios";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("");

// //   const handleRegister = (e) => {
// //     e.preventDefault();

// //     const userData = {
// //       username: username,
// //       email: email,
// //       password: password,
// //       role: role,
// //     };

// //     Axios.post("http://localhost:6000/user/register", userData)
// //       .then((response) => {
// //         console.log(response);
// //         // Do something after successful registration, such as redirecting to another page
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //         // Handle the error appropriately
// //       });
// //   };

// //   return (
// //     <div>
// //       <div className="login-wrapper py-5 home-wrapper-2">
// //         <div className="row justify-content-center">
// //           <div className="auth-card">
// //             <h3 className="text-center">Login</h3>
// //             <form onSubmit={handleRegister}>
// //               <div>
// //                 <input
// //                   type="username"
// //                   name="username"
// //                   placeholder="username"
// //                   className="form-control"
// //                   value={username}
// //                   onChange={(e) => setUsername(e.target.value)}
// //                 />
// //                 <div></div>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="email"
// //                   className="form-control"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //                 <div></div>
// //                 <input
// //                   type="password"
// //                   name="password"
// //                   placeholder="password"
// //                   className="form-control"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 />
// //                 <div></div>
// //                 <input
// //                   type="role"
// //                   name="role"
// //                   placeholder="role"
// //                   className="form-control"
// //                   value={role}
// //                   onChange={(e) => setRole(e.target.value)}
// //                 />
// //                 <div></div>
// //                 <div className="d-flex justify-content-center gap-15 align-items-center mt-6">
// //                   <button type="submit" className="button border-0 mt-1">
// //                     Login
// //                   </button>
// //                   <button
// //                     type="button"
// //                     className="button register mt-1 text-white"
// //                     onClick={handleRegister}
// //                   >
// //                     Register
// //                   </button>
// //                 </div>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
