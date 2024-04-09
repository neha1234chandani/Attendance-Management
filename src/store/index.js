import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const initialState = {
  currentStudents: [],
  currentUser: { name: "" },
  role: "",
  currentBatch: "",
  currentSubject: "",
  // currentUserProfile: { name: "neha", email: "neha@gmail.com" },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
        currentBatch: action.payload.sectionId,
        currentSubject: action.payload.subjectId,
        role: action.payload.role,
      };
    case "BATCH_SELECT":
      return {
        ...state,
        currentBatch: action.payload.currentBatch,
      };
    case "STUDENT_SELECT":
      const students = action.payload.users.filter(
        (user) =>
          user.sectionId && user.sectionId === action.payload.currentBatch
      );
      return {
        ...state,
        currentStudents: students,
      };
    case "EMPTY_STUDENTS":
      return {
        ...state,
        currentStudents: [],
      };
    case "MARK_ATTENDANCE":
      let index = action.payload.id;
      index = Number(index[6]);
      let tempArray = [...state.allStudents];
      tempArray[index] = {
        ...tempArray[index],
        attendance: {
          ...tempArray[index].attendance,
          [action.payload.date]: action.payload.status,
        },
      };
      return {
        ...state,
        allStudents: [...tempArray],
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: { name: "" },
      };
    // case "UPDATE":
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     currentUserProfile: action.payload,
    //   };
    case "UPDATE_PROFILE": 
        return {
          ...state, currentUser: action.payload
        } 
    default:
      return state;
  }
};

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);
