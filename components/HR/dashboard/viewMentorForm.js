import BreadCrumbs from 'components/custom/BreadcrumbCustom';
import React, { useEffect, useState, useRef } from 'react';
import {
    Table,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Label,
    Row,
    Col,
    CustomInput,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    FormGroup
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomForm from 'components/Form/CustomForm';
import { ArrowLeft, Calendar, Search } from 'react-feather';
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
import styles1 from 'styles/scrollbarTable.module.css';
import InternTableItem from './internTableItem';
import ReactPaginate from 'react-paginate';

const MentorForm = (props) => {
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

  const DUMMY_MenteeItem = [
    {
      name: 'Nicholas Anderson',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    },
    {
      name: 'Reyhan Nathanael',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    },
    {
      name: 'Nicholas Anderson',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    },
    {
      name: 'Reyhan Nathanael',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    },
    {
      name: 'Nicholas Anderson',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    }
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
      <BreadCrumbs breadCrumbParent="Dashboard" breadCrumbActive="Mentor" />
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
                    name="Name"
                    id="number"
                    value={formik.values.number}
                    disabled
                  />
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
            </Row>
          </Col>

          <Col sm="6">
            <Row className="mt-2">
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
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col
            className="d-flex align-items-center justify-content-start mt-1"
            xl="8"
            md="7"
            sm="7"
          >
            <Label className="mr-1" for="search-input-1">
              Show
            </Label>
            <CustomInput type="select" className="custominput-table2 border-0">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </CustomInput>
          </Col>

          <Col
            className="d-flex align-items-center justify-content-center justify-content-lg-end mt-1 pr-lg-1"
            xl="4"
            md="4"
            sm="4"
          >
            <InputGroup className="input-group-merge">
              <Input
                className="search-table2 d-flex w-50"
                type="text"
                name="search"
                id="search-invoice"
                placeholder="Search"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <Search size={14} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>

        <div id={styles1.Table}>
          <Table
            className="table border-1 text-nowrap"
            style={{ border: '1px solid #d8d6de' }}
          >
            <thead>
              <tr>
                <th className="text-center align-middle">ACTION</th>
                <th className="text-left align-middle">NAME</th>
                <th className="text-left align-middle">UNIVERSITY</th>
                <th className="text-left align-middle">DEPARTMENT</th>
                <th className="text-left align-middle">POSITION</th>
                <th className="text-left align-middle">MENTOR</th>
                <th className="text-left align-middle">END DATE</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_MenteeItem.map(
                (item, id) => (id++, (<InternTableItem key={id} item={item} />))
              )}
            </tbody>
          </Table>
        </div>
        <Row className="mb-2 mt-3 justify-content-center justify-content-md-around align-items-center">
          <Col sm="12" md="11">
            <ReactPaginate
              pageCount="5"
              nextLabel={''}
              breakLabel={'...'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next-item'}
              previousClassName={'page-item prev-item'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName={
                'pagination react-paginate m-0 justify-content-center justify-content-lg-end'
              }
            />
          </Col>
        </Row>

        <FormGroup row>
          <Button className="d-flex ml-auto mr-1 mt-1" color="info" type="submit">
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
export default MentorForm;
