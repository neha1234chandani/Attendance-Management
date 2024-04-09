import { useState } from "react";
import Wrapper from "./style";
import { services } from "../../services";
import { useNavigate } from "react-router";
 import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateProfile = () => {
    const currentUser = useSelector(state => state.currentUser)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [users, setUsers] = useState([])
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [address, setAddress] = useState(currentUser.address)
    const [DOB, setDOB] = useState(currentUser.DOB)
    const [rollNo, setRollNo] = useState(currentUser.rollNo)
    const [img, setImgUrl] = useState()

    const contact = useSelector(state => state.currentUser.contact);

    const updateProfileHandler = () => {
        services.user.read()
         .then(res => {
            const userData = res.data.find(user => user.contact === currentUser.contact);
            dispatch({
                type: "UPDATE_PROFILE",
                payload: userData
            })
            localStorage.setItem("userDetails", JSON.stringify(userData))
         })
    }

    const update = (e) => {
        e.preventDefault()
        services.user.update({
            name,
            contact,
            email,
            address,
            DOB,
            rollNo,
            img
        }).then(_ => {
            updateProfileHandler();

            alert("Your Profile has been updated ")
            navigate('/student-home-page')
        })
            .catch((error) => {
                console.error("Error in updating profile", error);
                alert("error in updating profile");
            })
        }

        {
        useEffect(() => {
            console.log(users);
        }, [users]);
         }
    return (
        <Wrapper>
            <form>
                <h2>Update Your Profile</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your Roll No."
                    id="rollNo"
                    value={rollNo}
                    required
                    onChange={(event) => setRollNo(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>
                        Choose your profile picture :
                </label>
                <div>
                 <input
                     type='file'
                     onChange={(e)=>setImgUrl(URL.createObjectURL(e.target.files[0]))}
                />
                </div>
                <input
                    type='text-area'
                    placeholder="Enter your address"
                    id="address"
                    value={address}
                    required
                    onChange={(event) => setAddress(event.target.value)}
                />
                <label>
                        Enter your DOB :
                <input
                    type="date"
                    placeholder="Enter your DOB"
                    id="DOB"
                    value={DOB}
                    required
                    onChange={(event) => setDOB(event.target.value)}
                />
                </label>
                <div id="submit">
                <input
                    type='button'
                    value='Update'
                    onClick={update}
                />
                </div>
            </form>

        </Wrapper>
        )
 }

export default UpdateProfile;