
import React from 'react'
import axios from 'axios'

function Course({ course, update, handleUpdate }) {

  const deleteCourse = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/student/delete/${id}`
      )

      alert("Data deleted successfully")
      update(id)

    } catch (error) {
      alert("Something went wrong")
      console.log(error)
    }
  }

  return (
    <div className="my-4 rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl">

      <h2 className="mb-2 text-2xl font-bold text-blue-700">
        {course.course_title}
      </h2>

      <p className="mb-5 text-gray-600">
        {course.cource_description}
      </p>

      <div className="flex gap-3">

        <button
          onClick={() => handleUpdate(course)}
          className="rounded-lg bg-amber-400 px-5 py-2 font-medium text-gray-900 hover:bg-amber-500"
        >
          Update
        </button>

        <button
          onClick={() => deleteCourse(course.course_id)}
          className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default Course
