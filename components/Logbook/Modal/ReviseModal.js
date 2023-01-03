import { Fragment, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Edit } from "react-feather";

const ReviseModal = ({ setReasonModal }) => {
  const [basicModal, setBasicModal] = useState(false);

  return (
    <div className="demo-inline-spacing">
      <div className="basic-modal">
        <Button
          color="danger"
          className="mx-1"
          onClick={() => setBasicModal(!basicModal)}
        >
          Revise
        </Button>
        <Modal
          centered
          isOpen={basicModal}
          toggle={() => setBasicModal(!basicModal)}
        >
          <ModalHeader
            className="modalHeaderTextApprovePopUp bg-danger"
            toggle={() => setBasicModal(!basicModal)}
          >
            Approve
          </ModalHeader>
          <ModalBody>
            <div className="modalBodyTextApprovePopUp">
              <t>Are you sure want to revise this document?</t>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => {
                setBasicModal(!basicModal);
                setReasonModal(true);
              }}
            >
              Yes, revise
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
export default ReviseModal;
