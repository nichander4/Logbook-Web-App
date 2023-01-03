import VerticalLayout from 'src/@core/layouts/VerticalLayout';
import MentorForm from 'components/HR/dashboard/viewMentorForm';
import { wrapper } from 'redux/store';
import { reauthenticate } from 'redux/actions/auth';
import { getMentorById } from 'redux/actions/mentor_action';
import { connect } from 'react-redux';
import { getSession } from 'next-auth/react';

const detailMentorForm = ({dataMentor, token}) => {
  return (
    <VerticalLayout>
       <title>{dataMentor.userName}'s View Form </title>
      <MentorForm dataMentor={dataMentor} token={token}/>
    </VerticalLayout>
  );
};

detailMentorForm.auth = {
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
    await store.dispatch(getMentorById(query.id));

    const dataMentor = store.getState().mentor;

    return {
      props: {
        dataMentor,
        token: sessionData.user.token
      }
    };
  }
);

export default connect((state) => state)(detailMentorForm);