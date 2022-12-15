import { React, useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import HomeIntern from 'components/home/Intern/home';
import HomeMentor from 'components/home/mentor/home';
import HomeHR from 'components/home/HR/home';

const Home = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {session?.user.role.roleName == 'Mentor' ? (
        <HomeMentor />
      ) : session?.user.role.roleName == 'Intern' ? (
        <HomeIntern />
      ) : (
        <HomeHR />
      )}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;

  const sessionData = await getSession(ctx);

  if (!sessionData) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}

export default Home;
