
import React from 'react'

function Home() {
  return (
    <div className=" bg-gray-100 px-6 py-16">

      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 text-center shadow-lg md:p-12">

        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Welcome to My Project
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-600">
          This project is developed by Ajay for learning purposes.
          The backend is built with Spring Boot, and the frontend
          is built with React.js.
        </p>

        <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700">
          Start Using
        </button>

      </div>

    </div>
  )
}

export default Home

