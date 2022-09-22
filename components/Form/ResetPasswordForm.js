import Link from "next/link";
import { ChevronLeft } from "react-feather";
import InputPassword from "src/@core/components/input-password-toggle";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import Image from "next/image";

const ResetPasswordForm = () => {
  return (
    <Card className="mb-0">
      <CardBody>
        <Link href="/">
          <a className="brand-logo">
            <Image src="/images/logo/kalbe-logo.png" width={113} height={51} />
          </a>
        </Link>
        <Form
          className="auth-reset-password-form mt-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormGroup>
            <Label className="form-label" for="new-password">
              New Password
            </Label>
            <InputPassword
              className="input-group-merge"
              id="new-password"
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="confirm-password">
              Confirm Password
            </Label>
            <InputPassword
              className="input-group-merge"
              id="confirm-password"
            />
          </FormGroup>
          <Button.Ripple color="primary" block className="mt-3">
            Reset Password
          </Button.Ripple>
        </Form>
        <hr className="mt-3" />
        <div className="auth-footer-btn d-flex flex-column justify-content-center align-items-center">
          <p className="text-dark m-0">[Application Name] Version 1.0</p>
          <p className="text-dark m-0">&#169;2021 - PT. Kalbe Farma Tbk.</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ResetPasswordForm;
