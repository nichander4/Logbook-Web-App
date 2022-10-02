import Link from "next/link";
import Image from "next/image";
import InputPasswordToggle from "src/@core/components/input-password-toggle";
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
// import { getCsrfToken, getSession } from "next-auth/react";

const LoginPage = (props) => {
//   const { csrfToken, authError } = props;

  return (
    <div className="auth-wrapper auth-v2">
      <Row className="auth-inner m-0">
        {/* <Col
          className="d-none d-lg-flex align-items-center p-5 bg-dark"
          lg="6"
          sm="12"
        > */}
          {/* <div className="w-100 d-lg-flex align-items-center justify-content-center px-5"> */}
            {/* <img className="img-fluid" src={source} alt="Login V2" /> */}
          {/* </div> */}
          
        {/* </Col> */}
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="12"
          sm="12"
        >
          <Col
            className="h-100 d-flex flex-column justify-content-between px-xl-2 mx-auto"
            sm="8"
            md="6"
            lg="8"
          >
            <div className="my-auto">
              <Link href="/">
                <a className="d-flex justify-content-center">
                  <Image
                    src="/images/logo/kalbe-logo.png"
                    width={113}
                    height={51}
                  />
                </a>
              </Link>
              <CardTitle
                tag="h2"
                className="text-center font-weight-bold mt-2"
              >
                Attendance and Logbook
              </CardTitle>
              <CardText className="text-center mb-4">
              Aplikasi ini hanya diperuntukan kepada pegawai yang melakukan internship di PT. XYZ
              </CardText>
              <Form
                method="POST"
                action="/api/auth/callback/credentials"
                className="auth-login-form mt-2"
              >
                <input
                  name="csrfToken"
                  type="hidden"
                //   defaultValue={csrfToken}
                />
                <FormGroup>
                  <Label className="form-label" for="login-email">
                    Username
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Input username"
                    autoFocus
                  />
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between mt-2">
                    <Label className="form-label" for="password">
                      Password
                    </Label>
                    {/* <Link href="/auth/forgot_password">
                      <a>
                        <small>Forgot Password?</small>
                      </a>
                    </Link> */}
                  </div>
                  <InputPasswordToggle
                    className="input-group-merge"
                    id="password"
                    name="password"
                  />
                </FormGroup>
                <p className="text-danger text-center my-2">
                  {/* {authError &&
                    "User is not registered or password is incorrect."} */}
                </p>
                <Button.Ripple
                  type="submit"
                  color="primary"
                  block
                  className="mt-2"
                >
                  Login
                </Button.Ripple>
              </Form>
              {/* <p className="text-center mt-2">
                <span className="mr-25">Don't have account?</span>
                <Link href="/auth/register">
                  <a>
                    <span>Create an account</span>
                  </a>
                </Link>
              </p> */}
            </div>
            <div className="auth-footer-btn d-flex flex-column justify-content-center align-items-center my-2">
              <p className="m-0">Attendance Logbook ver 1.0</p>
              <p className="m-0">&#169;2022 - PT. XYZ.</p>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

// export async function getServerSideProps(ctx) {
//   const { query } = ctx;

//   const sessionData = await getSession(ctx);

//   if (sessionData) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       csrfToken: await getCsrfToken(ctx),
//       authError: ctx.query.error ? true : false,
//     },
//   };
// }

export default LoginPage;
