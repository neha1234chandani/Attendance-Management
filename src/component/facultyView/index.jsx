// import React, { useState } from 'react'
// import { useNavigate } from 'react-router'
import Wrapper from "./style"


// export const Facultyview = () => {
//     const [studentData, setStudentData] = useState([])
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('https://quizattendace.onrender.com/api/user/read')
//             .then((res) => {
//                 console.log(res.data);
//                 setUsers(res.data);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             });
//     }, [])

//     users.forEach((user) => {
//             axios.get('https://quizattendace.onrender.com/api/user/read',)
//             if (userRole === 'faculty') {
//                 // Filter student data based on role
//                 const filteredStudents = students.filter(student => student.role === 'student');
//                 res.json(filteredStudents);
//               } else {
//                 // Return all students for other roles
//                 res.json(students);
//               }
//             });
//                 .then((res) => {
//                     alert("students information ")
//                     console.log(res.data)
//                 })
//                 .catch((err) => {
//                     console.log(err.message)
//                 })
//         }
        
//     })

// }
// return (
//     <Wrapper>
//         <h1> Faculty ViewPage</h1>
//         <div className='headings'>
//             <h2>Name</h2>
//             <h2>RollNo</h2>
//             <h2>Agg. Attendance</h2>
//         </div>
//         <div className='info'>
//             {students.map(student => (
//                 <div key={student.rollNo}>
//                     <div className='name'>
//                         {student.name}
//                     </div>
//                     <div class='rollNo'>
//                         {student.rollNo}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </Wrapper>

// )
// }
// export default Facultyview
import React from 'react'

const Facultyview = () => {
  return (
    <Wrapper>
        <div className="outerContainer">
        <div className="container">
            <div className="heading"><h1> Faculty View Page</h1></div>
         
         <div className='boxHeadings'>
             <div className="name"><h2>Name</h2></div>
             <div className="rollNo"><h2>RollNo</h2></div>
             <div className="attendance"><h2>Attendance</h2></div>
         </div>
         <div className="inner"> <p className="name"> Neha </p><p className="rollNo"> 206 </p><p className="attendance"> 90% </p></div>
        </div>
        </div>
         {/* <div className='info'>
             {students.map(student => (
                <div key={student.rollNo}>
                    <div className='name'>
                        {student.name}
                    </div>
                    <div class='rollNo'>
                        {student.rollNo}
                    </div> */}
                {/* </div> */}
            {/* ))} */}
        {/* </div> */}
    </Wrapper>

  )
}

export default Facultyview
