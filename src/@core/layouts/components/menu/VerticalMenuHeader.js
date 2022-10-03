// ** React Imports
import { useEffect } from "react";
import Link from "next/link";

const VerticalMenuHeader = (props) => {
  // ** Props
  const { menuCollapsed, setMenuCollapsed, menuVisibility, setMenuVisibility, setGroupOpen } = props

  // ** Reset open group
  useEffect(() => {
    if (!menuVisibility && menuCollapsed) setGroupOpen([]);
  }, [menuVisibility, menuCollapsed]);

  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item mr-auto">
          <Link href="/">
            <a className="navbar-brand active">
              <span className="brand-logo">
                <img src="/images/logo/logoxyz.png" alt="logo" />
              </span>
              <h2 className="brand-text mb-0">PT. XYZ</h2>
            </a>
          </Link>
        </li>
        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle cursor-pointer"></div>
        </li>
      </ul>
    </div>
  );
};

export default VerticalMenuHeader;
