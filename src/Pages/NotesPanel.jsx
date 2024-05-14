// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import Buttons from '../Components/Button/Buttons';
// import baseUrl from '../endpoint';
 
// const handleClick = () => {
//   console.log('Hii')
// }

// const NotesPanel = () => {
//   const [allNotes, setNotes] = useState([]);
//   useEffect(()=>{
//     axios.get(`${baseUrl}/all-notes`).then((response)=>{
//        setNotes(response.data.notes)
//        console.log(allNotes)
//      })
//    },[]);

//   // useEffect(() => {
//   //   fetch('src\FakeJSON\notes.json').then((response)=>{
//   //     setNotes(response.json)
//   //     console.log(response.json)
//   //   })
//   // });

//     return (
//       <div>
//         <div className='flex items-center justify-center'>
//           <div className='box-border border-2 border-black rounded-3xl w-1/2 h-16 mt-4'>
//               <div className='flex items-center justify-center'>
//                 <div className='mt-4 font-poppins'>My Notes</div>
//               </div>
//               <div className='relative ml-96 pl-56 bottom-6'>
//                 <Buttons className='cursor-pointer absolute object-right bg-blue-500 rounded-full p-4' onClick={handleClick} text=''/>
//               </div>
//           </div>
//         </div>
//         <div className='flex items-center'>
//           {allNotes.map(note =>
//             (
//               <div key={note.id}>
//                 <div className='box-border border-2 border-black rounded-3xl w-60 h-60'>
//                   <h2>{note.title}</h2>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     );
// }

// export default NotesPanel