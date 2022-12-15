// import ConfirmAlert from "components/Alert/ConfirmAlert";
// import ErrorNotification from "components/Alert/ErrorNotification";
// import InfoNotification from "components/Alert/InfoNotification";
// import SuccessNotification from "components/Alert/SuccessNotification";
import { serialize, parse } from "cookie";
import cookie from "js-cookie";
import { reauthenticate } from "redux/actions/auth";
// import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

const TOKEN_NAME = "token";
const MAX_AGE = 30 * 24 * 60 * 60;

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 30,
      path: "/",
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};

export const checkServerSideCookie = (ctx, actions) => {
  // if (ctx.isServer) {
  //   if (ctx.req.headers.cookie) {
  const token = getCookie("token", ctx.req);

  actions.dispatch(reauthenticate(token));
  //   }
  // }
};

export const setTokenCookie = (res, token) => {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
};

export const removeTokenCookie = (res) => {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
};

export const parseCookies = (req) => {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || "");
};

export const getTokenCookie = (req) => {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
};

export const getHeaders = (token) => {
  const header = {
    AppAuthorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    // app_id: "64aea8cf",
    // app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
  };

  return header;
};

export const getHeadersSupplier = () => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    app_id: "64aea8cf",
    app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
  };

  return header;
};

export const getFileUploadHeaders = () => {
  const header = {
    Accept: "*/*",
    // "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    // Origin: "http://localhost:3000",
  };

  return header;
};

export const loadState = () => {
  try {
    const serializedState = {};

    if (typeof window !== "undefined") {
      serializedState = localStorage.getItem("state");
    }

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);

    if (typeof window !== "undefined") {
      localStorage.setItem("state", serializedState);
    }
  } catch (error) {
    console.log(error);
  }
};

export const convertToIDR = (nominal) => {
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(nominal);
  } catch (error) {
    console.log(error);
  }
};

export const thousandFormat = (number) => {
  try {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  } catch (error) {
    console.log(error);
  }
};

export function debounce(func, delay) {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
}

// export const showSuccessNotification = (title, msg, onConfirm = () => {}) => {
//   return MySwal.fire({
//     position: "center",
//     html: (
//       <SuccessNotification
//         onClose={() => {
//           MySwal.close();
//           onConfirm();
//         }}
//         onConfirm={() => {
//           MySwal.close();
//           onConfirm();
//         }}
//         title={title}
//         description={msg}
//       />
//     ),
//     showDenyButton: false,
//     showCancelButton: false,
//     showConfirmButton: false,
//     padding: "0",
//     allowOutsideClick: false,
//   });
// };

// export const errorNotification = (title, msg, onConfirm = () => {}) => {
//   return MySwal.fire({
//     position: "center",
//     html: (
//       <ErrorNotification
//         title={title}
//         description={msg}
//         onClose={() => {
//           MySwal.close();
//           onConfirm();
//         }}
//         onConfirm={() => {
//           MySwal.close();
//           onConfirm();
//         }}
//       />
//     ),
//     showDenyButton: false,
//     showCancelButton: false,
//     showConfirmButton: false,
//     padding: "0",
//     allowOutsideClick: false,
//   });
// };

// export const infoNotification = (name, errorMsg, onConfirm = () => {}) => {
//   return MySwal.fire({
//     position: "center",
//     html: (
//       <InfoNotification
//         title={name}
//         description={errorMsg}
//         onClose={() => {
//           MySwal.close();
//           onConfirm();
//         }}
//         onConfirm={() => {
//           MySwal.close();
//           onConfirm();
//         }}
//       />
//     ),
//     showDenyButton: false,
//     showCancelButton: false,
//     showConfirmButton: false,
//     padding: "0",
//     allowOutsideClick: false,
//   });
// };

// export const confirmAlertProceed = async (
//   title,
//   description,
//   color = "warning",
//   onConfirm = () => {}
// ) => {
//   MySwal.close();
//   return MySwal.fire({
//     position: "center",
//     html: (
//       <ConfirmAlert
//         onClose={() => {
//           MySwal.close();
//         }}
//         onConfirm={async () => {
//           MySwal.close();
//           onConfirm();
//         }}
//         title={title}
//         description={description}
//         color={color}
//         newButton={true}
//       />
//     ),
//     showDenyButton: false,
//     showCancelButton: false,
//     showConfirmButton: false,
//     padding: "0",
//     allowOutsideClick: false,
//   });
// };
