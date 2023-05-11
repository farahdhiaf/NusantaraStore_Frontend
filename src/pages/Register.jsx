import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:6000/user/register', {
      username,
      email,
      password,
      role
    }, { timeout: 5000 }) // Waktu timeout dalam milidetik (misalnya, 5 detik)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row justify-content-center">
          <div className="auth-card">
            <h3 className="text-center">Register</h3>
            <form onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div></div>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div></div>
                <input
                  type="text"
                  name="role"
                  placeholder="role"
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <div></div>
                <div className="d-flex justify-content-center gap-15 align-items-center mt-6">
                  <Link to="/login" className="button border-0 mt-1">
                    Login
                  </Link>
                  <button className="button register mt-1 text-white" onClick={handleSubmit}>
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
};
export default Register;
