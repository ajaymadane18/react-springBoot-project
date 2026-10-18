
import React from 'react'

function AddCourse() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <div className="mx-auto max-w-lg rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
          Fill Course Details
        </h1>

        <form className="space-y-5">

          <div>
            <label
              htmlFor="courseId"
              className="mb-2 block font-semibold text-gray-700"
            >
              Course ID
            </label>

            <input
              type="text"
              id="courseId"
              name="courseId"
              placeholder="Enter course ID"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label
              htmlFor="courseTitle"
              className="mb-2 block font-semibold text-gray-700"
            >
              Course Title
            </label>

            <input
              type="text"
              id="courseTitle"
              name="courseTitle"
              placeholder="Enter course title"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label
              htmlFor="courseDescription"
              className="mb-2 block font-semibold text-gray-700"
            >
              Course Description
            </label>

            <textarea
              id="courseDescription"
              name="courseDescription"
              rows="4"
              placeholder="Enter course description"
              className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add Course
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddCourse

