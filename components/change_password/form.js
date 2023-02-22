import BreadCrumbs from "components/custom/BreadcrumbCustom";
import React, { useEffect, useState, useRef } from "react";
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
  ButtonGroup,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomForm from "components/Form/CustomForm";
import { ArrowLeft, Calendar } from "react-feather";
import { getSession } from 'next-auth/react';
import { useRouter } from "next/router";
import { useDispatch, connect } from "react-redux";
import { wrapper } from 'redux/store';
import { reauthenticate } from 'redux/actions/auth';
import ComboAlert from "components/Alert/ComboAlert";
import InputPasswordToggle from "src/@core/components/input-password-toggle";
import { updateIntern } from "redux/actions/intern_action";

const ChangePasswordForm = ({ user, token }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(user);
  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  //   useEffect(() => {
  //     dispatch(reauthenticate(token));
  //   }, [dispatch]);

  const btnSave_click = (data) => {
    const editedData = {
      ...user,
      password: data.password,
    };

    delete editedData.token;

    dispatch(reauthenticate(token));
    dispatch(updateIntern(editedData, user.id)).then((data) => {
      setAlertStatus(data.status);
      if (data.status === 400) {
        setAlertMessage(data.data);
        setIsAlertModal(true);
      } else if (data.status === 401) {
        setAlertMessage("You are unauthorized to update this data");
        setIsAlertModal(true);
      } else if (data.status >= 200 && data.status < 300) {
        setAlertMessage("Your password has been changed successfully!");
        setIsAlertModal(true);
      } else if (data.status == 409) {
        setAlertMessage("Data is already exist!");
        setIsAlertModal(true);
      } else {
        setAlertMessage("Error occured, please try again later");
        setIsAlertModal(true);
      }
    });

  };

  const formik = useFormik({
    // initial values
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    // validation schema
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Password Confirmation is required"),
    }),
    // handle submission
    onSubmit: btnSave_click,
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
        header={"Form Input"}
        subheader={"Information Details"}
        formTitle={"Change Password"}
        formSubtitle={
          'Be sure to check “Form Change Password" before you continue'
        }
        onSubmitForm={formik.handleSubmit}
      >
        <Row>
          <Col sm="6">
            <Row className="pl-1 mt-2">
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">New Password</Label>
                  <InputPasswordToggle
                    className={`newPasswordField input-group-merge ${
                      formik.touched.password &&
                      formik.errors.password &&
                      "is-invalid"
                    }`}
                    id="new_password"
                    name="new_password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  )}
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Re-Enter Your New Password</Label>
                  <InputPasswordToggle
                    className={`confirmPasswordField input-group-merge ${
                      formik.touched.passwordConfirmation &&
                      formik.errors.passwordConfirmation &&
                      "is-invalid"
                    }`}
                    id="re-enter_new_password"
                    name="re-enter_new_password"
                    {...formik.getFieldProps("passwordConfirmation")}
                  />
                  {formik.touched.passwordConfirmation &&
                    formik.errors.passwordConfirmation && (
                      <div className="invalid-feedback">
                        {formik.errors.passwordConfirmation}
                      </div>
                    )}
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

export default ChangePasswordForm;
