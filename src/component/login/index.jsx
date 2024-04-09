import React, { useEffect, useState } from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router'
import { services } from '../../services'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const currentUser = useSelector(state => state.currentUser);

    const handleForgot = () => {
        navigate("/reset-password")
    }

    const goToRegister = () => {
        navigate("/registeration")
    }

    useEffect(() => {
        if(currentUser.name !== ""){
            if(currentUser.role === "student"){
                navigate("/student-home-page");
            }
            else{
                navigate("/faculty-home-page");
            }
        }
    }, [])

    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        if (!contact || !password) {
            setErrorMessage('Please enter the valid details.')
        }
        else {
            services.user.login(
                {
                    contact,
                    password
                }
            ).then((response) => {
                dispatch({
                    type: "LOGIN",
                    payload: response.data.user
                })
                console.log(response.data)
                localStorage.setItem("userDetails",JSON.stringify(response.data.user))
                setUser(response.data)
                console.log(user)
                alert("Logged In Succesfully ")
                if (response.data.user.role === "student") {
                    localStorage.setItem("currentBatch", response.data.user.sectionId);
                  navigate("/student-home-page");
                } else {
                    localStorage.setItem("currentSubject", response.data.user.subjectId);
                    navigate("/faculty-home-page");
                }
            })
                .catch((error) => {
                    console.error("Error in login user:", error)
                    alert("Login failed. Please check your credentials.")
                })
                .finally(() => {
                    setPassword("")
                    setContact("")
                })

        }
    }


    return (
        <Wrapper>
            <form onSubmit={handleLogin}>
                <h1> Sign in </h1>
                <div>
                    <input type='tel'
                        placeholder='Contact*'
                        value={contact}
                        pattern='[0-9]{10}'
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>
                <div>
                    <input type='password'
                        placeholder='Password*'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                {errorMessage && <p style={{ color: ' #FE4066' }}>{errorMessage}</p>}
                <div id="submit">
                    <input type='submit'
                        value='Login'
                    />
                </div>

                <div id='forgot'>
                    <span onClick={handleForgot} >Forgot Password ? </span>
                </div>

                <div id='sign'>
                    <p>Create an account?  </p>
                    <span id="signup-btn"
                        onClick={goToRegister}> Sign Up</span>
                </div>
            </form>
        </Wrapper>
    )
}

export default Login
