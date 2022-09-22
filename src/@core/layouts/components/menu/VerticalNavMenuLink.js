import Link from "next/link";
import { useRouter } from "next/router";
import { Circle } from "react-feather";

const VerticalNavMenuLink = (props) => {
  // ** Props
  const {
    item,
    groupActive,
    setGroupActive,
    activeItem,
    setActiveItem,
    groupOpen,
    setGroupOpen,
    parentItem,
    menuCollapsed,
    menuVisibility,
  } = props;

  const router = useRouter();

  return (
    <li
      className={`nav-item ${
        item.href === router.pathname ? "active" : ""
      }`}
    >
      <Link href={item.href}>
        <a className="d-flex align-items-center">
          {item.icon}
          <span className="menu-item text-truncate">{item.title}</span>
        </a>
      </Link>
    </li>
  );
};

export default VerticalNavMenuLink;
