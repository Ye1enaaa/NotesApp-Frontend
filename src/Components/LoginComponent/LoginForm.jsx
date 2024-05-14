import axios from 'axios'
import React, {useState} from 'react'
import baseUrl from '../../endpoint';
import dotenv from 'react-dotenv';

function LoginForm() {
  
const [credentials, setCredentials] = useState({
    email: "",
    password: ""
});

const handleChange = (e) => {
    const value = e.target.value;
    setCredentials({
        ...credentials,
        [e.target.name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const userCredentials = {
        email: credentials.email,
        password: credentials.password
    };
    axios.post(`${dotenv.API_URL}/auth/jwt/create/`,userCredentials).then((response)=>{
        const token = response.data.access
        document.cookie = `token=${token}; path=/; max-age=3600;`;
        console.log(response.status, response.data.access)
    }).catch((error)=>{
        if (error.response && error.response.status === 401) {
            window.alert('Wrong Credentials');
        } else {
            console.error('An error occurred:', error);
        }
    })
}
return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
          <p className="mb-4">Please login to your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id='email'
                name='email'
                value={credentials.email}
                onChange={handleChange}
                placeholder="Email address"
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                id='password'
                name='password'
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="mt-4">
            <button
              className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded w-full mb-2"
            >
              Login with Google
            </button>
            <button
              className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded w-full"
            >
              Login with Facebook
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Don't have an account? <a href="#" className="text-orange-500">Sign up</a>
          </p>
        </div>
  )
}

export default LoginForm