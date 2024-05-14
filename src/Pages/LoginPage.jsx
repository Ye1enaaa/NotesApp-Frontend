import React from 'react'
import LoginForm from '../Components/LoginComponent/LoginForm'

function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center items-center bg-orange-500 text-white w-1/2 p-10">
        <h1 className="text-4xl font-bold mb-4">Simplify notes application</h1>
        <p className="text-lg mb-8">Streamline your note-taking with our intuitive notes application.</p>
        <img src="https://i.pinimg.com/originals/8b/f0/10/8bf010e752fba425654ff1a13ae7ecd8.jpg" alt="Illustration" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 p-10">
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage