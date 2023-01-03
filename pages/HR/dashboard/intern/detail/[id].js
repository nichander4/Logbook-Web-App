import VerticalLayout from 'src/@core/layouts/VerticalLayout';
import InternForm from 'components/HR/dashboard/viewInternForm';
import { wrapper } from 'redux/store';
import { reauthenticate } from 'redux/actions/auth';
import { getInternById } from 'redux/actions/intern_action';
import { connect } from 'react-redux';
import { getSession } from 'next-auth/react';

const detailInternForm = ({ dataIntern, token }) => {
  return (
    <VerticalLayout>
       <title>{dataIntern.userName}'s View Form </title>
      <InternForm dataIntern={dataIntern} token={token} />
    </VerticalLayout>
  );
};

detailInternForm.auth = {
  role: ["HR"],
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
    await store.dispatch(getInternById(query.id));

    const dataIntern = store.getState().intern;

    return {
      props: {
        dataIntern,
        token: sessionData.user.token
      }
    };
  }
);

export default connect((state) => state)(detailInternForm);
