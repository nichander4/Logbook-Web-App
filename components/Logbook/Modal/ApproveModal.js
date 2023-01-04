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

const approveModal = ({ approveHandler }) => {
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
          Approve
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
            Approve
          </ModalHeader>
          <ModalBody>
            <div className="modalBodyTextApprovePopUp">
              <t>Are you sure want to approve this logbook?</t>
            </div>
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
export default approveModal;
