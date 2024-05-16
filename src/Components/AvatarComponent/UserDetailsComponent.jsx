import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getCookie from '../../Services/GetCookie';
import dotenv from 'react-dotenv';

function UserDetailsComponent() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const token = getCookie('token')
        const fetchUserData = async() => {
            try{
                axios.get(`${dotenv.API_URL}/auth/users/me/`, 
                    {
                        headers:{
                            'Authorization': `Bearer ${token}`
                        }
                    }).then((response) => {
                        const data = response.data
                        setUser(data)
                        console.log(response.data)
                    })
            }catch(error){
                console.log(error)
            }};
        fetchUserData();
        }, []);

  return (
    <div>
        <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{user.name}</div>
            <div class="font-medium truncate">{user.email}</div>
            </div>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            </ul>
            <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
        </div>
    </div>
  )
}

export default UserDetailsComponent