import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSignature,
  faEnvelope,
  faAddressBook,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import NoPic from "../../assets/images/no-pic.jpeg";
import { useSelector } from "react-redux";

export const ViewProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const currentUser = useSelector(state => state.currentUser);
  let imgUrl = "";

  if(currentUser.hasOwnProperty("img")){
    imgUrl = currentUser.img;
  }

  const getImage = (input) => {
    const fr = new FileReader();
    fr.readAsDataURL(input);
    fr.addEventListener("load", () => {
      setProfilePhoto(fr.result);
    });
  };

  if (imgUrl !== "") {
    console.log("ImgUrl", imgUrl)
    fetch(imgUrl)
      .then((res) => res.blob())
      .then((blob) => {
        getImage(blob);
      })
      .catch(err => {console.log(err)})
  }

  return (
    <Wrapper>
      <h1>Welcome {currentUser.name}!</h1>
      {/* <h2>Here is your Profile.</h2> */}
      {
        <div>
          <div id="image-container">
            <div>
              {currentUser.img ? (
                <img
                  src={profilePhoto}
                  alt="profile Available"
                  width="120px"
                  height="120px"
                />
              ) : (
                <img
                  src={NoPic}
                  alt="profile Available"
                  width="120px"
                  height="120px"
                />
              )}
            </div>
          </div>
          {/* <p>Name: {currentUser.name}</p>
          <p>Contact: {currentUser.contact}</p>
          <p>DOB: {currentUser.DOB}</p>

          <p>Email: {currentUser.email}</p>
          <p>Address: {currentUser.address}</p> */}

          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faSignature} />
            </div>
            <div className="title">Name</div>
            <div className="details">{currentUser.name}</div>
          </div>
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="title">Contact</div>
            <div className="details">{currentUser.contact}</div>
          </div>
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faBirthdayCake} />
            </div>
            <div className="title">DOB</div>
            <div className="details">{currentUser.DOB}</div>
          </div>
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="title">Email</div>
            <div className="details">{currentUser.email}</div>
          </div>
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faAddressBook} />
            </div>
            <div className="title">Address</div>
            <div className="details">{currentUser.address}</div>
          </div>
        </div>
      }
    </Wrapper>
  );
};
