import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Wrapper } from "./style";

const ForgotPassword = () => {
  const [contact, setContact] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://quizattendace.onrender.com/api/user/read")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

    const changePassword = () => {
        users.forEach((user) => {
            if (user.contact === contact) {
                axios.post('https://quizattendace.onrender.com/api/user/resetPassword',
                    {
                        contact,
                        password
                    })
                    .then((res) => {
                        alert("Password changed Successfully.")
                        navigate('/')
                        console.log(res.data)
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            }
            // else
            // { alert('contact does not match')
            // return}
        })

    }
    return (
        <Wrapper>
                <form>
                    <h2>Reset Password</h2>
                    <input type="tel"     
                       placeholder="Contact "
                        value={contact}
                        required
                        onChange={(e) => setContact(e.  target.value)}
                    />
                    <input type="password"
                        placeholder="Enter New Password"
                        value={password}
                        required
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <input type="password"
                        placeholder="Confirm Password"
                        required
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                    />
                    <div id="submit">
                        <input type="button" 
                            value="Proceed"
                            onClick={changePassword} />
                     </div>
                </form>
        
        </Wrapper>
    )
}
export default ForgotPassword;
