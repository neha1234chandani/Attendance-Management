import React, { useEffect, useState } from "react";
import Wrapper from "./style";
import { services, subjects } from "../../services";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

let tempAttendance = [];

const DateWise = () => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date().getTime());
  const [attendanceList, setAttendanceList] = useState([]);

  const currentUser = useSelector(state => state.currentUser);
  const currentBatch = useSelector(state => state.currentBatch);

  //returns date in the format "2023-08-27"
  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (!Math.floor(month / 10)) month = "0" + month;
    let _date = date.getDate();
    if (!Math.floor(_date / 10)) _date = "0" + _date;
    return `${year}-${month}-${_date}`;
  };

  useEffect(() => {
    let list = [];
    tempAttendance.forEach((subjectWiseAttendance, index) => {
      if (subjectWiseAttendance) {
        Object.entries(subjectWiseAttendance).forEach(([key, value]) => {
          if (
            key >= selectedDate &&
            key <= selectedDate + 24 * 60 * 60 * 1000
          ) {
            const date = new Date(Number(key));
            list.push(
              <div className="sub" key={key}>
                <p>{subjects[index]}</p>
                <p>
                  {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
                </p>
                <p>{value ? "P" : "A"}</p>
              </div>
            );
          }
        });
      }
    });
    console.log(selectedDate);
    setAttendanceList(list);
  }, [selectedDate]);

  useEffect(() => {
    const attendanceFetchHandler = (index, attendanceDetails) => {
      console.log(attendanceDetails);
      console.log("Index:", index);

      for (let i = 0; i < subjects.length; i++) {
        if (attendanceDetails && attendanceDetails[subjects[i]]) {
          Object.entries(attendanceDetails[subjects[i]]).forEach(
            ([key, value]) => {
              tempAttendance[i]
                ? (tempAttendance[i] = {
                    ...tempAttendance[i],
                    [key]: value[index],
                  })
                : tempAttendance.push({ [key]: value[index] });
            }
          );
        } else {
          tempAttendance.push(null);
        }
      }
      let tempDate = new Date();
      tempDate = formatDate(tempDate);
      setSelectedDate(new Date(tempDate));
    };

    const usersFetchHandler = (currentUser, currentBatch, res) => {
      const batchStudents = res.data.filter((user) => {
        return user.sectionId && user.sectionId === "CS-I-B";
      });

      console.log(batchStudents);
      let studentIndex = 0;

      for (let i = 0; i < batchStudents.length; i++) {
        if (
          i === batchStudents.length - 1 &&
          batchStudents[i].id !== currentUser.id
        ) {
          alert("Can't Find User Details");
          return;
        }
        if (batchStudents[i].id === currentUser.id) {
          studentIndex = i;
          break;
        }
      }
      services.user
        .attendanceRead()
        .then((res) =>
          attendanceFetchHandler(studentIndex, res.data[currentBatch])
        );
    };

    services.user
      .read()
      .then((res) => usersFetchHandler(currentUser, currentBatch, res));
  }, []);

  const dateGetHandler = (event) => {
    setSelectedDate(new Date(event.target.value).getTime());
  };

  return (
    <Wrapper id="body">
      <div class="filter">
        <input
          className="date"
          type="date"
          onInput={dateGetHandler}
          value={formatDate(new Date(Number(selectedDate)))}
        />
      </div>
      <div class="outerBox" style={{ margin: "100px auto" }}>
        <div class="boxHeader">
          <h2>Subject</h2>
          <h2>Time</h2>
          <h2>Status</h2>
        </div>
        <div class="inner">
          {attendanceList.length === 0 ? (
            <p>No attendance on this date!</p>
          ) : (
            attendanceList
          )}
          
          {/* <div class="sub3">  <p>TOC</p> <p>P</p> </div> 
           <div class="sub4">   <p>MEFA</p> <p>P</p></div> 
           <div class="sub5">    <p>JAVA</p><p>P</p></div> 
           <div class="sub6">   <p>DBMS</p> <p>NA</p></div> */}
        </div>
        <input
          type="button"
          value="Back"
          onClick={() => {
            navigate("/student-attendance-view");
          }}
        />
      </div>
    </Wrapper>
  );
};

export default DateWise;
