import React, { useEffect } from 'react'
import Wrapper from "./style"
import { services } from '../../services'
import { batch, useSelector } from 'react-redux';
import { useState } from 'react';
import { subjects } from '../../services';
import { useNavigate } from 'react-router';


const StudentViewAttendance = () => {
  const currentUser = useSelector(state => state.currentUser)
  const currentBatch = useSelector(state => state.currentBatch);
  const [attendance, setAttendace] = useState({});

  const navigate = useNavigate();
  
  useEffect(() => {
    
    const tempAttendance = [];

    const attendanceFetchHandler = (index, attendanceDetails) => {
      console.log(attendanceDetails);
      console.log("Index:", index);

      subjects.forEach(subject => {
        if (attendanceDetails && attendanceDetails[subject]) {
          let totalCount = Object.entries(attendanceDetails[subject]).length
          let presentCount = 0;
          Object.entries(attendanceDetails[subject]).forEach(([date, attendanceArray]) => {
            if (attendanceArray[index]) {
              presentCount++;
            }
          })
          const percent = presentCount * 100 / totalCount;
          tempAttendance.push(percent);
        }

        else{
          tempAttendance.push("N.A.")
        }

        // tempAttendance.forEach()
      })
      for(let i = 0; i < subjects.length; i ++){
        setAttendace(prevValues => {
          return {...prevValues, [subjects[i]]: tempAttendance[i]}
        })
      }
    }

    const usersFetchHandler = (currentUser, currentBatch, res) => {

      const batchStudents = res.data.filter(user => {
        return user.batchId && user.batchId === 'CS-I-B';
      })

      console.log(batchStudents)
      let studentIndex = 0;

      for (let i = 0; i < batchStudents.length; i++) {
        if (i === batchStudents.length - 1 && batchStudents[i].id !== currentUser.id) {
          alert("Can't Find User Details");
          return;
        }
        if (batchStudents[i].id === currentUser.id) {
          studentIndex = i;
          break;
        }
      }

      services.user.attendanceRead().then(res => attendanceFetchHandler(studentIndex, res.data[currentBatch]))
    }

    services.user.read().then(res => usersFetchHandler(currentUser, currentBatch, res))
  }, [])



  // for(let i = 0; i < subjects.length; i ++){
  //   setAttendace(prevValues => {
  //     return {
  //       ...prevValues, [subjects[i]] : tempAttendance[i]
  //     }
  //   })
  // }


  return (
    <Wrapper id="header">
      <div className="outerBox" style={{ margin: "100px auto" }}>
        <div className="boxHeader">
          <div className="leftHeading"><h2>Subject</h2></div>
          <div className="rigntHeading"><h2>Attendance</h2></div>
        </div>
        <div className="inner">
          {
            Object.entries(attendance).map(([subjectName, percent]) => {
              return (
                <div className="sub1">
                  <p>{subjectName}</p>
                  <p className='mark1'>{percent !== 'N.A.' ? `${percent}%` : "-"}</p>
                </div>
              )
            })
          }
          {/* <div className="sub1">
            <p>DMS</p>
            <p className='mark1'>90%</p>
          </div>
          <div className="sub2">
            <p>DCCN</p>
            <p className='mark2'>90%</p>
          </div>
          <div className="sub3">
            <p>TOC</p>
            <p className='mark3'>90%</p>
          </div>
          <div className="sub4">
            <p>MEFA</p>
            <p className='mark4'>90%</p>
          </div>
          <div className="sub5">
            <p>JAVA</p>
            <p className='mark5'>90%</p>
          </div>
          <div className="sub6">
            <p>DBMS</p>
            <p className='mark6'>90%</p>
          </div> */}
        </div>
        <input type="button" value="View Day Wise" onClick={() => {navigate("/date-wise-attendance")}}/>
      </div>
    </Wrapper>
  )
}

export default StudentViewAttendance

{/* <div className="sub1">
            <p>DMS</p>
            <p className='mark1'>90%</p>
          </div> */}