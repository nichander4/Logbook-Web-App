import { React, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { connect } from 'react-redux';
import LogbookForHR from 'components/Logbook/HR/Intership_Logbook_List';
import LogbookForMentor from 'components/Logbook/mentor/Intership_Logbook_List';
// import LogbookForIntern from 'components/Logbook/intern/logbookIntern';
import { wrapper } from 'redux/store';
import { useRouter } from 'next/router';

const Logbook = ({ user }) => {
  const router = useRouter();

  useEffect(() => {
    if (user.role.roleName == 'Intern') {
      router.push(`/logbook/${user.userName}/${user.id}`);
    }
  }, []);

  return (
    <>
      {user.role.roleName == 'Mentor' ? (
        <LogbookForMentor token={user.token} />
      ) : user.role.roleName == 'HR' ? (
        <LogbookForHR token={user.token} />
      ) : (
        ''
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
export default connect((state) => state)(Logbook);
