import Wrapper from "./style";
import NoPic from "../../assets/images/no-pic.jpeg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { services } from "../../services";
import { useNavigate } from "react-router";

const AttendanceMark = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentBatch = useSelector((state) => state.currentBatch);
  const currentSubject = useSelector((state) => state.currentSubject);
  const students = useSelector((state) => state.currentStudents);

  const [student, setStudent] = useState(0);
  const [marked, setMarked] = useState(false);
  const [attendance, setAttendance] = useState([]);
  const [markCount, setMarkCount] = useState(0);

  const presentButton = useRef();
  const absentButton = useRef();

  const status = attendance.length !== student && (
    <span style={{ color: "#6c6c6c" }}>
      &#40;
      <p style={{ display: "inline-block" }}>
        {attendance[student] ? "P" : "A"}
      </p>
      &#41;
    </span>
  );

  useEffect(() => {
    setMarked(false);
    if (students.length === 0) {
      navigate("/faculty-home-page");
    }
  }, [students]);

  useEffect(() => {
    if (student === students.length) {
      setMarked(true);
    }
    console.log(attendance.length, students.length);
  }, [student]);

  const attendanceMarkHandler = (status) => {
    if (student === students.length) return;
    setAttendance((prevValues) => {
      if (student === attendance.length) {
        prevValues.push(status);
        return prevValues;
      } else {
        prevValues[student] = status;
        return prevValues;
      }
    });
    setStudent((prevValue) => prevValue + 1);
  };

  const navigateHandler = (direction) => {
    if (direction === "Previous") {
      if (marked) {
        setMarked(false);
      }
      setStudent((prevValue) => prevValue - 1);
    } else if (direction === "Next") {
      setStudent((prevValue) => prevValue + 1);
    }
  };

  const submitHandler = () => {
    console.log(currentBatch, currentSubject);
    services.user
      .attendanceMark({
        subjectId: currentSubject,
        sectionId: currentBatch,
        attendance: attendance,
      })
      .then((res) => {
        console.log(res);
      });

    dispatch({
      type: "EMPTY_STUDENTS",
    });
  };

  return (
    <Wrapper>
      <div className="submit">
        {marked ? (
          <button className="button" onClick={submitHandler}>
            Submit <FontAwesomeIcon icon={faArrowRight} />
          </button>
        ) : (
          <div>Unmarked: {students.length - attendance.length}</div>
        )}
      </div>
      <div className={marked ? "student-details marked" : "student-details"}>
        <div className="profile-picture">
          <img src={NoPic} alt="Profile" />
        </div>
        <div className="name">
          {students[student] && students[student].name} {status}
        </div>
        <div className="id">{students[student] && students[student].id}</div>
      </div>
      <div className="status">
        <input
          type="button"
          className={marked ? "present marked" : "present"}
          onClick={(event) => attendanceMarkHandler(true)}
          value="P"
          ref={presentButton}
        />
        <input
          type="button"
          className={marked ? "absent marked" : "absent"}
          onClick={(event) => attendanceMarkHandler(false)}
          value="A"
          ref={absentButton}
        />
      </div>
      <div className="navigate-buttons">
        <input
          type="button"
          value="Previous"
          className="button"
          onClick={() => navigateHandler("Previous")}
          style={student === 0 ? { display: "none" } : { diplay: "block" }}
        />
        <input
          type="button"
          value="Next"
          className="button"
          onClick={() => navigateHandler("Next")}
          style={
            student >= attendance.length
              ? { display: "none" }
              : { display: "block" }
          }
        />
      </div>
    </Wrapper>
  );
};

export default AttendanceMark;
