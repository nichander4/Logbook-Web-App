import { React } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { connect } from 'react-redux';
import HomeIntern from 'components/home/Intern/home';
import HomeMentor from 'components/home/mentor/home';
import HomeHR from 'components/home/HR/home';
import { wrapper } from 'redux/store';

const Home = ({ user }) => {
  return (
    <>
      {user.role.roleName == 'Mentor' ? (
        <HomeMentor />
      ) : user.role.roleName == 'Intern' ? (
        <HomeIntern />
      ) : (
        <HomeHR token={user.token} />
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { req, query } = ctx;
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
      props: {
        user: sessionData.user
      }
    };
  }
);
export default connect((state) => state)(Home);
