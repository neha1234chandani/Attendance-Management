import NoPic from "../../assets/images/no-pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Wrapper from "./style";

const ProfilePanel = ({ display, userName, contact }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  const imgUrl = useSelector(state => state.currentUser.img);

  const getImageHandler = (input) => {
    const fr = new FileReader();
    fr.readAsDataURL(input);
    fr.addEventListener("load", () => {
      setProfilePhoto(fr.result);
    })
  }
  
  if(imgUrl){
    fetch(imgUrl)
      .then(res => res.blob())
      .then(blob => {getImageHandler(blob)});
  }

  const profileViewHandler = () => {
    setShowProfile(true);
  };

  const profileCloseHandler = () => {
    setShowProfile(false);
  };

  useEffect(() => {
    if(userName === ""){
      navigate("/");
    }
  }, [userName])

  const logoutHandler = () => {
    dispatch({
      type: "LOGOUT",
    });
    localStorage.removeItem("userDetails");
    localStorage.getItem("currentSubject") && localStorage.removeItem("currentSubject");
    localStorage.getItem("currentSection") && localStorage.removeItem("currentSectt");
  };

  return (
    <Wrapper className="profile" style={{ display: display }}>
      <div
        className="blur-background"
        style={showProfile ? { display: "block" } : { display: "none" }}
        onClick={profileCloseHandler}
      />
      {profilePhoto ? 
          <img src={profilePhoto} alt="Profile" onClick={profileViewHandler} /> : 
          <img src={NoPic} alt="Profile" onClick={profileViewHandler} />
      }
      <div
        className="profile-panel"
        style={
          showProfile
            ? { animationName: "slidePanelIn" }
            : { animationName: "slidePanelOut" }
        }
      >
        <div className="close" onClick={profileCloseHandler}>
          x
        </div>
        <div className="details">
          <div className="profile">
          {profilePhoto ? 
            <img src={profilePhoto} alt="Profile" onClick={profileViewHandler} /> : 
            <img src={NoPic} alt="Profile" onClick={profileViewHandler} />
          }
          </div>
          <div className="name">{userName}</div>
          <div className="contact">{contact}</div>
        </div>
        <button className="button" onClick={logoutHandler}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
        </button>
      </div>
    </Wrapper>
  );
};

export default ProfilePanel;
