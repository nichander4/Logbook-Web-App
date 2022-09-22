import {
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
import { Fragment, useState } from "react";
import Select from "react-select";
import { selectThemeColors, isObjEmpty } from "src/utility/Utils";
import Flatpickr from "react-flatpickr";
import { Calendar } from "react-feather";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const FormCustom = ({ stepper }) => {
  const [picker, setPicker] = useState(new Date());
  const countryOptions = [{ value: "Placeholder", label: "Placeholder" }];

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0">Document Details</h5>
        <small className="text-muted">
          Be sure to check "Document Details" when you have finished
        </small>
      </div>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md="8">
            <Label className="form-label">Default</Label>
            <Input type="text" placeholder="Placeholder" />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md="8">
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
        </Row>
        <Row>
          <FormGroup tag={Col} md="8" className="custom-input-select">
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
        </Row>
        <Row>
          <FormGroup tag={Col} md="8">
            <Label className="form-label">Date Picker</Label>
            <Flatpickr
              className="form-control"
              onChange={(date) => setPicker(date)}
              placeholder="Date"
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md="8">
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
        </Row>
        <Row>
          <FormGroup tag={Col} md="8">
            <Label className="form-label">Text Area Input</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              rows="5"
              placeholder="Textarea"
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md="8" className="mb-1">
            <Label className="form-label">File Input</Label>
            <CustomInput
              className="input-file-custom"
              type="file"
              id="exampleCustomFileBrowser"
              name="customFile"
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md="8" className="mb-3">
            <CustomInput
              inline
              type="checkbox"
              id="exampleCustomCheckbox2"
              label="Checkbox"
            />
          </FormGroup>
        </Row>
        <Row className="justify-content-md-center">
          <FormGroup className="mb-0">
            <Col>
              <Button
                className="mr-1 button-back"
                type="reset"
                onClick={() => stepper.previous()}
              >
                Back
              </Button>
              <Button
                color="primary"
                type="submit"
                onClick={() => stepper.next()}
              >
                Next
              </Button>
            </Col>
          </FormGroup>
        </Row>
      </Form>
    </Fragment>
  );
};
export default FormCustom;
