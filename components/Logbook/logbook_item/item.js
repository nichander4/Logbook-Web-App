import moment from "moment";
import React, { useState } from "react";
import { Edit2, Info, MoreVertical, Trash2 } from "react-feather";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Badge,
  Label,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";
import styles from "styles/scrollbarTable.module.css";
import LogbookModal from "../Modal/logbookModal";
const logbook_Item = ({ item, token }) => {
  const [entryModal, setEntryModal] = useState(false);
  const toggleEntryPopup = () => setEntryModal(!entryModal);

  const [rejectModal, setRejectModal] = useState(false);
  const toggleRejectPopup = () => setRejectModal(!rejectModal);

  return (
    <tr>
      <td style={{ textAlign: "start" }}>
        {moment(item.date).format("dddd, D MMM YYYY")}
      </td>
      <td style={{ textAlign: "start" }}>{item.activity}</td>
      <td style={{ textAlign: "start" }}>
        <Badge color="light-primary" style={{ borderRadius: "18px" }}>
          {item.isWorkFromOffice ? "WFO" : "WFH"}
        </Badge>
      </td>
      <td style={{ textAlign: "start" }}>{item.jamMasuk}</td>
      <td style={{ textAlign: "start" }}>{item.jamKeluar}</td>
      <td style={{ textAlign: "start" }}>
        <Badge
          color={`${
            item.mentor_approval == "Rejected"
              ? "light-danger"
              : item.mentor_approval == "Awaiting"
              ? "light-warning"
              : "light-primary"
          }`}
          style={{ borderRadius: "18px" }}
        >
          {item.mentor_approval}
        </Badge>
      </td>
      <td style={{ textAlign: "start" }}>
        <Badge
          color={`${
            item.hr_approval == "Rejected"
              ? "light-danger"
              : item.hr_approval == "Awaiting"
              ? "light-warning"
              : "light-primary"
          }`}
          style={{ borderRadius: "18px" }}
        >
          {item.hr_approval}
        </Badge>
      </td>
      <td className="text-center px-2 align-middle">
        <div className="d-flex justify-content-center ">
          <Button.Ripple
            color="primary"
            className="d-flex align-items-center"
            onClick={toggleEntryPopup}
          >
            Entry
          </Button.Ripple>
        </div>

        {/* <div className="d-flex justify-content-center">
          <Button.Ripple
            color="primary"
            className="d-flex align-items-center mr-1"
            // onClick={toggleEntryPopup}
          >
            Approve
          </Button.Ripple>

          <Button.Ripple
            color="danger"
            className="d-flex align-items-center"
            onClick={toggleRejectPopup}
          >
            Reject
          </Button.Ripple>
        </div> */}

        <LogbookModal
          entryModal={entryModal}
          toggleEntryPopup={toggleEntryPopup}
          item={item}
          token={token}
        />
        <Modal
          centered
          fullscreen="md"
          scrollable
          size="md"
          isOpen={rejectModal}
          toggle={toggleRejectPopup}
        >
          <ModalHeader toggle={toggleRejectPopup} className="bg-danger">
            <div className="text-white">Reject</div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="nameVertical">Reason</Label>
              <Input
                id={styles.textarea}
                name="retrunReason"
                type="textarea"
                placeholder="Placeholder"
                rows="6"
                style={{ resize: "none" }}
                // value={formik.values.retrunReason}
                // className={`${
                //   formik.touched.retrunReason &&
                //   formik.errors.retrunReason &&
                //   'is-invalid'
                // }`}
                // {...formik.getFieldProps('retrunReason')}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              className="d-flex mr-auto"
              color="danger"
              type="submit"
              // onClick={toggleEntryPopup}
            >
              Reject
            </Button>
            <Button
              className="d-flex ml-auto btn btn-outline-danger"
              color="white"
              // onClick={doSubmit}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </td>
    </tr>
  );
};

export default logbook_Item;
