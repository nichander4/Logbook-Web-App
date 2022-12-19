import VerticalLayout from 'src/@core/layouts/VerticalLayout';
import AddUserForm from 'components/HR/dashboard/addUser';
import { wrapper } from 'redux/store';
import { reauthenticate } from 'redux/actions/auth';
import { getInternById } from 'redux/actions/intern_action';
import { connect } from 'react-redux';
import { getSession } from 'next-auth/react';

const addUserForm = (user) => {
  return (
    <VerticalLayout>
      <AddUserForm user={user} />
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

    store.dispatch(reauthenticate(sessionData.user.token));
    // await store.dispatch(getInternById(query.id));

    const dataIntern = store.getState().intern;

    return {
      props: {
        // dataIntern,
        user: sessionData.user
      }
    };
  }
);

export default connect((state) => state)(addUserForm);
