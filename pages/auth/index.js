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
  Card,
} from "reactstrap";
import { useState } from "react";
import { getCsrfToken, getSession, signIn } from "next-auth/react";
import { login } from "helpers/Login";
// import { getCsrfToken, getSession } from "next-auth/react";

const LoginPage = ({ csrfToken, authError }) => {
  //   const { csrfToken, authError } = props;
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const HandleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: userInfo.username,
      password: userInfo.password,
    });

    console.log(res);
  };

  return (
    <div className="auth-wrapper auth-v2">
      <title>Login</title>
      <Row className="auth-inner m-0 d-flex justify-content-center bg-light">
     
          <Card
            className="d-flex flex-column mt-lg-2 mt-md-2 px-2 mx-auto border border-primary rounded bg-white"
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
                // method="POST"
                // action="/api/auth/callback/credentials"
                className="auth-login-form mt-2"
                onSubmit={HandleSubmit}
              >
                <input name="csrfToken" type="hidden" value={csrfToken} />

                <FormGroup>
                  <Label className="form-label" for="login-email">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Input Email"
                    autoFocus
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, username: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <div className="d-flex justify-content-between mt-2"> */}
                  <Label className="form-label" for="password">
                    Password
                  </Label>
                  {/* <Link href="/auth/forgot_password">
                      <a>
                        <small>Forgot Password?</small>
                      </a>
                    </Link> */}
                  <InputPasswordToggle
                    className="input-group-merge"
                    id="password"
                    name="password"
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, password: e.target.value });
                    }}
                  />
                  {/* </div> */}
                </FormGroup>
                <p className="text-danger text-center my-2">
                  {authError &&
                    "User is not registered or password is incorrect."}
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
       
      </Row>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;

  const sessionData = await getSession(ctx);

  if (sessionData) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(ctx),
      authError: ctx.query.error ? true : false,
    },
  };
}

export default LoginPage;
