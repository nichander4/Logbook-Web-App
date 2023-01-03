import { useSession } from "next-auth/react";

export const getPermissionComponent = (permittedRole) => {
  const userRole = [];
  const { data: session, status } = useSession();

  if (typeof window !== "undefined" && status === "authenticated") {
    const data = session.user.role.roleName;
    data ? userRole.push(data) : [];
  }

  const similarRoles =
    userRole.filter((userRole) => permittedRole.includes(userRole)) || [];

  return similarRoles.length !== 0;
};
