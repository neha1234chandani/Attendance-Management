import StyledHeader from "./style";
import ProfilePanel from "../profile-panel";
import Menu from "../menu";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector(state => state.currentUser);
  console.log("currentUser", currentUser);

  if (currentUser.name && currentUser.name.length === 5) {
    console.log(true);
  }

  return (
    <StyledHeader>
      <Menu></Menu>
      <h1>Attendance Management</h1>
      <ProfilePanel
        display={currentUser.name === "" ? "none" : "block"}
        userName={currentUser.name}
        contact={currentUser.contact}
      />
    </StyledHeader>
  );
};

export default Header;
