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
const RejectLogbookForm = ({ reasonModal, setReasonModal, reviseHandler }) => {
  const formik = useFormik({
    // initial values
    initialValues: {
      cancelReason: "",
    },
    // validation schema
    validationSchema: Yup.object({
      cancelReason: Yup.string().required('Reason Cannot be Empty'),
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
        className="modalHeaderTextWarningPopUp bg-danger"
        toggle={() => setReasonModal(!reasonModal)}
      >
        Reject
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
            className={`reasonField ${
              formik.touched.cancelReason && formik.errors.cancelReason && "is-invalid"
            }`}
            value={formik.values.cancelReason}
            {...formik.getFieldProps("cancelReason")}
          />
            {formik.touched.cancelReason && formik.errors.cancelReason && (
              <div className="invalid-feedback">{formik.errors.cancelReason}</div>
            )}
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={formik.submitForm}>
          OK
        </Button>
        <Button
          color="danger"
          outline
          onClick={() => setReasonModal(!reasonModal)}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RejectLogbookForm;
