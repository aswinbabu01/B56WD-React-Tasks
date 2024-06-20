// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      setUsers([...users, response.data]);
      setFormData({ name: '', username: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="header d-flex justify-content-center my-2">
      <h1>User Management</h1>
      </div>
      <form className=' d-flex justify-content-center my-4' onSubmit={handleSubmit}>
        <input className='mx-2' type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
        <input className='mx-2' type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" />
        <input className='mx-2' type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
        <input className='mx-2' type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" />
        <button  className="btn btn-success mx-4" type="submit">Add User</button>
      </form>
      <div className='px-5'>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.phone}
            <button  type="button" className="btn btn-danger mx-5 my-3"onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </div>
  );
};

export default App;
