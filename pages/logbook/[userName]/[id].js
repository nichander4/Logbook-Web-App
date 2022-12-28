import VerticalLayout from "src/@core/layouts/VerticalLayout";
import LogbookTable from "components/Logbook/logbookList";
import { getSession } from "next-auth/react";
import { connect } from "react-redux";
import { wrapper } from "redux/store";
import { reauthenticate } from "redux/actions/auth";
import { getInternById } from "redux/actions/intern_action";

const Logbook = ({ user, token, dataIntern }) => {
  return <LogbookTable user={user} token={token} dataIntern={dataIntern}/>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { req, query } = ctx;
    const sessionData = await getSession(ctx);

    if (!sessionData) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }

    store.dispatch(reauthenticate(sessionData.user.token));
    await store.dispatch(getInternById(query.id));

    const dataIntern = store.getState().intern;

    return {
      props: {
        user: sessionData.user,
        token: sessionData.user.token,
        dataIntern
      },
    };
  }
);

export default connect((state) => state)(Logbook);
