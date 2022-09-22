// ** React Imports
import { Fragment } from "react";
import { CheckSquare, Home, Info, Mail, User, Users } from "react-feather";

// ** Vertical Menu Components
import VerticalNavMenuGroup from "./VerticalNavMenuGroup";
import VerticalNavMenuLink from "./VerticalNavMenuLink";
import VerticalNavMenuSectionHeader from "./VerticalNavMenuSectionHeader";

const VerticalMenuNavItems = (props) => {
  const {
    data,
    groupActive,
    setGroupActive,
    activeItem,
    setActiveItem,
    groupOpen,
    setGroupOpen,
    menuCollapsed,
    menuHover,
  } = props;

  return (
    <Fragment>
      {data &&
        data.map((menuItem) => {
          if (menuItem.header)
            return (
              <VerticalNavMenuSectionHeader
                key={menuItem.header}
                item={menuItem}
              />
            );
          else if (menuItem.children)
            return (
              <VerticalNavMenuGroup
                key={menuItem.id}
                item={menuItem}
                {...props}
              />
            );
          else
            return (
              <VerticalNavMenuLink
                key={menuItem.id}
                item={menuItem}
              />
            );
        })}
    </Fragment>
  );
};

export default VerticalMenuNavItems;
