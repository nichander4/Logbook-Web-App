import { React, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { connect } from 'react-redux';
import LogbookForHR from 'components/Logbook/HR/Intership_Logbook_List';
import LogbookForMentor from 'components/Logbook/mentor/Intership_Logbook_List';
// import LogbookForIntern from 'components/Logbook/intern/logbookIntern';
import { wrapper } from 'redux/store';
import { useRouter } from 'next/router';
import VerticalLayout from 'src/@core/layouts/VerticalLayout';

const LogbookPage = ({ user }) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (user.role.roleName == 'Intern') {
  //     router.push(`/Logbook/${user.userName}/${user.id}`);
  //   }
  // }, []);

  return (
    <VerticalLayout>
      <title>Logbook</title>
      {user.role.roleName == 'Mentor' ? (
        <LogbookForMentor token={user.token} user={user} />
      ) : user.role.roleName == 'HR' ? (
        <LogbookForHR token={user.token} user={user} />
      ) : (
        ''
      )}
    </VerticalLayout>
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
    if (sessionData.user.role.roleName == 'Intern') {
      return {
        redirect: {
          destination: `/logbook/${sessionData.user.userName}/${sessionData.user.id}`,
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
export default connect((state) => state)(LogbookPage);
