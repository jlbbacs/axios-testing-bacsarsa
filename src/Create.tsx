import React,{useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

function Create() {
    const [values,setValues] = useState({
        name:'',
        username:'',
        email:'',
        phone:''
    })
    const navigate = useNavigate();

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        axios.post('http://localhost:3000/users',values)
        .then(res => {
                console.log(res)
                navigate('/')
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter Name' 
                        onChange={e=> setValues({...values,name:e.target.value})}>

                        </input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='Username'>Username:</label>
                        <input type='text' name='username' className='form-control' placeholder='Enter UserName' 
                        onChange={e=> setValues({...values,username:e.target.value})}>

                        </input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter Email'
                        onChange={e=> setValues({...values,email:e.target.value})}>

                        </input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='number'>Phone:</label>
                        <input type='text' name='phone' className='form-control' placeholder='Enter Phone'
                        onChange={e=> setValues({...values,phone:e.target.value})}>

                        </input>
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>back</Link>
                </form>
        </div>
    </div>
  )
}

export default Create
