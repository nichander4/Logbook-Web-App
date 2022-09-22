import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Media,
  Label,
  Row,
  Col,
  Input,
  FormGroup,
  Alert,
  Form,
  Card,
  CardBody,
} from "reactstrap";

const UserInformationForm = () => {
  const { register, errors, handleSubmit, control, setValue, trigger } =
    useForm();

  const [avatar, setAvatar] = useState(
    "/images/portrait/small/avatar-s-14.jpg"
  );

  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <Card>
      <CardBody>
        <Media className="d-flex align-items-center">
          <Media className="mr-25" left>
            <Media
              object
              className="rounded mr-50"
              src={avatar}
              alt="Generic placeholder image"
              height="120"
              width="120"
            />
          </Media>
          <Media className="ml-1" body>
            <h4 className="mb-1">John Doe</h4>
            <Button.Ripple tag={Label} className="mr-75" color="primary">
              Edit
              <Input type="file" onChange={onChange} hidden accept="image/*" />
            </Button.Ripple>
            <Button.Ripple color="secondary" outline>
              Remove
            </Button.Ripple>
          </Media>
        </Media>
        <Form className="mt-2" onSubmit={() => {}}>
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label for="userID">User ID</Label>
                <Controller
                  // defaultValue={data.username}
                  control={control}
                  as={Input}
                  id="userID"
                  name="userID"
                  placeholder="Eleanor Aguilar"
                  innerRef={register({ required: true })}
                  onChange={(e) => setValue("userID", e.target.value)}
                  className={errors.userID ? "is-invalid" : ""}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="jobTitle">Job Title</Label>
                <Controller
                  // defaultValue={data.fullName}
                  control={control}
                  as={Input}
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="Admin"
                  innerRef={register({ required: true })}
                  onChange={(e) => setValue("jobTitle", e.target.value)}
                  className={errors.jobTitle ? "is-invalid" : ""}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="name">Name</Label>
                <Controller
                  // defaultValue={data.email}
                  control={control}
                  as={Input}
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  innerRef={register({ required: true })}
                  onChange={(e) => setValue("name", e.target.value)}
                  className={errors.name ? "is-invalid" : ""}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="company">Company</Label>
                <Controller
                  // defaultValue={data.company}
                  control={control}
                  as={Input}
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  innerRef={register({ required: true })}
                  onChange={(e) => setValue("company", e.target.value)}
                  className={errors.company ? "is-invalid" : ""}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="email">E-mail</Label>
                <Controller
                  // defaultValue={data.email}
                  control={control}
                  as={Input}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="John Doe"
                  innerRef={register({ required: true })}
                  onChange={(e) => setValue("email", e.target.value)}
                  className={errors.email ? "is-invalid" : ""}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default UserInformationForm;
