import React, { useEffect, useState } from 'react'
import Course from './Course'
import axios from 'axios'


function Courses() {
    const [courses,setCourses]=useState([ ])


    const getdata=async()=>{
     const response=await axios.get("http://localhost:8080/student/getData")
     setCourses(response.data)
     
     
    }
    useEffect(()=>{
       getdata()
    },[])
    const  update=(id)=>{
   setCourses(courses.filter((c)=>c.id!=id))
    }
      
  return (
    <div>
          
        {
           courses.length>0? courses.map((item)=><Course course={
            item
           } update={update}/>):"No courses"
        }
    </div>
  )
}

export default Courses
