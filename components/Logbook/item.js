import React, { useState } from 'react';
import { Edit2, Info, MoreVertical, Trash2 } from 'react-feather';
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
  Col
} from 'reactstrap';
import styles from 'styles/scrollbarTable.module.css';

const logbook_Item = ({ item }) => {
  const [entryModal, setEntryModal] = useState(false);
  const toggleEntryPopup = () => setEntryModal(!entryModal);

  const [rejectModal, setRejectModal] = useState(false);
  const toggleRejectPopup = () => setRejectModal(!rejectModal);

  const doSubmit = (e) => {
    // e.preventDefault();
    // dispatch(deleteReqBudget(data.id)).then((data) => {
    //   if (data.status === 401) {
    //     alert('Sorry, you are unauthorized to delete this data!');
    //   } else if (data.status === 204) {
    //     alert('Data deleted successfully!');
    //     router.push({
    //       pathname: router.pathname,
    //       query: {
    //         pageSize: pageSize,
    //         pageNumber: pageNumber,
    //         search: searchQuery
    //       }
    //     });
    //   } else {
    //     alert('Error occured, please try again later');
    //   }
    // });
  };

  return (
    <tr>
      <td style={{ textAlign: 'start' }}>{item.date}</td>
      <td style={{ textAlign: 'start' }}>{item.activity}</td>
      <td style={{ textAlign: 'start' }}>
        <Badge color="light-primary" style={{ borderRadius: '18px' }}>
          {item.isWfo}
        </Badge>
      </td>
      <td style={{ textAlign: 'start' }}>{item.check_in}</td>
      <td style={{ textAlign: 'start' }}>{item.check_out}</td>
      <td style={{ textAlign: 'start' }}>
        <Badge
          color={`${
            item.mentor_approval == 'Rejected'
              ? 'light-danger'
              : item.mentor_approval == 'Awaiting'
              ? 'light-warning'
              : 'light-primary'
          }`}
          style={{ borderRadius: '18px' }}
        >
          {item.mentor_approval}
        </Badge>
      </td>
      <td style={{ textAlign: 'start' }}>
        <Badge
          color={`${
            item.hr_approval == 'Rejected'
              ? 'light-danger'
              : item.hr_approval == 'Awaiting'
              ? 'light-warning'
              : 'light-primary'
          }`}
          style={{ borderRadius: '18px' }}
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

        <div className="d-flex justify-content-center">
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
        </div>
        <Modal
          centered
          fullscreen="md"
          scrollable
          size="md"
          isOpen={entryModal}
          toggle={toggleEntryPopup}
        >
          <ModalHeader toggle={toggleEntryPopup} className="bg-primary">
            <div className="text-white">Entry Log Book</div>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="nameVertical">Check in</Label>
                  <Input
                    type="text"
                    name="Name"
                    id="number"
                    // value={formik.values.number}
                    disabled
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label for="nameVertical">Check out</Label>
                  <Input
                    type="text"
                    name="Name"
                    id="number"
                    // value={formik.values.number}
                    disabled
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="nameVertical">Activity</Label>
              <Input
                id={styles.textarea}
                name="retrunReason"
                type="textarea"
                placeholder="Placeholder"
                rows="6"
                style={{ resize: 'none' }}
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
              className="d-flex ml-auto"
              color="primary"
              // onClick={toggleEntryPopup}
            >
              OFF
            </Button>
            <Button
              className="d-flex ml-1"
              color="info"
              type="submit"
              onClick={doSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </Modal>

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
                style={{ resize: 'none' }}
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
              onClick={doSubmit}
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
