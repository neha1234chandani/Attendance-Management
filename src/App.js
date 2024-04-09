import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import StudentViewAttendance from "./component/studentViewAttendance";
import Registeration from "./component/registeration";
import Login from "./component/login";
import AttendanceMark from "./component/attendance-mark";
import Facultyview from "./component/facultyView";
import DateWise from "./component/dateWiseAttendence";
import ForgotPassword from "./component/forgotPassword";
import UpdateProfile from "./component/updateProfile";
import { ViewProfile } from "./component/viewProfile";
import NotFound from "./component/notFound";
import { StudentHomePage } from "./component/studentHomePage";
import FacultyHomePage from "./component/faculty-home-page";
import { useSelector } from "react-redux";
import NotLoggedIn from "./component/not-logged-in";
import { useDispatch } from "react-redux";

function App() {
  // for(let i = 1; i < 6; i ++){
  //   setTimeout(() => {
  //     services.user.register({
  //       name: "Person " +  i,
  //       contact: "888888888" + i,
  //       password: "password",
  //       sectionId: "CS-I-A",
  //       role: "student"
  //     }).then(res => {console.log(res)})
  //   }, i*1000)
  // }

  // services.user.register({
  //   name: "Kunal",
  //   contact: "9119238422",
  //   password: "password",
  //   subjectId: "DMS",
  //   role: "faculty",
  //   // email: "kunal27jul2004@gmail.com"
  // }).then(res => {console.log(res)})

  // services.user.register({
  //   name: "James Bond",
  //   contact: "9229238422",
  //   password: "password",
  //   subjectId: "DBMS",
  //   role: "faculty"
  // })

  const dispatch = useDispatch();

  if(JSON.parse(localStorage.getItem("userDetails"))){
    console.log(JSON.parse(localStorage.getItem("userDetails")))
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(localStorage.getItem("userDetails"))
    })
  }
  
  const userName = useSelector(state => state.currentUser.name);
  const userRole = useSelector(state => state.currentUser.role)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/registeration" element={<Registeration />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          {userName !== "" ?
          (userRole === "faculty" ?
            <>
              <Route path="/view-profile" element={<ViewProfile />} />
              <Route path="/attendance-mark" element={<AttendanceMark />} />
              <Route path="/faculty-view" element={<Facultyview />} />
              <Route path="/faculty-home-page" element={<FacultyHomePage />} />
              <Route path="*" element={<NotFound />} />
            </>
            :
            <>
              <Route path="/date-wise-attendance" element={<DateWise />} />
              <Route path="/student-attendance-view" element={<StudentViewAttendance />}/>
              <Route path="/student-home-page" element={<ViewProfile />} />
              <Route path="*" element={<NotFound />} />
            </>
          )
          :
          <>
            <Route path="*" element={<NotLoggedIn/>} />
          </>
        }
        </Routes>
        <Footer />
        {/* <div style={{ height: "30px" }}></div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
