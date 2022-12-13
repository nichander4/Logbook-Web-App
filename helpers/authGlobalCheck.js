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

  // console.log(session);
  const userRole = [];
  const router = useRouter();

  if (permittedRole === null) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  if (typeof window !== "undefined") {
    const data = JSON.parse(localStorage.getItem("userRoles"));
    if (_.isEmpty(data) && status === "authenticated") {
      fetchUserRolesFunction(session);
    }

    data ? (userRole = data.map((data) => data.role.name)) : [];
  }

  const similarRoles =
    userRole.filter((userRole) => permittedRole.includes(userRole)) || [];

  if (similarRoles.length === 0 && status === "authenticated") {
    return <UnauthorizedAccess />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
