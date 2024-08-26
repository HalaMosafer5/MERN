import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validation logic
    switch (name) {
      case 'firstName':
        setErrors({
          ...errors,
          firstName: value.length < 2 ? 'First Name must be at least 2 characters' : ''
        });
        break;
      case 'lastName':
        setErrors({
          ...errors,
          lastName: value.length < 2 ? 'Last Name must be at least 2 characters' : ''
        });
        break;
      case 'email':
        setErrors({
          ...errors,
          email: value.length < 5 ? 'Email must be at least 5 characters' : ''
        });
        break;
      case 'password':
        setErrors({
          ...errors,
          password: value.length < 8 ? 'Password must be at least 8 characters' : ''
        });
        break;
      case 'confirmPassword':
        setErrors({
          ...errors,
          confirmPassword: value !== formData.password ? 'Passwords must match' : ''
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formData.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {formData.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formData.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formData.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
      </form>
      <div>
        <h2>Your Form Data</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
      </div>
    </div>
  );
}

export default App;