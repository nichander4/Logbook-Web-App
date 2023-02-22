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
import { getAllMentor, getAllRoles } from 'redux/actions/lov';
// import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch, connect } from 'react-redux';
// import { wrapper } from 'redux/store';
import { reauthenticate } from 'redux/actions/auth';
import Flatpickr from 'react-flatpickr';
// import { API_FILES_STAGING_URL } from 'constant';

import ComboAlert from 'components/Alert/ComboAlert';
import moment from 'moment';
import { addUser } from 'redux/actions/user_actions';
import InputPasswordToggle from 'src/@core/components/input-password-toggle';

const AddUserForm = (props) => {
  const { token } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const [lovRole, setLovRole] = useState([]);
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

  useEffect(() => {
    dispatch(reauthenticate(token));

    dispatch(getAllRoles()).then((response) => {
      setLovRole(response.data);
    });
  }, []);

  const btnSubmit_click = (data) => {
    let newData = {};
    if (data.roleId == 3) {
      newData = {
        roleId: data.roleId,
        userName: data.userName,
        email: data.email,
        password: data.password,
        university: data.university,
        department: data.department,
        position: data.position,
        mobileNumber: data.mobileNumber,
        rekening: data.rekening,
        mentorId: data.mentorId,
        entryDate: moment(data.entryDate[0]).format('YYYY-MM-DDTHH:mm:ss'),
        endDate: moment(data.endDate[0]).format('YYYY-MM-DDTHH:mm:ss')
      };
    } else {
      newData = {
        roleId: data.roleId,
        userName: data.userName,
        email: data.email,
        password: data.password,
        department: data.department,
        position: data.position,
        mobileNumber: data.mobileNumber
      };
    }

    dispatch(addUser(newData)).then((data) => {
      setAlertStatus(data.status);
      if (data.status === 400) {
        setAlertMessage(data.data);
        setIsAlertModal(true);
      } else if (data.status === 401) {
        setAlertMessage('You are unauthorized to add this data');
        setIsAlertModal(true);
      } else if (data.status >= 200 && data.status < 300) {
        setAlertMessage('Data added successfully!');
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
      roleId: '',
      userName: '',
      university: '',
      department: '',
      position: '',
      email: '',
      mobileNumber: '',
      rekening: '',
      mentorId: '',
      entryDate: '',
      endDate: ''
    },
    // validation schema
    validationSchema: Yup.object({
      roleId: Yup.string().required('Role Cannot be Empty'),
      userName: Yup.string().required('Name Cannot be Empty'),
      university: Yup.string().required('University Cannot be Empty'),
      department: Yup.string().required('Department Cannot be Empty'),
      email: Yup.string()
        .required('Email Cannot be Empty')
        .email('Please Input Valid Email'),
      password: Yup.string()
        .required('Password Cannot be Empty')
        .min(8, 'Please provide a valid state (min 8 characters)'),
      position: Yup.string().required('Position Cannot be Empty'),
      mobileNumber: Yup.string()
        .required('No. Handphone Cannot be Empty')
        // .integer('Input must be number')
        .min(10, 'Please provide a valid state (min 10 characters)'),
      rekening: Yup.string()
        .required('Rekening Cannot be Empty')
        // .integer('Input must be number')
        .min(10, 'Please provide a valid state (10-16 characters)')
        .max(16, 'Please provide a valid state (10-16 characters)'),
      mentorId: Yup.string().required('Mentor Cannot be Empty'),
      entryDate: Yup.date().required('Entry Date Cannot be Empty'),
      endDate: Yup.date().required('End Date Cannot be Empty')
    }),
    // handle submission
    onSubmit: btnSubmit_click
  });

  const btnBack_click = () => {
    router.back()
  }

  useEffect(() => {
    const date = new Date();
    if (formik.values.roleId != 3) {
      formik.setFieldValue('entryDate', date),
        formik.setFieldValue('endDate', date),
        formik.setFieldValue('mentorId', 'null'),
        formik.setFieldValue('rekening', 'nullllllllllllll'),
        formik.setFieldValue('university', 'null');
    } else {
      formik.setFieldValue('entryDate', ''),
        formik.setFieldValue('endDate', ''),
        formik.setFieldValue('mentorId', ''),
        formik.setFieldValue('rekening', ''),
        formik.setFieldValue('university', '');
    }
  }, [formik.values.roleId]);
  return (
    <>
      <BreadCrumbs
        breadCrumbParent="Dashboard"
        breadCrumbActive="Add New User"
      />
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
        <h2 className="m-0 ml-2 pl-2 border-left-dark">Form Add New User</h2>
      </div>
      <CustomForm
        header={'Form Input'}
        subheader={'Information Details'}
        formTitle={'Form Add New User'}
        formSubtitle={
          'Be sure to check “Form Add New User" before you continue'
        }
        onSubmitForm={formik.handleSubmit}
      >
        <Row>
          <Col sm="6">
            <Row className="pl-1 mt-2">
              <Col sm="12">
                <FormGroup>
                  <Label>Role</Label>
                  <CustomInput
                    placeholder="Choose Role"
                    name="roleId"
                    type="select"
                    className={`role form-control ${
                      formik.touched.roleId &&
                      formik.errors.roleId &&
                      'is-invalid'
                    }`}
                    id="rows-per-page"
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('roleId')}
                    value={formik.values.roleId}
                  >
                    {' '}
                    <option hidden>Choose Role</option>
                    {lovRole.map((data) => (
                      <option
                        key={data.id}
                        value={data.id}
                        label={data.roleName}
                      >
                        {data.roleName}
                      </option>
                    ))}
                  </CustomInput>

                  {formik.touched.roleId && formik.errors.roleId && (
                    <div className="invalid-feedback">
                      {formik.errors.roleId}
                    </div>
                  )}
                </FormGroup>
              </Col>

              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Name</Label>
                  <Input
                    autoComplete="off"
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
                  />
                  {formik.touched.userName && formik.errors.userName && (
                    <div className="invalid-feedback">
                      {formik.errors.userName}
                    </div>
                  )}
                </FormGroup>
              </Col>
              {formik.values.roleId == 3 && (
                <Col sm="12">
                  <FormGroup>
                    <Label for="nameVertical">University</Label>
                    <Input
                      type="text"
                      name="university"
                      id="university"
                      value={formik.values.university}
                      className={`universityField ${
                        formik.touched.university &&
                        formik.errors.university &&
                        'is-invalid'
                      }`}
                      {...formik.getFieldProps('university')}
                    />
                    {formik.touched.university && formik.errors.university && (
                      <div className="invalid-feedback">
                        {formik.errors.university}
                      </div>
                    )}
                  </FormGroup>
                </Col>
              )}

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
                    className={`positionField ${
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
              {formik.values.roleId == 3 && (
                <Col sm="12">
                  <FormGroup>
                    <Label>Mentor</Label>
                    <CustomInput
                      name="manufacturingSite"
                      type="select"
                      className={`mentorField form-control ${
                        formik.touched.mentorId &&
                        formik.errors.mentorId &&
                        'is-invalid'
                      }`}
                      id="rows-per-page"
                      placeholder="Choose Mentor"
                      onChange={formik.handleChange}
                      {...formik.getFieldProps('mentorId')}
                      value={formik.values.mentorId}
                    >
                      <option hidden>Choose Mentor</option>
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
              )}
            </Row>
          </Col>

          <Col sm="6">
            <Row className="pl-1 mt-2">
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    className={`emailField ${
                      formik.touched.email &&
                      formik.errors.email &&
                      'is-invalid'
                    }`}
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
                  <Label for="nameVertical">Create Password</Label>
                  <InputPasswordToggle
                    id="password"
                    name="password"
                    value={formik.values.password}
                    className={`passwordField input-group-merge ${
                      formik.touched.password &&
                      formik.errors.password &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('password')}
                  />
                  {/* <Input
                    type="password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    className={`${
                      formik.touched.password &&
                      formik.errors.password &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('password')}
                  /> */}
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">
                      {formik.errors.password}
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
                  />
                  {formik.touched.mobileNumber &&
                    formik.errors.mobileNumber && (
                      <div className="invalid-feedback">
                        {formik.errors.mobileNumber}
                      </div>
                    )}
                </FormGroup>
              </Col>
              {formik.values.roleId == 3 && (
                <>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="nameVertical">Rekening</Label>
                      <Input
                        type="number"
                        name="rekening"
                        id="rekening"
                        value={formik.values.rekening}
                        className={`rekeningField ${
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
                        <Flatpickr
                          name="entryDate"
                          id="entryDate"
                          className={`entry_date form-control datepicker-table2 ${
                            formik.touched.entryDate &&
                            formik.errors.entryDate &&
                            ' is-invalid'
                          }`}
                          placeholder="MM/DD/YYYY"
                          value={new Date(formik.values.entryDate)}
                          options={{
                            dateFormat: 'd M Y'
                          }}
                          onChange={(date) => {
                            formik.setFieldValue('entryDate', date);
                          }}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <Calendar size={14} />
                          </InputGroupText>
                        </InputGroupAddon>
                        {formik.touched.entryDate &&
                          formik.errors.entryDate && (
                            <div className="invalid-feedback">
                              {formik.errors.entryDate}
                            </div>
                          )}
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <FormGroup md="6">
                      <Label className="form-label">End Date</Label>
                      <InputGroup className="input-group-merge">
                        <Flatpickr
                          name="endDate"
                          id="endDate"
                          className={`end_date form-control datepicker-table2 ${
                            formik.touched.endDate &&
                            formik.errors.endDate &&
                            'is-invalid'
                          }`}
                          placeholder="MM/DD/YYYY"
                          value={new Date(formik.values.endDate)}
                          options={{
                            dateFormat: 'd M Y'
                          }}
                          onChange={(date) => {
                            formik.setFieldValue('endDate', date);
                          }}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <Calendar size={14} />
                          </InputGroupText>
                        </InputGroupAddon>
                        {formik.touched.endDate && formik.errors.endDate && (
                          <div className="invalid-feedback">
                            {formik.errors.endDate}
                          </div>
                        )}
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </>
              )}
            </Row>
          </Col>
        </Row>
        <FormGroup row>
          <Button className="d-flex ml-auto" color="primary" type="submit">
            Submit
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

export default AddUserForm;
