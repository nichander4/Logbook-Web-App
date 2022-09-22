import Link from "next/link";
import { Facebook, Twitter, Mail, GitHub, User, Lock } from "react-feather";
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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import Image from "next/image";

const LoginFormTwo = () => {
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
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <User size={18} className="text-muted" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                type="text"
                id="login-username"
                placeholder="Username"
                autoFocus
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputPasswordToggle
              prependLogo
              className="mt-2"
              id="login-password"
              placeholder="Password"
            />
          </FormGroup>
          <Button.Ripple color="primary" block className="mt-3">
            Login
          </Button.Ripple>
        </Form>
        <hr className="mt-3"/>
        <div className="auth-footer-btn d-flex flex-column justify-content-center align-items-center">
          <p className="text-dark m-0">[Application Name] Version 1.0</p>
          <p className="text-dark m-0">&#169;2021 - PT. Kalbe Farma Tbk.</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default LoginFormTwo;
