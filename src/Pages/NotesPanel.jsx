import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NavBar from '../Components/NotesComponent/NavBar';
import dotenv from 'react-dotenv';
import getCookie from '../Services/GetCookie';

const NotesPanel = () => {
  const [notes, setNotes] = useState([])

  useEffect(() =>{
    const token = getCookie('token')
    const fetchData = async() => {
      try{
        axios.get(`${dotenv.API_URL}/post/my-posts`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((response) => {
          console.log(response.data)
          const data = response.data
          setNotes(data);
        });
      }
      catch(error){
        console.log(error)
      }
    };
    fetchData();
  }, []);

    return (
      <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-xl ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Notes</span>
      </a>
      <div class="flex md:order-2 space-x-5 rtl:space-x-reverse">
          <button type="button" class="
            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
            dark:bg-blue-600 dark:hover:bg-blue-700
            dark:focus:ring-blue-800">Get started</button>
          <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      </div>
      </div>
    </nav>
    {/* FOR NOTES */}
    <div className='p-6 bg-gray-100 rounded-lg'>
      <div>
        {notes.map(note => (
          <div key={note.id} className="mb-4 p-4 bg-white rounded shadow">
            <h3 className="mb-2 text-2xl font-bold text-gray-800">{note.title}</h3>
            <p className="text-gray-600">{note.body}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    );
}

export default NotesPanel