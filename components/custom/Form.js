import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label,
  FormFeedback,
  Row,
} from "reactstrap";
import { useState } from "react";
import Select from "react-select";
import { selectThemeColors } from "src/utility/Utils";
import Flatpickr from "react-flatpickr";
import { Calendar } from "react-feather";

const FormCustom = () => {
  const [picker, setPicker] = useState(new Date());
  const countryOptions = [{ value: "Placeholder", label: "Placeholder" }];
  return (
    <Card className="card-form">
      <CardHeader>
        <div className="content-header">
          <h5 className="mb-0">Document Details</h5>
          <small className="text-muted">
            Be sure to check "Document Details" when you have finished
          </small>
        </div>
      </CardHeader>
      <CardBody className="mb-0">
        <Form>
          <FormGroup md="6">
            <Label className="form-label">Default</Label>
            <Input type="text" placeholder="Placeholder" />
          </FormGroup>
          <FormGroup md="6">
            <Label className="form-label error-input">Error Input</Label>
            <Input
              className="error-input"
              type="text"
              id="invalidState"
              name="invalidState"
              invalid
              placeholder="Placeholder"
            />
            <FormFeedback>Please provide a valid state</FormFeedback>
          </FormGroup>
          <FormGroup className="custom-input-select" md="6">
            <Label className="form-label">Dropdown Input</Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              className="custom-input-color"
              classNamePrefix="select"
              options={countryOptions}
              placeholder="Placeholder"
            />
          </FormGroup>
          <FormGroup md="6">
            <Label className="form-label">Date Picker</Label>
            <Flatpickr
              className="form-control"
              onChange={(date) => setPicker(date)}
              placeholder="Date"
            />
          </FormGroup>
          <FormGroup md="6">
            <Label className="form-label">Radio Input</Label>
            <div className="mb-1">
              <CustomInput
                type="radio"
                id="exampleCustomRadio2"
                name="customRadio"
                inline
                label="Unchecked"
              />
            </div>
            <div className="mb-2">
              <CustomInput
                type="radio"
                id="exampleCustomRadio"
                name="customRadio"
                inline
                label="Checked"
                defaultChecked
              />
            </div>
          </FormGroup>
          <FormGroup md="6">
            <Label className="form-label">Text Area Input</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              rows="5"
              placeholder="Textarea"
            />
          </FormGroup>
          <FormGroup md="6" className="mb-1">
            <Label className="form-label">File Input</Label>
            <CustomInput
              className="input-file-custom"
              type="file"
              id="exampleCustomFileBrowser"
              name="customFile"
            />
          </FormGroup>
          <FormGroup md="6" className="mb-3">
            <CustomInput
              inline
              type="checkbox"
              id="exampleCustomCheckbox2"
              label="Checkbox"
            />
          </FormGroup>
          <FormGroup className="mb-0" row>
            <Col className="d-flex button-form" md={{ size: 9 }}>
              <Button className="mr-1 button-back" type="reset">
                Back
              </Button>
              <Button
                color="primary"
                type="submit"
                onClick={(e) => e.preventDefault()}
              >
                Next
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
export default FormCustom;
