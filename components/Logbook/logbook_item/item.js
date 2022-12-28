import ComboAlert from "components/Alert/ComboAlert";
import moment from "moment";
import React, { useState } from "react";
import { Edit2, Info, MoreVertical, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
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
import { reauthenticate } from "redux/actions/auth";
import { entryLogbook } from "redux/actions/intern_action";
import styles from "styles/scrollbarTable.module.css";
import LogbookModal from "../Modal/logbookModal";
const logbook_Item = ({ item, token, setRefresh, status }) => {
  const [entryModal, setEntryModal] = useState(false);
  const toggleEntryPopup = () => setEntryModal(!entryModal);

  const [rejectModal, setRejectModal] = useState(false);
  const toggleRejectPopup = () => setRejectModal(!rejectModal);

  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (id, data) => {
    dispatch(reauthenticate(token));
    dispatch(entryLogbook(id, data)).then((data) => {
      console.log(data, "SUBMIT DATA");
      setAlertStatus(data.status);
      if (data.status === 400) {
        setAlertMessage(data.data);
        setIsAlertModal(true);
      } else if (data.status === 401) {
        setAlertMessage("You are unauthorized to add this data");
        setIsAlertModal(true);
      } else if (data.status >= 200 && data.status < 300) {
        toggleEntryPopup();
        setAlertMessage("Data added successfully!");
        setIsAlertModal(true);
      } else if (data.status == 409) {
        setAlertMessage("Data is already exist!");
        setIsAlertModal(true);
      } else {
        setAlertMessage("Error occured, please try again later");
        setIsAlertModal(true);
      }
    });
  };

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
      <td style={{ textAlign: "start" }}>
        {item.jamMasuk ? moment(item.jamMasuk).format("HH:mm") : ""}
      </td>
      <td style={{ textAlign: "start" }}>
        {item.jamKeluar ? moment(item.jamKeluar).format("HH:mm") : ""}
      </td>
      <td className="text-center px-2 align-middle">
        {moment().format() > moment(item.date).format() && status == "Draft" ? (
          <div className="d-flex justify-content-center ">
            <Button.Ripple
              color="primary"
              className="d-flex align-items-center"
              onClick={toggleEntryPopup}
            >
              Entry
            </Button.Ripple>
          </div>
        ) : null}
        {/* <div className="d-flex justify-content-center ">
          <Button.Ripple
            color="primary"
            className="d-flex align-items-center"
            onClick={toggleEntryPopup}
          >
            Entry
          </Button.Ripple>
        </div> */}

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
          submitHandler={submitHandler}
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
        <ComboAlert
          isDeleteModal={true}
          isAlertModal={isAlertModal}
          setIsAlertModal={setIsAlertModal}
          alertStatus={alertStatus}
          alertMessage={alertMessage}
          setRefresh={setRefresh}
        />
      </td>
    </tr>
  );
};

export default logbook_Item;
