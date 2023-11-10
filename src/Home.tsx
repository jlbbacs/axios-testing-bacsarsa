import React, { useEffect, useState } from 'react';
import '../src/Home.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handlDelete = (id:number) => {
    const confirm = window.confirm('are you sure?');
      if(confirm){
        axios.delete('http://localhost:3000/users/' + id)
          .then(res => {
            location.reload();
          
          }).catch(err => console.log(err));
      }
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>LIST OF USERS</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
            <Link to="/create" className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/read/${d.id}`} className='btn btn-info me-2'>Read</Link>
                  <Link to={`/update/${d.id}`}  className='btn btn-sm btn-primary me-2'>Edit</Link> 
                  <button className='btn btn-sm btn-danger'  onClick={() => handlDelete(d.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
 
}

export default Home;
