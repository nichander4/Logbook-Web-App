export const getPermissionComponent = (permittedRole) => {
  const userRole = [];

  if (typeof window !== "undefined") {
    const data = JSON.parse(localStorage.getItem("userRoles")) || [];
    userRole = data.map((data) => data.role.name) || [];
  }

  const similarRoles =
    userRole.filter((userRole) => permittedRole.includes(userRole)) || [];

  return similarRoles.length !== 0;
};
