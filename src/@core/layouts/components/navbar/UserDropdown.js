// ** Next Imports
import Link from "next/link";

// ** Custom Components
import Avatar from "src/@core/components/avatar";

// ** Third Party Components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import {
  Edit,
  Power,
} from "react-feather";
import { signOut, useSession } from "next-auth/react";

const UserDropdown = () => {
  const { data: session, status } = useSession();

  const logoutFunc = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    signOut();
  };
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
        size="lg"
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name font-weight-bold">{session?.user.userName}</span>
          <span className="user-status">{session?.user.role.roleName}</span>
        </div>
        <Avatar
          img="/images/avatars/avatar-blank.png"
          imgHeight="40"
          imgWidth="40"
          
        />
      </DropdownToggle>
      <DropdownMenu right style={{width:"150%"}}>

        <DropdownItem tag={Link} href="/change_password">
          <a className="dropdown-item">
            <Edit size={14} className="mr-75" />
            <span className="align-middle">Change Password</span>
          </a>
        </DropdownItem>
        <DropdownItem className="dropdown-item w-100" onClick={logoutFunc}>
            <Power size={14} className="mr-75" />
            <span className="align-middle">Logout</span>
        </DropdownItem> 
        
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
