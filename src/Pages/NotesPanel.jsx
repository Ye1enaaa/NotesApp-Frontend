import React, { useState, useEffect } from 'react'
import axios from 'axios';
import dotenv from 'react-dotenv';
import getCookie from '../Services/GetCookie';
import { NoteCard } from '../Components/NotesComponent/NoteCard';
import AddNoteModal from '../Components/NotesComponent/AddNoteModal';
import { GetTimeGreetings } from '../Services/GetTimeGreetings';

const NotesPanel = () => {
  const [notes, setNotes] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const addNoteHandler = () => {
    setIsModalOpen(true)
    console.log('Hiii')
  }

  const closeAddNoteHandler = () => {
    setIsModalOpen(false)
  }

  const getGreeting = GetTimeGreetings();

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
      <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{getGreeting} Erickson</span>
      </a>
      <div class="flex md:order-2 space-x-5 rtl:space-x-reverse">
          <button type="button" onClick={addNoteHandler} class="
            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
            dark:bg-blue-600 dark:hover:bg-blue-700
            dark:focus:ring-blue-800">Add Note
          </button>
            {isModalOpen && (
                <AddNoteModal onClose={closeAddNoteHandler}/>
            )}
        <img class="w-10 h-10 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="Rounded avatar" />
      </div>
      </div>
    </nav>
    {/* FOR NOTES */}
    <div className='p-6 bg-gray-100 rounded-lg mt-2'>
      <div className='grid grid-cols-3 gap-4'>
        {notes.map(note => (
          <NoteCard key={note.id} title={note.title} body={note.body}/>
        ))}
      </div>
    </div>
    </div>
    );
}

export default NotesPanel