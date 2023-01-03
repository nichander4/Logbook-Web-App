import { useFormik } from "formik";
import { FormattedList } from "react-intl";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import * as Yup from "yup";
const ReasonModal = ({ reasonModal, setReasonModal, reviseHandler }) => {
  const formik = useFormik({
    // initial values
    initialValues: {
      cancelReason: "",
    },
    // validation schema
    validationSchema: Yup.object({
      cancelReason: Yup.string().required(),
    }),
    // handle submission
    onSubmit: (e) => {
    setReasonModal(false);
      reviseHandler(e);
    },
  });

  return (
    <Modal
      isOpen={reasonModal}
      toggle={() => setReasonModal(!reasonModal)}
      className={`modal-dialog-centered modal-md`}
    >
      <ModalHeader
        className="modalHeaderTextWarningPopUp bg-warning"
        toggle={() => setReasonModal(!reasonModal)}
      >
        Revise
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="comment" className="modalBodyLabelTextNotePopUp">
            Reason
          </Label>
          <Input
            type="textarea"
            id="comment"
            placeholder="Placeholder"
            className={`${
              formik.touched.cancelReason && formik.errors.cancelReason && "is-invalid"
            }`}
            value={formik.values.cancelReason}
            {...formik.getFieldProps("cancelReason")}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={formik.submitForm}>
          OK
        </Button>
        <Button
          color="success"
          outline
          onClick={() => setReasonModal(!reasonModal)}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ReasonModal;
