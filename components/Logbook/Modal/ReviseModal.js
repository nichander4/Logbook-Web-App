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
          Reject
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
            Reject
          </ModalHeader>
          <ModalBody>
            <div className="modalBodyTextApprovePopUp">
              <t>Are you sure want to reject this logbook?</t>
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
              Yes, reject
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
