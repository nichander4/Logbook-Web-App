import {
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { Info } from "react-feather";
import { useState } from "react";
const DocumentStatus = ({ text }) => {
  const [basicModal, setBasicModal] = useState(false);
  return (
    <div>
      <Badge className="status-badge mr-2" pill>
        Waiting for Approval
      </Badge>
      <Info size={38} onClick={() => setBasicModal(!basicModal)} />
      <Modal
        isOpen={basicModal}
        toggle={() => setBasicModal(!basicModal)}
        className={`modal-dialog-centered modal-md`}
      >
        <ModalHeader toggle={() => setBasicModal(!basicModal)}>
          Document Details
        </ModalHeader>
        <ModalBody>
          <div className="separatorDetailsPopUp1">
            <t className="modalBodyTextDetailsPopUp1">Entity</t>
            <p className="modalBodyParagraphDetailsPopUp1">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
          <div className="separatorDetailsPopUp1">
            <t className="modalBodyTextDetailsPopUp1">Core Process</t>
            <p className="modalBodyParagraphDetailsPopUp1">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
          <div className="separatorDetailsPopUp1">
            <t className="modalBodyTextDetailsPopUp1">Process</t>
            <p className="modalBodyParagraphDetailsPopUp1">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
          <div className="separatorDetailsPopUp1">
            <t className="modalBodyTextDetailsPopUp1">Entity</t>
            <p className="modalBodyParagraphDetailsPopUp1">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DocumentStatus;
