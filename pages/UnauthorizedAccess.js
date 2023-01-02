import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const UnauthorizedAccess = () => {
  const [basicModal, setBasicModal] = useState(true);
  const router = useRouter();

  return (
    <Modal isOpen={basicModal} centered>
      <ModalHeader
        className="modalHeaderTextRejectPopUp bg-danger"
        // toggle={() => setBasicModal(!basicModal)}
      >
        Unauthorized Access
      </ModalHeader>
      <ModalBody>You are not unauthorized to see this page.</ModalBody>
      <ModalFooter>
        <Button.Ripple
          outline
          color="danger"
          style={{ width: "100%" }}
          // temporary
          onClick={() => router.push("/home")}
        >
          <span className="align-middle ml-25">Back</span>
        </Button.Ripple>
      </ModalFooter>
    </Modal>
  );
};

export default UnauthorizedAccess;
