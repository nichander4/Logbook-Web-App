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
// import {
//   getReqBudgetById,
//   updateReqBudget
// } from 'redux/actions/requestBudgetAction';
// import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch, connect } from 'react-redux';
// import { wrapper } from 'redux/store';
// import { reauthenticate } from 'redux/actions/auth';

// import { API_FILES_STAGING_URL } from 'constant';

import ComboAlert from 'components/Alert/ComboAlert';

const InternForm = (props) => {
  const { dataReqBudget, token, userName } = props;
  const router = useRouter();
//   const dispatch = useDispatch();

  const category = [
    { value: 'PM', label: 'PM' },
    { value: 'RM', label: 'RM' }
  ];
  const site = [
    { value: 'HJ', label: 'HJ' },
    { value: 'GOF', label: 'GOF' },
    { value: 'KF', label: 'KF' },
    { value: 'DF', label: 'DF' },
    { value: 'FIMA', label: 'FIMA' },
    { value: 'B7', label: 'B7' },
    { value: 'Saka', label: 'Saka' }
  ];
  const status = [
    { value: 'Open', label: 'Open' },
    { value: 'Closed', label: 'Closed' }
  ];

  const isBudgetUploaded = [
    { label: 'Yes', value: 'Yes', key: 'YesBudget' },
    { label: 'No', value: 'No', key: 'NoBudget' }
  ];
  const isKelompokMaterialUploaded = [
    { label: 'Yes', value: 'Yes', key: 'YesKelm' },
    { label: 'No', value: 'No', key: 'NoKelm' }
  ];

  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');


  //   useEffect(() => {
  //     dispatch(reauthenticate(token));
  //   }, [dispatch]);

  const doSubmit = (data) => {
    // const editedData = {
    //   ...dataReqBudget,
    //   number: data.number,
    //   request: data.request,
    //   category: data.category,
    //   site: data.site,
    //   picUsername: data.picUsername,
    //   createdDate: data.createdDate,
    //   status: data.status,
    //   isBudgetUploaded: data.isBudgetUploaded === 'Yes' ? true : false,
    //   isKelompokMaterialUploaded:
    //     data.isKelompokMaterialUploaded === 'Yes' ? true : false,
    //   ...fileUpload
    // };
    // dispatch(updateReqBudget(editedData, dataReqBudget.id)).then((data) => {
    //   setAlertStatus(data.status);
    //   if (data.status === 400) {
    //     setAlertMessage(data.data);
    //     setIsAlertModal(true);
    //   } else if (data.status === 401) {
    //     setAlertMessage('You are unauthorized to add this data');
    //     setIsAlertModal(true);
    //   } else if (data.status >= 200 && data.status < 300) {
    //     setAlertMessage('Data updated successfully!');
    //     setIsAlertModal(true);
    //   } else if (data.status == 409) {
    //     setAlertMessage('Data is already exist!');
    //     setIsAlertModal(true);
    //   } else {
    //     setAlertMessage('Error occured, please try again later');
    //     setIsAlertModal(true);
    //   }
    // });
  };

  const formik = useFormik({
    // initial values
    initialValues: {
      //   number: dataReqBudget.number,
      //   request: dataReqBudget.request,
      //   category: dataReqBudget.category,
      //   site: dataReqBudget.site,
      //   picUsername:
      //     dataReqBudget.picUsername === '' ? userName : dataReqBudget.picUsername,
      //   createdDate: dataReqBudget.createdDate,
      //   status: dataReqBudget.status,
      //   isBudgetUploaded: dataReqBudget.isBudgetUploaded ? 'Yes' : 'No',
      //   isKelompokMaterialUploaded: dataReqBudget.isKelompokMaterialUploaded
      //     ? 'Yes'
      //     : 'No',
      //   fileUpload: {
      //     fileId: fileUpload.fileId,
      //     fileName: fileUpload.fileName
      //   }
    },
    // validation schema
    validationSchema: Yup.object({
      //   number: Yup.string().required('Cannot be Empty'),
      //   request: Yup.string().required('Cannot be Empty'),
      //   category: Yup.string().required('Cannot be Empty'),
      //   site: Yup.string().required('Cannot be Empty'),
      //   picUsername: Yup.string().required('Cannot be Empty'),
      //   createdDate: Yup.string().required('Cannot be Empty'),
      //   status: Yup.string().required('Cannot be Empty'),
      //   isBudgetUploaded: Yup.string().required('Cannot be Empty'),
      //   isKelompokMaterialUploaded: Yup.string().required('Cannot be Empty')
    }),
    // handle submission
    onSubmit: doSubmit
  });

  return (
    <>
      <BreadCrumbs
        breadCrumbParent="Dashboard"
        breadCrumbActive="Intern"
      />
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
        <h2 className="m-0 ml-2 pl-2 border-left-dark">
          Form Intern
        </h2>
      </div>
      <CustomForm
        header={'Form Input'}
        subheader={'Information Details'}
        formTitle={'Form Intern'}
        formSubtitle={
            'Be sure to check “Form Intern" before you continue'
          }
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
                    name="Name"
                    id="number"
                    value={formik.values.number}
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">University</Label>
                  <Input
                    type="text"
                    name="request"
                    id="request"
                    value={formik.values.request}
                    disabled
                  />
                </FormGroup>
              </Col>

              <Col sm="12">
                <FormGroup>
                  <Label>Department</Label>
                  <CustomInput
                    name="category"
                    className="form-control"
                    type="select"
                    placeholder="Choose Category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    disabled
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
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label>Position</Label>
                  <CustomInput
                    name="site"
                    className="form-control"
                    type="select"
                    placeholder="Site"
                    onChange={formik.handleChange}
                    value={formik.values.site}
                    disabled
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
                  </CustomInput>
                </FormGroup>
              </Col>




              <Col sm="12">
                <FormGroup>
                  <Label>Mentor</Label>
                  <CustomInput
                    name="status"
                    className="form-control"
                    type="select"
                    placeholder="Status"
                    onChange={formik.handleChange}
                    value={formik.values.status}
                    disabled
                  >
                    <option
                      value={formik.values.status}
                      label={formik.values.status}
                      hidden
                    >
                      {formik.values.status}
                    </option>
                    {status.map((data) => (
                      <option
                        key={data.value}
                        value={data.value}
                        label={data.label}
                      >
                        {data.label}
                      </option>
                    ))}
                  </CustomInput>
                </FormGroup>
              </Col>

            </Row>
          </Col>

          <Col sm="6">
            <Row className="pl-1 mt-2">
              <Col sm="12">
                <FormGroup md="6">
                  <Label className="form-label">End Date</Label>
                  <InputGroup className="input-group-merge">
                    <Input
                      className="search-table2 d-flex w-50"
                      type="text"
                      name="createdDate"
                      id="createdDate"
                      value={formik.values.createdDate}
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
                <FormGroup>
                  <Label for="nameVertical">Rekening</Label>
                  <Input
                    type="text"
                    name="picUsername"
                    id="picUsername"
                    value={formik.values.picUsername}
                    className={` form-control ${
                      formik.touched.picUsername &&
                      formik.errors.picUsername &&
                      'is-invalid'
                    }`}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('picUsername')}
                    placeholder=""
                    disabled
                  />
                  {formik.touched.picUsername && formik.errors.picUsername && (
                    <div className="invalid-feedback">
                      {formik.errors.picUsername}
                    </div>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <FormGroup row>
          <Button className="d-flex ml-auto" color="info" type="submit">
            Save
          </Button>
        </FormGroup> */}
      </CustomForm>
      <ComboAlert
        router={router}
        routerPath="/master/request_budget"
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

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (ctx) => {
//     const { req, query } = ctx;
//     const sessionData = await getSession(ctx);

//     if (!sessionData) {
//       return {
//         redirect: {
//           destination: '/auth',
//           permanent: false
//         }
//       };
//     }

//     store.dispatch(reauthenticate(sessionData.user.token));
//     await store.dispatch(getReqBudgetById(query.id));

//     const dataReqBudget = store.getState().requestBudget;

//     return {
//       props: {
//         dataReqBudget,
//         token: sessionData.user.token,
//         userName: sessionData.user.userName
//       }
//     };
//   }
// );

// export default connect((state) => state)(EditRequestBudget);
export default InternForm;
