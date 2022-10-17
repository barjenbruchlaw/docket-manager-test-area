import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink,
} from "shards-react";
import useUser from "../../../../hooks/useUser";

function UserActions() {
  const [visible, setVisible] = React.useState(false);
  const userContext = useUser();
  const toggleUserActions = () => {
    setVisible((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    userContext.removeUser();
  };

  return (
    <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
      <DropdownToggle
        caret
        tag={NavLink}
        className="text-nowrap px-3"
        style={{ cursor: "pointer" }}
      >
        <img
          className="user-avatar rounded-circle mr-2"
          src="https://picsum.photos/200"
          alt="User Avatar"
        />{" "}
        <span className="d-none d-md-inline-block">
          {userContext.user?.name}
        </span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right small open={visible}>
        <DropdownItem
          onClick={() => {
            navigate("/profile");
          }}
        >
          <i className="material-icons">&#xE7FD;</i> Profile
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          className="text-danger"
          onClick={() => {
            handleLogout();
          }}
        >
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </DropdownItem>
      </Collapse>
    </NavItem>
  );
}
export default UserActions;
