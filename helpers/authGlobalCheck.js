import axios from "axios";
import { API_URL } from "constant";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import UnauthorizedAccess from "pages/UnauthorizedAccess";
import React, { useEffect, useState } from "react";
import { getHeaders } from "./utils";
import _ from "lodash";

const fetchUserRolesFunction = async (dataSession) => {
  let fetchUserRoles;
  const [flagCount, setFlagCount] = useState(0);

  if (flagCount <= 1) {
    try {
      fetchUserRoles = await axios({
        url: `${API_URL}/api/master/User/${dataSession.user.id}`,
        method: "get",
        headers: getHeaders(dataSession.user.token),
      });
      setFlagCount(flagCount + 1);

      localStorage.setItem(
        "userRoles",
        JSON.stringify(fetchUserRoles.data.userRoles)
      );
    } catch (error) {
      alert("Something went wrong");
    }
  }
};

export const Auth = ({ children, permittedRole }) => {
  const { data: session, status } = useSession();
  const userRole = []

  const router = useRouter();

  if (permittedRole === null) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  if (typeof window !== "undefined" && status === "authenticated") {
    const data = session.user.role.roleName;
    data ? userRole.push(data) : [];
  }

  console.log(userRole);

  const similarRoles =
    userRole.filter((userRole) => permittedRole.includes(userRole)) || [];

  if (similarRoles.length === 0 && status === "authenticated") {
    return <UnauthorizedAccess />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
