import VerticalLayout from 'src/@core/layouts/VerticalLayout';
import LogbookTable from 'components/Logbook/logbookList';
import { getSession } from 'next-auth/react';
import { connect } from 'react-redux';
import { wrapper } from 'redux/store';

const Logbook = ({ user }) => {
  return <LogbookTable user={user} />;
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
