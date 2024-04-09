import axios from "axios";

export const services = {
    user : {
        read : _ => axios.get("https://quizattendace.onrender.com/api/user/read"),
        register: payload => axios.post("https://quizattendace.onrender.com/api/user/add", payload),
        login: payload => axios.post("https://quizattendace.onrender.com/api/user/login", payload),
        update: payload => axios.put("https://quizattendace.onrender.com/api/user/update", payload),
        resetPassword: payload => axios.post("https://quizattendace.onrender.com/api/user/resetPassword", payload),
        attendanceMark: payload => axios.post("https://quizattendace.onrender.com/api/attendance/mark", payload),
        attendanceRead : _ => axios.get("https://quizattendace.onrender.com/api/attendance/read")
    }
}

export const students = [
    {
        name: "Student A",
        contact: "987654321",
        id: "1",
        batchId : "CS-I-A"
    },
    {
        name: "Student B",
        contact: "9119238422",
        id: "2",
        batchId : "CS-I-A"
    },
    {
        name: "Student C",
        contact: "9119238423",
        id: "3",
        batchId : "CS-I-A"
    },
    {
        name: "Student D",
        contact: "911923B8424",
        id: "4",
        batchId : "CS-I-A"
    },
    {
        name: "Student E",
        contact: "9119238425",
        id: "5",
        batchId : "CS-I-A"
    },
    {
        name: "Student F",
        contact: "9119238426",
        id: "6",
        batchId : "CS-I-A"
    }
]


export const subjects = [
    "DMS", "DBMS", "OOPS", "SE"
]

export const batches = [
    "CS-I-A", "CS-II-A", "CS-III-A", "CS-I-B", "CS-II-B", "CS-III-B", "CS-I-C", "CS-II-C", "CS-III-C","IT-I-A", "IT-II-A", "IT-III-A", "IT-I-B", "IT-II-B", "IT-III-B", "IT-I-C", "IT-II-C", "IT-III-C","ME-I-A", "ME-II-A", "ME-III-A", "ME-I-B", "ME-II-B", "ME-III-B", "ME-I-C", "ME-II-C", "ME-III-C","ECE-I-A", "ECE-II-A", "ECE-III-A", "ECE-I-B", "ECE-II-B", "ECE-III-B", "ECE-I-C", "ECE-II-C", "ECE-III-C"
]