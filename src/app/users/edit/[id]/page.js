"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page({ params }) {
  const { id } = params;
  const [items, setItems] = useState([]);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://backend-puce-nine-19.vercel.app/api/users`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, username, password, id }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      
      console.log(result);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };



  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`https://backend-puce-nine-19.vercel.app/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        setFirstName(data[0].firstname);
        setLastName(data[0].lastname);
        setUserName(data[0].username);
        setPassWord(data[0].password);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUsers();
  }, [id]);

  return (
    <>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="container">
        <div class="card">
          <div class="card-header bg-success text-white">
            Edit Form ID: {id}
          </div>
          <div class="card-body">
            <form className="row g-3" onSubmit={handleEdit}>
              <div className="col-md-6">
                <label for="basic-url" className="form-label">FirstName</label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label for="basic-url" className="form-label">LastName</label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label for="basic-url" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label for="basic-url" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassWord(e.target.value)} required />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success"><i class="bi bi-box-arrow-right"></i> Edit</button>
                <Link href="/users" className="btn btn-danger">Cancel</Link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}