import React from 'react'

export default function App() {
    return ( 
      <div className='flex justify-center items-center h-screen'>
        <div className=' flex flex-col gap-6 items-center p-12 bg-indigo-400 drop-shadow-xl rounded-lg hover:scale-105 transition ease-in-out duration-300'>
          <h1 className='text-white font-bold text-xl'>Welcome, this is a react-tailwind-template</h1>
          <h1>Made by ❤ <a href="http://kaleabdereje.netlify.app" target="_blanck" className='underline hover:no-underline'>Kaleab Dereje</a> </h1>
        </div>
      </div>
    )

}
