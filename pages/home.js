import { React, useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import HomeIntern from "components/home/Intern/home";
import HomeMentor from "components/home/mentor/home";
import HomeHR from "components/home/HR/home";
import { wrapper } from "redux/store";
import { getAllIntern } from "redux/actions/intern_action";
import { data } from "jquery";
import { reauthenticate } from "redux/actions/auth";

const Home = ({ dataIntern, token }) => {
  // const session = useSession();
  // console.log(session);
  // console.log(dataIntern);
  console.log(token);
  const dispatch = useDispatch();

  useEffect(() => {
    // getAllIntern(1, 10, "").then((data) => {
    //   console.log(data);
    // });
    dispatch(reauthenticate(token));
    getAllIntern(1, 10, "");
    console.log("test");
  }, [])
  return (
    // <>
    //   {session?.user.role.roleName == "Mentor" ? (
    //     <HomeMentor />
    //   ) : session?.user.role.roleName == "Intern" ? (
    //     <HomeIntern />
    //   ) : (
    //     <HomeHR />
    //   )}
    // </>
    <></>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (ctx) => {
//     const { query } = ctx;

//     const sessionData = await getSession(ctx);

//     if (!sessionData) {
//       return {
//         redirect: {
//           destination: "/auth",
//           permanent: false,
//         },
//       };
//     }

//     // store.dispatch(reauthenticate(sessionData.user.token));
//     getAllIntern(1, 10, "");

//     return {
//       props: { token: sessionData.user.token },
//     };
//   }
// );

export async function getServerSideProps(ctx) {
  const { query } = ctx;

  const sessionData = await getSession(ctx);

  if (!sessionData) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  getAllIntern(1, 10, "");

  return {
    props: {
      token: sessionData.user.token
    },
  };
}

export default Home;
