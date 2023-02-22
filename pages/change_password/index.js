import VerticalLayout from "src/@core/layouts/VerticalLayout";
import ChangePassword from "components/change_password/form";
import { wrapper } from "redux/store";
import { getSession } from "next-auth/react";

const ChangePasswordForm = ({ user, token }) => {
  return (
    <VerticalLayout>
      <title>Change Password</title>
      <ChangePassword user={user} token={token} />
    </VerticalLayout>
  );
};

export default ChangePasswordForm;

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

    return {
      props: {
        token: sessionData.user.token,
        user: sessionData.user,
      },
    };
  }
);
