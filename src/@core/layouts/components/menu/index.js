// ** React Imports
import { useState, useRef } from "react";

// ** Third Party Components
import PerfectScrollbar from "react-perfect-scrollbar";

// ** Vertical Menu Components
import VerticalMenuHeader from "./VerticalMenuHeader";
import VerticalNavMenuItems from "./VerticalNavMenuItems";

const MenuComponent = (props) => {
  // ** Props
  const {
    data,
    menuCollapsed,
    setMenuCollapsed,
    menuVisibility,
    setMenuVisibility,
  } = props;

  // ** States
  const [groupOpen, setGroupOpen] = useState([]);
  const [groupActive, setGroupActive] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false);

  // ** Ref
  const shadowRef = useRef(null);

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    setMenuHover(true);
    setMenuVisibility(true);
  };

  // ** Function to handle Mouse Enter
  const onMouseLeave = () => {
    setMenuHover(false);
    setMenuVisibility(false);
  };

  // ** Scroll Menu
  const scrollMenu = (container) => {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains("d-block")) {
        shadowRef.current.classList.add("d-block");
      }
    } else {
      if (shadowRef.current.classList.contains("d-block")) {
        shadowRef.current.classList.remove("d-block");
      }
    }
  };

  return (
    <div
      className={`main-menu menu-fixed menu-accordion menu-shadow ${
        menuVisibility || menuCollapsed === false ? "expanded" : ""
      } menu-light`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <VerticalMenuHeader
        setGroupOpen={setGroupOpen}
        menuHover={menuHover}
        {...props}
      />
      <div className="shadow-bottom" ref={shadowRef}></div>
      <PerfectScrollbar
        className="main-menu-content"
        options={{ wheelPropagation: false }}
        onScrollY={(container) => scrollMenu(container)}
      >
        <ul className="navigation navigation-main">
          <VerticalNavMenuItems
            data={data}
            groupActive={groupActive}
            setGroupActive={setGroupActive}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            groupOpen={groupOpen}
            setGroupOpen={setGroupOpen}
            menuCollapsed={menuCollapsed}
            menuHover={menuHover}
          />
        </ul>
      </PerfectScrollbar>
    </div>
  );
};

export default MenuComponent;
