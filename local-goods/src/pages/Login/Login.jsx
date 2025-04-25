import React, { useState } from 'react';
import './Login.css';
import { registerCustomer } from '../../service/authService';
import { loginCustomer } from '../../service/authService';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate(); 
  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signState === "Sign Up") {
      const payload = {
        name,
        phoneNumber: phone,
        email,
        password
      };

      try {
        const result = await registerCustomer(payload);
        console.log("Registration successful:", result);
        alert("Registration successful!");
        setSignState("Sign In");
      } catch (error) {
        console.error("Registration error:", error);
        alert("Registration failed!");
      }
    } else {
      // Optional: Add Sign In logic here
      const loginPayload = {
        email,
        password
      };
      try {
        const result = await loginCustomer(loginPayload);
        console.log("Login successful:", result);

        localStorage.setItem('token', result.token);
        navigate('/home');
    } catch (error) {
        console.error("Login error:", error);
        alert("Login failed! Invalid email or password.");
    }
    }
  };

  return (
    <div className='login'>
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>New to Account? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>) : (
            <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
