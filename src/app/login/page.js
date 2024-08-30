"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Page() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://backend-puce-nine-19.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }

      const result = await res.json();
      console.log(result);

      // Handle successful login
      // เช่น เก็บ token ใน localStorage หรือ state
      localStorage.setItem('token', result.token);
      alert('Login successful');

      window.dispatchEvent(new Event('storage'));

      // Redirect to home page
      router.push('/');

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="card-header bg-success text-white">
            SignUp Form
          </div>
          <div className="card-body">

            <form className="row g-3" onSubmit={handleLogin}>

              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassWord(e.target.value)} required />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success"><i className="bi bi-box-arrow-right"></i> Sign In</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}