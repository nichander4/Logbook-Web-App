import BreadCrumbs from 'components/custom/BreadcrumbCustom';
import React, { useEffect, useState, useRef } from 'react';
import {
  Col,
  Row,
  Button,
  FormGroup,
  CustomInput,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ButtonGroup
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomForm from 'components/Form/CustomForm';
import { ArrowLeft, Calendar } from 'react-feather';
import { getAllMentor } from 'redux/actions/lov';
// import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch, connect } from 'react-redux';
// import { wrapper } from 'redux/store';
import { reauthenticate } from 'redux/actions/auth';

// import { API_FILES_STAGING_URL } from 'constant';

import ComboAlert from 'components/Alert/ComboAlert';
import moment from 'moment';
import { updateIntern } from 'redux/actions/intern_action';

const InternForm = (props) => {
  const { dataIntern, token } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const [lovMentor, setLovMentor] = useState([]);

  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');


  useEffect(() => {
    dispatch(reauthenticate(token));

    dispatch(getAllMentor()).then((response) => {
      setLovMentor(response.data.data);
    });
  }, []);

  const doSubmit = (data) => {
    const editedData = {
      ...dataIntern,
      userName: data.userName,
      university: data.university,
      department: data.department,
      position: data.position,
      email: data.email,
      mobileNumber: data.mobileNumber,
      rekening: data.rekening,
      mentorId: data.mentorId,
      entryDate: data.entryDate,
      endDate: data.endDate
    };
    dispatch(updateIntern(editedData, dataIntern.id)).then((data) => {
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
      userName: dataIntern.userName,
      university: dataIntern.university,
      department: dataIntern.department,
      position: dataIntern.position,
      email: dataIntern.email,
      mobileNumber: dataIntern.mobileNumber,
      rekening: dataIntern.rekening,
      mentorId: dataIntern.mentorId,
      entryDate: dataIntern.entryDate,
      endDate: dataIntern.endDate
    },
    // validation schema
    validationSchema: Yup.object({
      userName: Yup.string().required('Name Cannot be Empty'),
      university: Yup.string().required('University Cannot be Empty'),
      department: Yup.string().required('Department Cannot be Empty'),
      email: Yup.string().required('Email Cannot be Empty'),
      position: Yup.string().required('Position Cannot be Empty'),
      mobileNumber: Yup.string()
        .required('No. Handphone Cannot be Empty')
        // .integer('Input must be number')
        .min(10, 'Please provide a valid state (10-16 characters)'),
      rekening: Yup.string()
        .required('Rekening Cannot be Empty')
        // .integer('Input must be number')
        .min(10, 'Please provide a valid state (10-16 characters)')
        .max(16, 'Please provide a valid state (10-16 characters)'),
      mentorId: Yup.string().required('Mentor Cannot be Empty'),
      entryDate: Yup.string().required('Entry Date Cannot be Empty'),
      endDate: Yup.string().required('End Date Cannot be Empty')
    }),
    // handle submission
    onSubmit: doSubmit
  });

  console.log(formik)

  return (
    <>
      <BreadCrumbs breadCrumbParent="Dashboard" breadCrumbActive="Intern" />
      <div className="d-flex align-items-center my-3">
        <Button.Ripple
          outline
          type="submit"
          color="danger"
          className="btn-next"
          onClick={() => router.back()}
        >
          <ArrowLeft size={18} />
          <span className="ml-50 align-middle d-sm-inline-block d-none">
            Back to Previous Page
          </span>
        </Button.Ripple>
        <h2 className="m-0 ml-2 pl-2 border-left-dark">Form Intern</h2>
      </div>
      <CustomForm
        header={'Form Input'}
        subheader={'Information Details'}
        formTitle={'Form Intern'}
        formSubtitle={'Be sure to check “Form Intern" before you continue'}
        onSubmitForm={formik.handleSubmit}
      >
        <Row>
          <Col sm="6">
            <Row className="pl-1 mt-2">
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Name</Label>
                  <Input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formik.values.userName}
                    className={`${
                      formik.touched.userName &&
                      formik.errors.userName &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('userName')}
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
                  <Label for="nameVertical">University</Label>
                  <Input
                    type="text"
                    name="university"
                    id="university"
                    value={formik.values.university}
                    className={`${
                      formik.touched.university &&
                      formik.errors.university &&
                      'is-invalid'
                    }`}
                    disabled
                    {...formik.getFieldProps('university')}
                  />
                  {formik.touched.university && formik.errors.university && (
                    <div className="invalid-feedback">
                      {formik.errors.university}
                    </div>
                  )}
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
                    className={`${
                      formik.touched.department &&
                      formik.errors.department &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('department')}
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
              <Col sm="12">
                <FormGroup>
                  <Label>Position</Label>
                  <Input
                    type="text"
                    name="position"
                    id="position"
                    value={formik.values.position}
                    className={`${
                      formik.touched.position &&
                      formik.errors.position &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('position')}
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
                  <Label>Mentor</Label>
                  <CustomInput
                    name="manufacturingSite"
                    type="select"
                    className={`form-control ${
                      formik.touched.mentorId &&
                      formik.errors.mentorId &&
                      'is-invalid'
                    }`}
                    id="rows-per-page"
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('mentorId')}
                    value={formik.values.mentorId}
                  >
                    {lovMentor.map((data) => (
                      <option
                        key={data.id}
                        value={data.id}
                        label={data.userName}
                      >
                        {data.userName}
                      </option>
                    ))}
                  </CustomInput>

                  {formik.touched.mentorId && formik.errors.mentorId && (
                    <div className="invalid-feedback">
                      {formik.errors.mentorId}
                    </div>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </Col>

          <Col sm="6">
            <Row className="pl-1 mt-2">
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    className={`${
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
                    className={`${
                      formik.touched.mobileNumber &&
                      formik.errors.mobileNumber &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('mobileNumber')}
                  />
                  {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                    <div className="invalid-feedback">
                      {formik.errors.mobileNumber}
                    </div>
                  )}
                </FormGroup>
              </Col>

              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Rekening</Label>
                  <Input
                    type="number"
                    name="rekening"
                    id="rekening"
                    value={formik.values.rekening}
                    className={`${
                      formik.touched.rekening &&
                      formik.errors.rekening &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('rekening')}
                  />
                  {formik.touched.rekening && formik.errors.rekening && (
                    <div className="invalid-feedback">
                      {formik.errors.rekening}
                    </div>
                  )}
                </FormGroup>
              </Col>

              <Col sm="12">
                <FormGroup md="6">
                  <Label className="form-label">Entry Date</Label>
                  <InputGroup className="input-group-merge">
                    <Input
                      className="search-table2 d-flex w-50"
                      type="text"
                      name="entryDate"
                      id="entryDate"
                      value={moment(formik.values.entryDate).format(
                        'DD-MM-YYYY'
                      )}
                      options={{
                        dateFormat: 'd M Y'
                      }}
                      placeholder="DD/MM/YYYYY"
                      disabled
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText style={{ backgroundColor: '#EFEFEF' }}>
                        <Calendar size={14} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup md="6">
                  <Label className="form-label">End Date</Label>
                  <InputGroup className="input-group-merge">
                    <Input
                      className="search-table2 d-flex w-50"
                      type="text"
                      name="endDate"
                      id="endDate"
                      value={moment(formik.values.endDate).format('DD-MM-YYYY')}
                      placeholder="DD/MM/YYYYY"
                      options={{
                        dateFormat: 'd M Y'
                      }}
                      disabled
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText style={{ backgroundColor: '#EFEFEF' }}>
                        <Calendar size={14} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <FormGroup row>
          <Button className="d-flex ml-auto" color="info" type="submit">
            Save
          </Button>
        </FormGroup>
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

export default InternForm;
