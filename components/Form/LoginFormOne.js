import Link from "next/link";
import { Facebook, Twitter, Mail, GitHub } from "react-feather";
import InputPasswordToggle from "src/@core/components/input-password-toggle";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import Select from "react-select";
import Image from "next/image";

const LoginFormOne = () => {
  const selectOptions = [{ value: "kalbe.dom", label: "kalbe.dom" }];

  return (
    <Card className="mb-0">
      <CardBody>
        <Link href="/">
          <a className="brand-logo">
            <Image src="/images/logo/kalbe-logo.png" width={113} height={51} />
          </a>
        </Link>
        <Form
          className="auth-login-form mt-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormGroup>
            <Label className="form-label" for="login-username">
              Username
            </Label>
            <Input
              type="text"
              id="login-username"
              placeholder="john.doe"
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <div className="d-flex justify-content-between">
              <Label className="form-label" for="login-password">
                Password
              </Label>
              <Link href="/authentication/forgot_password">
                <a>
                  <small>Forgot Password?</small>
                </a>
              </Link>
            </div>
            <InputPasswordToggle
              className="input-group-merge"
              id="login-password"
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="login-dom">
              DOM
            </Label>
            <Select
              theme="primary"
              className="react-select"
              classNamePrefix="select"
              defaultValue={selectOptions[0]}
              options={selectOptions}
              isClearable={false}
            />
          </FormGroup>
          <Button.Ripple color="primary" block className="mt-3">
            Login
          </Button.Ripple>
        </Form>
        <hr className="mt-5" />
        <div className="auth-footer-btn d-flex flex-column justify-content-center align-items-center">
          <p className="text-dark m-0">[Application Name] Version 1.0</p>
          <p className="text-dark m-0">&#169;2021 - PT. Kalbe Farma Tbk.</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default LoginFormOne;
