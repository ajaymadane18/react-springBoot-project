
import React, { useEffect, useState } from 'react'
import Course from './Course'
import axios from 'axios'

function Courses() {

  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)

  const getdata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/student/getData"
      )

      setCourses(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdata()
  }, [])

 
  const update = (id) => {
    setCourses((prevCourses) =>
      prevCourses.filter((c) => c.course_id !== id)
    )
  }


  const handleUpdate = (course) => {
    setSelectedCourse({ ...course })
  }


  const updateCourse = async () => {
    try {
      await axios.put(
        `http://localhost:8080/student/update/${selectedCourse.course_id}`,
        selectedCourse
      )

      alert("Course updated successfully!")

      setSelectedCourse(null)
      getdata()

    } catch (error) {
      alert("Failed to update course")
      console.log(error)
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-5">

     

      {/* Display course list */}
      {courses.length > 0 ? (
        courses.map((item) => (
          <Course
            key={item.course_id}
            course={item}
            update={update}
            handleUpdate={handleUpdate}
          />
        ))
      ) : (
        <p>No courses available</p>
      )}

      {/* Update form */}
      {selectedCourse && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            Update Course
          </h2>

          <label className="mb-1 block font-medium">
            Course ID
          </label>

          <input
            className="mb-4 w-full rounded border p-2"
            value={selectedCourse.course_id}
            readOnly
          />

          <label className="mb-1 block font-medium">
            Course Title
          </label>

          <input
            className="mb-4 w-full rounded border p-2"
            value={selectedCourse.course_title}
            onChange={(e) =>
              setSelectedCourse({
                ...selectedCourse,
                course_title: e.target.value
              })
            }
          />

          <label className="mb-1 block font-medium">
            Course Description
          </label>

          <textarea
            className="mb-4 w-full rounded border p-2"
            value={selectedCourse.cource_description}
            onChange={(e) =>
              setSelectedCourse({
                ...selectedCourse,
                cource_description: e.target.value
              })
            }
          />

          <div className="flex gap-3">

            <button
              onClick={updateCourse}
              className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
            >
              Save Changes
            </button>

            <button
              onClick={() => setSelectedCourse(null)}
              className="rounded-lg bg-gray-300 px-5 py-2 hover:bg-gray-400"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  )
}

export default Courses
