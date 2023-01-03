import { Fragment, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Input,
  Label,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Edit } from "react-feather";
import { useFormik } from "formik";
import * as Yup from "yup";

const approveHRModal = ({ approveHandler }) => {
  const [basicModal, setBasicModal] = useState(false);
  const formik = useFormik({
    // initial values
    initialValues: {
      gajiWFO: 0,
      gajiWFH: 0,
    },
    // validation schema
    validationSchema: Yup.object({
      gajiWFO: Yup.number().required("Gaji WFO Cannot be Empty"),
      gajiWFH: Yup.number().required("Gaji WFH Cannot be Empty"),
    }),
    // handle submission
    onSubmit: (e) => {
      setBasicModal(!basicModal);
      approveHandler(e);
    },
  });

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
              <t>Are you sure want to approve this document?</t>
            </div>
            <Label for="nameVertical">Gaji WFO</Label>
            <Input
              type="number"
              name="gajiWFO"
              id="gajiWFO"
              value={formik.values.gajiWFO}
              className={`${
                formik.touched.gajiWFO && formik.errors.gajiWFO && "is-invalid"
              }`}
              {...formik.getFieldProps("gajiWFO")}
            />
            <Label for="nameVertical">Gaji WFH</Label>
            <Input
              type="number"
              name="gajiWFH"
              id="gajiWFH"
              value={formik.values.gajiWFH}
              className={`${
                formik.touched.gajiWFH && formik.errors.gajiWFH && "is-invalid"
              }`}
              {...formik.getFieldProps("gajiWFH")}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={formik.submitForm}>
              Yes, Approve
            </Button>
            <Button
              color="danger"
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
