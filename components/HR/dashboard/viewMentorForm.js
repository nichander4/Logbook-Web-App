import BreadCrumbs from 'components/custom/BreadcrumbCustom';
import React, { useEffect, useState, useRef } from 'react';
import {
  Button,
  Label,
  Row,
  Col,
  Input,
  FormGroup
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomForm from 'components/Form/CustomForm';
import { ArrowLeft} from 'react-feather';
import { updateMentor } from 'redux/actions/mentor_action';
import { useRouter } from 'next/router';
import { useDispatch, connect } from 'react-redux';


import ComboAlert from 'components/Alert/ComboAlert';
import InternTable from './internTableForMentor';

const ViewMentorForm = (props) => {
  const { dataMentor, token } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  const doSubmit = (data) => {
    const editedData = {
      ...dataMentor,
      userName: data.userName,
      department: data.department,
      position: data.position,
      email: data.email,
      mobileNumber: data.mobileNumber,
    };
    dispatch(updateMentor(editedData, dataMentor.id)).then((data) => {
      setAlertStatus(data.status);
      if (data.status === 400) {
        setAlertMessage(data.data);
        setIsAlertModal(true);
      } else if (data.status === 401) {
        setAlertMessage('You are unauthorized to add this data');
        setIsAlertModal(true);
      } else if (data.status >= 200 && data.status < 300) {
        setAlertMessage('Data updated successfully!');
        setIsAlertModal(true);
      } else if (data.status == 409) {
        setAlertMessage('Data is already exist!');
        setIsAlertModal(true);
      } else {
        setAlertMessage('Error occured, please try again later');
        setIsAlertModal(true);
      }
    });
  };

  const formik = useFormik({
    // initial values
    initialValues: {
      userName: dataMentor.userName,
      department: dataMentor.department,
      position: dataMentor.position,
      email: dataMentor.email,
      mobileNumber: dataMentor.mobileNumber,
    },
    // validation schema
    validationSchema: Yup.object({
      userName: Yup.string().required('Name Cannot be Empty'),
      department: Yup.string().required('Department Cannot be Empty'),
      position: Yup.string().required('Position Cannot be Empty'),
      email: Yup.string().required('Email Cannot be Empty'),
      mobileNumber: Yup.string()
      .required('No. Handphone Cannot be Empty')
      // .integer('Input must be number')
      .min(10, 'Please provide a valid state (10-16 characters)'),
    }),
    // handle submission
    onSubmit: doSubmit
  });

  const btnBack_click = () => {
    router.back()
  }

  return (
    <>
      <BreadCrumbs breadCrumbParent="Dashboard" breadCrumbActive="Mentor" />
      <div className="d-flex align-items-center my-3">
        <Button.Ripple
          outline
          type="submit"
          color="danger"
          className="btn-next"
          onClick={btnBack_click}
        >
          <ArrowLeft size={18} />
          <span className="ml-50 align-middle d-sm-inline-block d-none">
            Back to Previous Page
          </span>
        </Button.Ripple>
        <h2 className="m-0 ml-2 pl-2 border-left-dark">Form Mentor</h2>
      </div>
      <CustomForm
        header={'Form Input'}
        subheader={'Information Details'}
        formTitle={'Form Mentor'}
        formSubtitle={'Be sure to check “Form Mentor" before you continue'}
        onSubmitForm={formik.handleSubmit}
      >
        <Row>
          <Col sm="6">
            <Row className="mt-2">
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Name</Label>
                  <Input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formik.values.userName}
                    className={`nameField ${
                      formik.touched.userName &&
                      formik.errors.userName &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('userName')}
                    disabled
                  />
                  {formik.touched.userName && formik.errors.userName && (
                    <div className="invalid-feedback">
                      {formik.errors.userName}
                    </div>
                  )}
                </FormGroup>
              </Col>

              <Col sm="12">
                <FormGroup>
                  <Label>Position</Label>
                  <Input
                    type="text"
                    name="position"
                    id="position"
                    value={formik.values.position}
                    className={`positionField ${
                      formik.touched.position &&
                      formik.errors.position &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('position')}
                    disabled
                  />
                  {formik.touched.position && formik.errors.position && (
                    <div className="invalid-feedback">
                      {formik.errors.position}
                    </div>
                  )}
                  {/* <CustomInput
                    name="site"
                    className="form-control"
                    type="select"
                    placeholder="Site"
                    onChange={formik.handleChange}
                    value={formik.values.site}
                    // disabled
                  >
                    <option
                      value={formik.values.site}
                      label={formik.values.site}
                      hidden
                    >
                      {formik.values.site}
                    </option>
                    {site.map((data) => (
                      <option
                        key={data.value}
                        value={data.value}
                        label={data.label}
                      >
                        {data.label}
                      </option>
                    ))}
                  </CustomInput> */}
                </FormGroup>
              </Col>

              <Col sm="12">
                <FormGroup>
                  <Label>Department</Label>
                  <Input
                    type="text"
                    name="department"
                    id="department"
                    value={formik.values.department}
                    className={`departmentField ${
                      formik.touched.department &&
                      formik.errors.department &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('department')}
                    disabled
                  />
                  {formik.touched.department && formik.errors.department && (
                    <div className="invalid-feedback">
                      {formik.errors.department}
                    </div>
                  )}
                  {/* <CustomInput
                    name="category"
                    className="form-control"
                    type="select"
                    placeholder="Choose Category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    // disabled
                  >
                    <option
                      value={formik.values.category}
                      label={formik.values.category}
                      hidden
                    >
                      {formik.values.category}
                    </option>
                    {category.map((data) => (
                      <option
                        key={data.value}
                        value={data.value}
                        label={data.label}
                      >
                        {data.label}
                      </option>
                    ))}
                  </CustomInput> */}
                </FormGroup>
              </Col>
            </Row>
          </Col>

          <Col sm="6">
            <Row className="mt-2">
   

              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    className={`emailField ${
                      formik.touched.email &&
                      formik.errors.email &&
                      'is-invalid'
                    }`}
                    disabled
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  )}
                </FormGroup>
              </Col>

              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">No. Handphone</Label>
                  <Input
                    type="number"
                    name="mobileNumber"
                    id="mobileNumber"
                    value={formik.values.mobileNumber}
                    className={`mobileNumField ${
                      formik.touched.mobileNumber &&
                      formik.errors.mobileNumber &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('mobileNumber')}
                    disabled
                  />
                  {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                    <div className="invalid-feedback">
                      {formik.errors.mobileNumber}
                    </div>
                  )}
                </FormGroup>
              </Col>

            </Row>
          </Col>
        </Row>

        <InternTable className ='tableIntern'dataMentor={dataMentor} token={token}/>

   
      </CustomForm>
      <ComboAlert
        router={router}
        routerPath="/home"
        isAlertModal={isAlertModal}
        setIsAlertModal={setIsAlertModal}
        alertStatus={alertStatus}
        alertMessage={alertMessage}
      />
    </>
  );
};

// EditRequestBudget.auth = {
//   role: ['Material Planner Spv', 'RnD/TS Data Support Spv']
// };


export default ViewMentorForm;
