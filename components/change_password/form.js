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
import InputPasswordToggle from 'src/@core/components/input-password-toggle';

const ChangePassword = (props) => {
  const { dataReqBudget, token, userName } = props;
  const router = useRouter();
  //   const dispatch = useDispatch();

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
    },
    // validation schema
    validationSchema: Yup.object({
      //   number: Yup.string().required('Cannot be Empty'),
      //   request: Yup.string().required('Cannot be Empty'),
      //   category: Yup.string().required('Cannot be Empty'),
    }),
    // handle submission
    onSubmit: doSubmit
  });

  return (
    <>
      <BreadCrumbs breadCrumbParent="User" breadCrumbActive="Change Password" />
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
        <h2 className="m-0 ml-2 pl-2 border-left-dark">Change Password</h2>
      </div>
      <CustomForm
        header={'Form Input'}
        subheader={'Information Details'}
        formTitle={'Change Password'}
        formSubtitle={'Be sure to check “Form Change Password" before you continue'}
        onSubmitForm={formik.handleSubmit}
      >
        <Row>
          <Col sm="6">
            <Row className="pl-1 mt-2">
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">New Password</Label>
                  <InputPasswordToggle
                    className="input-group-merge"
                    id="new_password"
                    name="new_password"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Re-Enter Your New Password</Label>
                  <InputPasswordToggle
                    className="input-group-merge"
                    id="re-enter_new_password"
                    name="re-enter_new_password"
                  />
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
export default ChangePassword;
