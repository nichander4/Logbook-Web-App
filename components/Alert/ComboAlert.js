import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ComboAlert = ({
  router,
  routerPath,
  isAlertModal,
  setIsAlertModal,
  alertStatus,
  alertMessage,
}) => {
  return (
    <Modal
      centered
      isOpen={isAlertModal}
      toggle={() => {
        if (alertStatus >= 400 && alertStatus <= 500) setIsAlertModal(false);
      }}
    >
      <ModalHeader
        className={`modalHeaderTextNotePopUp ${
          alertStatus >= 200 && alertStatus < 300
            ? "bg-primary"
            : alertStatus >= 400 && alertStatus <= 500
            ? "bg-danger"
            : ""
        }`}
        toggle={() => {
          if (alertStatus >= 400 && alertStatus <= 500) setIsAlertModal(false);
        }}
      >
        {alertStatus >= 200 && alertStatus < 300
          ? "Success"
          : alertStatus >= 400 && alertStatus <= 500 && "Failed"}
      </ModalHeader>
      <ModalBody>{alertMessage}</ModalBody>
      <ModalFooter>
        <Button.Ripple
          color={
            alertStatus >= 200 && alertStatus < 300
              ? "primary"
              : alertStatus >= 400 && alertStatus <= 500 && "danger"
          }
          onClick={() => {
            if (alertStatus >= 200 && alertStatus < 300)
              router.push(routerPath);
            else if (alertStatus >= 400 && alertStatus <= 500)
              setIsAlertModal(false);
          }}
        >
          OK
        </Button.Ripple>
      </ModalFooter>
    </Modal>
  );
};

export default ComboAlert;
