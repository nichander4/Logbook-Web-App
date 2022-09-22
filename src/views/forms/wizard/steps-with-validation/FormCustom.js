import {
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label,
  Card,
  Row,
  Table,
} from "reactstrap";
import { MoreVertical, Plus, Download } from "react-feather";
import { Fragment, useState } from "react";
import Select from "react-select";
import { selectThemeColors, isObjEmpty } from "src/utility/Utils";
import Flatpickr from "react-flatpickr";
import { Calendar } from "react-feather";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Badge from "reactstrap/lib/Badge";
import ReactPaginate from "react-paginate";

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
        <FormGroup row className="mb-3">
          <Col sm="12">
            <Label sm="1" for="name" className="mr-4">
              Site
            </Label>
            <CustomInput inline type="checkbox" id="cb1" label="Kalbe Farma" />
            <CustomInput inline type="checkbox" id="cb2" label="Dankos Farma" />
            <CustomInput
              inline
              type="checkbox"
              id="cb3"
              label="Global Onkolab Farma"
            />
          </Col>
          <Col sm="12">
            <Label sm="1" for="name" className="mr-4"></Label>
            <CustomInput inline type="checkbox" id="cb4" label="Kalbe Farma" />
            <CustomInput inline type="checkbox" id="cb5" label="Dankos Farma" />
            <CustomInput
              inline
              type="checkbox"
              id="cb6"
              label="Global Onkolab Farma"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="mb-3">
          <Label sm="2" for="name"></Label>
          <Col sm="8">
            <Select
              theme={selectThemeColors}
              isClearable={false}
              className="custom-input-color"
              classNamePrefix="select"
              options={countryOptions}
              placeholder="Placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="mb-3">
          <Label sm="2" for="name"></Label>
          <Col sm="8">
            <Select
              theme={selectThemeColors}
              isClearable={false}
              className="custom-input-color"
              classNamePrefix="select"
              options={countryOptions}
              placeholder="Placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="mb-3">
          <Label sm="2" for="name">
            Type
          </Label>
          <Col sm="8">
            <Select
              theme={selectThemeColors}
              isClearable={false}
              className="custom-input-color"
              classNamePrefix="select"
              options={countryOptions}
              placeholder="Placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="mb-3">
          <Label sm="2" for="name">
            Material/ Product Name
          </Label>
          <Col sm="8">
            <Input type="text" placeholder="Placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row className="mb-3">
          <Label sm="2" for="name">
            Material/ Product Name
          </Label>
          <Card className="pt-2" style={{ border: "1px solid #d8d6de" }}>
            <Col sm="12">
              <Table responsive className="table border-bottom">
                <thead>
                  <tr>
                    <th className="text-center px-2 align-middle">Name</th>
                    <th className="text-center px-2 align-middle">Site</th>
                    <th className="text-center align-middle">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center" }}>Hemapo</td>
                    <td style={{ textAlign: "center" }}>Kalbe Farma</td>
                    <td style={{ textAlign: "center" }}>
                      <MoreVertical className="mr-50" size={25} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>BPM-AHD-2021.000</td>

                    <td style={{ textAlign: "center" }}>7 Feb 2021</td>
                    <td style={{ textAlign: "center" }}>
                      <MoreVertical className="mr-50" size={25} />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Row className="mx-0 ml-2 mb-2 mt-3">
                <Col
                  className="d-flex align-items-center justify-content-end mt-0"
                  md="12"
                  sm="12"
                >
                  <Button color="primary" type="submit">
                    Add New
                  </Button>
                </Col>
              </Row>
            </Col>
          </Card>
        </FormGroup>

        <Row className="justify-content-md-end">
          <FormGroup className="mb-0">
            <Col>
              <Button
                color="primary"
                type="submit"
                onClick={() => stepper.next()}
              >
                Save Changes
              </Button>
            </Col>
          </FormGroup>
        </Row>
      </Form>
    </Fragment>
  );
};
export default FormCustom;
