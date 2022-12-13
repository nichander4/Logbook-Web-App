import { navigationDataAdmin } from "./menuJSON";

export const getMenuBasedRolesComp = (permittedRole) => {
  const userRole = [];
  const navDataAll = [];
  const contractArray = [];

  if (typeof window !== "undefined") {
    const data = JSON.parse(localStorage.getItem("userRoles"));
    userRole = data.map((data) => data.role.name) || [];
    navDataAll = navigationDataAdmin.map((navData) => navData) || [];
  }

  const getMenuRoles = navigationDataAdmin.filter((data) =>
    userRole.some((user) => data.roles && data.roles.includes(user))
  );

  return getMenuRoles;
};
