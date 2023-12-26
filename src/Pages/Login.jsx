import React, { useState } from 'react'
import background from '../Components/Assets/children2.jpg'
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        const headers = {
            'Content-Type' : 'application/json',
        }
        try{
            const response =  await axios.post('http://192.168.254.111:8000/api/login',{
                email,
                password
            },
            {headers}
            );

            console.log('Success', response)
        }catch(err){
            console.log(err.response)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
}

export default Login