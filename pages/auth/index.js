import Link from 'next/link';
import Image from 'next/image';
import InputPasswordToggle from 'src/@core/components/input-password-toggle';
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
  Card
} from 'reactstrap';
// import { getCsrfToken, getSession } from "next-auth/react";

const LoginPage = (props) => {
  //   const { csrfToken, authError } = props;

  return (
    <div className="auth-wrapper auth-v2">
      <Row className="auth-inner m-0 d-flex justify-content-center bg-light">
        <Col
          className="d-flex justify-content-center align-items-center auth-bg px-2 p-lg-5 bg-light"
          lg="6"
          sm="6"
        >
          <Card
            className="h-100 w-75 d-flex flex-column  px-xl-2 mx-auto border border-primary rounded bg-white"
            sm="6"
            md="6"
            lg="6"
          >
            <div className="my-auto">
              <Link href="/">
                <a className="d-flex justify-content-center">
                  <Image
                    src="/images/logo/logoxyz.png"
                    width={113}
                    height={51}
                  />
                </a>
              </Link>
              <CardTitle tag="h2" className="text-center font-weight-bold mt-2">
                Attendance and Logbook
              </CardTitle>
              <CardText className="text-center mb-4">
                Aplikasi ini hanya diperuntukan kepada pegawai yang melakukan
                internship di PT. XYZ
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
            </div>
            <div className="auth-footer-btn d-flex flex-column justify-content-center align-items-center my-2">
              <p className="m-0">Attendance Logbook ver 1.0</p>
              <p className="m-0">&#169;2022 - PT. XYZ.</p>
            </div>
          </Card>
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
