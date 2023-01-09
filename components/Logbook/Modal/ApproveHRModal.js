import { Fragment, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Input,
  Label
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Edit } from 'react-feather';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NumericFormat from 'react-number-format';

const approveHRModal = ({ approveHandler }) => {
  const [basicModal, setBasicModal] = useState(false);
  const formik = useFormik({
    // initial values
    initialValues: {
      gajiWFO: '',
      gajiWFH: ''
    },
    // validation schema
    validationSchema: Yup.object({
      gajiWFO: Yup.string().required('Gaji WFO Cannot be Empty'),
      gajiWFH: Yup.string().required('Gaji WFH Cannot be Empty')
    }),
    // handle submission
    onSubmit: (e) => {
      setBasicModal(!basicModal);
      approveHandler(e);
    }
  });

  console.log(Number(formik.values.gajiWFO), 'ad');
  console.log(formik);

  return (
    <div className="demo-inline-spacing">
      <div className="basic-modal">
        <Button
          color="primary"
          className="mx-1"
          onClick={() => setBasicModal(!basicModal)}
        >
          Approve & Calculate
        </Button>
        <Modal
          centered
          isOpen={basicModal}
          toggle={() => setBasicModal(!basicModal)}
        >
          <ModalHeader
            className="modalHeaderTextApprovePopUp bg-primary"
            toggle={() => setBasicModal(!basicModal)}
          >
            Approve & Calculate
          </ModalHeader>
          <ModalBody>
            <div className="modalBodyTextApprovePopUp">
              <t>Are you sure want to approve this logbook?</t>
            </div>
            <Label for="nameVertical">Gaji WFO per Hari</Label>
            <NumericFormat
            valueIsNumericString={true}
              thousandSeparator={','}
              displayType={'input'}
              name="gajiWFO"
              id="gajiWFO"
              placeholder="Ex : 100"
              //  step="0.1"
              value={formik.values.gajiWFO}
              className={`form-control ${
                formik.touched.gajiWFO && formik.errors.gajiWFO && 'is-invalid'
              }`}
              onValueChange={(values) => {
                formik.setFieldValue('gajiWFO', values.floatValue)
              }}
              // {...formik.getFieldProps('gajiWFO')}
            />
            {formik.touched.gajiWFO && formik.errors.gajiWFO && (
              <div className="invalid-feedback">{formik.errors.gajiWFO}</div>
            )}
            {/* <Input
              type="number"
              name="gajiWFO"
              id="gajiWFO"
              value={formik.values.gajiWFO}
              className={`${
                formik.touched.gajiWFO && formik.errors.gajiWFO && 'is-invalid'
              }`}
              {...formik.getFieldProps('gajiWFO')}
            /> */}
            <Label for="nameVertical">Gaji WFH per Hari</Label>
            <NumericFormat
              valueIsNumericString={true}
              thousandSeparator={','}
              displayType={'input'}
              name="gajiWFH"
              id="gajiWFH"
              placeholder="Ex : 100"
              //  step="0.1"
              value={formik.values.gajiWFH}
              className={`form-control ${
                formik.touched.gajiWFH && formik.errors.gajiWFH && 'is-invalid'
              }`}
              onValueChange={(values) => {
                formik.setFieldValue('gajiWFH', values.floatValue)
              }}
              // {...formik.getFieldProps('gajiWFH')}
            />
            {formik.touched.gajiWFH && formik.errors.gajiWFH && (
              <div className="invalid-feedback">{formik.errors.gajiWFH}</div>
            )}
            {/* <Input
              type="number"
              name="gajiWFH"
              id="gajiWFH"
              value={formik.values.gajiWFH}
              className={`${
                formik.touched.gajiWFH && formik.errors.gajiWFH && 'is-invalid'
              }`}
              {...formik.getFieldProps('gajiWFH')}
            /> */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={formik.submitForm}>
              Yes, Approve
            </Button>
            <Button
              color="primary"
              outline
              onClick={() => setBasicModal(!basicModal)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};
export default approveHRModal;
