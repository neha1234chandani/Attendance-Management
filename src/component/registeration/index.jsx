import { useState } from "react";
import { useNavigate } from "react-router";
import { services } from "../../services";
import Wrappers from "./style";
import { batches } from "../../services";

const Registeration = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userInput, setUserInput] = useState({});

  const inputHandler = (key, value) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [key]: value,
      };
    });
  };
  
  const goToLogin = () => {
    navigate("/")
}

  const studentAddHandler = (e) => {
    e.preventDefault();
    e.target.value = "registering";
    e.target.disabled = "true";
    if (!userInput.role) {
      alert("Please select a role.");
      return;
    }

    if (userInput.role === "student" && !userInput.sectionId) {
      alert("Please fill in all student details.");
      return;
    }

    if (userInput.role === "faculty" && !userInput.subjectId) {
      alert("Please select a department.");
      return;
    }
    if (userInput.password !== confirmPassword) {
      setError(true);
      return;
    } else {
      setError(false);
      services.user
        .register(userInput)
        .then((response) => {
          console.log(response.data);
          alert("Successfully registered");
          navigate("/");
        })
        .catch((error) => {
          console.error(" Registering error:", error);
          alert("Already registered");
        })
        .finally(() => {
          e.target.value = "signup";
          e.target.disabled = "false";
          setUserInput("");
        });
    }
  };
  return (
    <Wrappers>
      <form onSubmit={studentAddHandler}>
        <h2>Registeration</h2>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          value={userInput.name}
          required
          pattern="[A-Z a-z]*"
          title="Enter valid name."
          onChange={(event) => {
            inputHandler("name", event.target.value);
          }}
        />
        <input
          type="tel"
          placeholder="Enter your contact number"
          id="contact"
          value={userInput.contact}
          pattern="[0-9]{10}"
          required
          onChange={(event) => {
            inputHandler("contact", event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          value={userInput.password}
          required
          onChange={(event) => {
            inputHandler("password", event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm password"
          id="confirmPassword"
          value={confirmPassword}
          required
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        {error && (
          <p style={{ color: "#FE4066 ", marginLeft: "5px" }}>
            Password did not match!!
          </p>
        )}
        <select
          onChange={(event) => {
            inputHandler("role", event.target.value);
          }}
        >
          <option value="" disabled selected>
            --Select Role--{" "}
          </option>

          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>
        {userInput.role === "student" && (
          <>
            <input list="sections" placeholder="--Select Section--" 
            onChange={(event) => {
                inputHandler("sectionId", event.target.value.toUpperCase());
              }}/>
            <datalist
              id="sections"
            >
              {/* <option value="" disabled selected>--Select Section--</option> */}
              {batches.map(batch => {
                return <option value={batch}>{batch}</option>
              })}
            </datalist>
          </>
        )}

        {userInput.role === "faculty" && (
          <select
            onChange={(event) => {
              inputHandler("subjectId", event.target.value.toUpperCase());
            }}
          >
            <option value="" disabled selected>
              --Select Subject --
            </option>
            <option value="dbms">DBMS </option>
            <option value="oops">OOPS</option>
            <option value="dccn">DCCN</option>
            <option value="se">SE</option>
          </select>
        )}

        <div id="submit">
          <input type="submit" value="Register" className="button" />
        </div>
      </form>
    </Wrappers>
  );
};

export default Registeration;
