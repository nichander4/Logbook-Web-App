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

const SuccessPopUp = () => {
  const [basicModal, setBasicModal] = useState(false);

  return (
    <div className="demo-inline-spacing">
      <div className="basic-modal">
        <Button
          color="primary"
          outline
          onClick={() => setBasicModal(!basicModal)}
        >
          Success Pop Up
        </Button>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader
            className="modalHeaderTextSuccessPopUp bg-success"
            toggle={() => setBasicModal(!basicModal)}
          >
            Success
          </ModalHeader>
          <ModalBody>
            <div className="modalBodyTextSuccessPopUp">
              <t>Document successfully approved!</t>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              onClick={() => setBasicModal(!basicModal)}
            >
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};
export default SuccessPopUp;
