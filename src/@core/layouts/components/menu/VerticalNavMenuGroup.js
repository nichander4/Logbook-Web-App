import { useState } from "react";
import { Badge, Collapse } from "reactstrap";
import VerticalNavMenuLink from "./VerticalNavMenuLink";

const VerticalNavMenuGroup = (props) => {
  // ** Props
  const {
    item,
    groupActive,
    setGroupActive,
    groupOpen,
    setGroupOpen,
    parentItem,
    menuCollapsed,
    menuHover,
  } = props;

  // ** Toggles Open Group
  const toggleOpenGroup = (item) => {
    let openArr = groupOpen;
    let allParents;

    // ** If user clicked on menu group inside already opened group i.g. when user click on blog group inside pages group
    if (groupOpen && allParents && groupOpen[0] === allParents[0]) {
      groupOpen.includes(item)
        ? openArr.splice(openArr.indexOf(item), 1)
        : openArr.push(item);
    } else {
      openArr = [];
      if (!groupOpen.includes(item)) {
        openArr.push(item);
      }
    }

    // ** Set Open Group
    setGroupOpen([...openArr]);
    console.log({ groupOpen, groupActive })
  };

  // ** Toggle Active Group
  const toggleActiveGroup = (item) => {
    let activeArr = groupActive;

    activeArr.includes(item)
        ? activeArr.splice(activeArr.indexOf(item), 1)
        : activeArr.push(item);

    // ** Set open group removing any activegroup item present in opengroup state
    const openArr = groupOpen.filter((val) => !activeArr.includes(val));
    setGroupOpen([...openArr]);

    // **  Set Active Group
    setGroupActive([...activeArr]);
  };

  // ** On Group Item Click
  const onCollapseClick = (e, item) => {
    if (groupActive && groupActive.includes(item.id)) {
      toggleActiveGroup(item.id);
    } else {
      toggleOpenGroup(item.id, parentItem);
    }

    e.preventDefault();
  };

  // ** Returns condition to add open class
  const openClassCondition = (id) => {
    console.log(id)
    if ((menuCollapsed && menuHover) || menuCollapsed === false) {
      if (groupActive.includes(id) || groupOpen.includes(item.id)) {
        return true;
      }
    } else if (
      groupActive.includes(id) &&
      menuCollapsed &&
      menuHover === false
    ) {
      return false;
    } else {
      return null;
    }
  };

  return (
    <li
      className={`nav-item has-sub ${
        openClassCondition(item.id) ? "open" : ""
      } ${groupActive.includes(item.id) ? "menu-collapsed-open" : ""} ${
        groupActive.includes(item.id) || groupOpen.includes(item.id)
          ? "sidebar-group-active"
          : ""
      }`}
    >
      <a
        className="d-flex align-items-center"
        onClick={(e) => onCollapseClick(e, item)}
      >
        {item.icon}
        <span className="menu-title text-truncate">{item.title}</span>
        {item.children.length > 0 && (
          <Badge className="ml-auto mr-1" color="primary" pill>
            {item.children.length}
          </Badge>
        )}
      </a>
      <ul className="menu-content">
        <Collapse
          isOpen={
            (groupActive && groupActive.includes(item.id)) ||
            (groupOpen && groupOpen.includes(item.id))
          }
        >
          {item.children &&
            item.children.map((childItem) => (
              <VerticalNavMenuLink
                key={childItem.id}
                item={childItem}
              />
            ))}
        </Collapse>
      </ul>
    </li>
  );
};

export default VerticalNavMenuGroup;
