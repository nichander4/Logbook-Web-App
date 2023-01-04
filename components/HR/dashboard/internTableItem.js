import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Edit2, Info, MoreVertical, Trash2 } from 'react-feather';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledDropdown
} from 'reactstrap';
import { deleteIntern } from 'redux/actions/intern_action';
import ComboAlert from 'components/Alert/ComboAlert';

const InternItem = ({
  dispatch,
  data,
  router,
  isDeleteModal,
  setIsDeleteModal,
  isAlertModal,
  setIsAlertModal,
  alertStatus,
  setAlertStatus,
  alertMessage,
  setAlertMessage,
}) => {
  const [deleteModal, setDeteleModal] = useState(false);
  const toggleDeletePopup = () => setDeteleModal(!deleteModal);



  const deleteData = (e) => {
    e.preventDefault();

    dispatch(deleteIntern(data.id)).then((data) => {
      setAlertStatus(data.status);
      setIsDeleteModal(true);
      if (data.status === 401) {
        setAlertMessage('Sorry, you are unauthorized to delete this data!');
      } else if (data.status === 204) {
        setAlertMessage('Data deleted successfully!');
       
      } else {
        setAlertMessage('Error occured, please try again later');
      }
      setIsAlertModal(true);

    });
  };

  return (
    <tr>
      <td className="text-center px-2 align-middle">
        <UncontrolledDropdown>
          <DropdownToggle
            className="icon-btn hide-arrow"
            color="transparent"
            size="sm"
            caret
          >
            <MoreVertical size={15} />
          </DropdownToggle>

          <DropdownMenu className="border-0 border-radius-6">
            <DropdownItem
              className="action-vuexy-item w-100"
              onClick={() =>
                router.push(`/HR/dashboard/intern/detail/${data.id}`)
              }
            >
              <Info className="mr-2" size={15} />{' '}
              <span className="align-middle">View</span>
            </DropdownItem>

            {/* {getPermissionComponent([
                'Material Planner Spv',
                'RnD/TS Data Support Spv'
              ]) && ( */}
            <DropdownItem
              className="action-vuexy-item w-100"
              onClick={() =>
                router.push(`/HR/dashboard/intern/edit/${data.id}`)
              }
            >
              <Edit2 className="mr-2" size={15} />{' '}
              <span className="align-middle">Edit</span>
            </DropdownItem>
            {/* )} */}

            <DropdownItem
              onClick={toggleDeletePopup}
              className="action-vuexy-item w-100"
            >
              <Trash2 className="mr-2" size={15} />{' '}
              <span className="align-middle font-weight-bold">Delete</span>
              <Modal
                centered
                fullscreen="md"
                scrollable
                size="md"
                isOpen={deleteModal}
                toggle={toggleDeletePopup}
              >
                <ModalHeader toggle={toggleDeletePopup} className="bg-danger">
                  <div className="text-white">Delete</div>
                </ModalHeader>
                <ModalBody>
                  Are you sure you want to delete this data?
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="d-flex ml-auto"
                    color="danger"
                    type="submit"
                    onClick={deleteData}
                  >
                    Delete
                  </Button>
                  <Button
                    className="d-flex ml-1 text-danger border border-danger"
                    color="white"
                    onClick={toggleDeletePopup}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        
        
       
      </td>
      <td style={{ textAlign: 'start' }}>{data.userName}</td>
      <td style={{ textAlign: 'start' }}>{data.university}</td>
      <td style={{ textAlign: 'start' }}>{data.department}</td>
      <td style={{ textAlign: 'start' }}>{data.position}</td>
      <td style={{ textAlign: 'start' }}>{data.mentor.userName}</td>
      <td style={{ textAlign: 'start' }}>
        {moment(data.endDate).format("D MMM YYYY")}
      </td>
    </tr>
  );
};

export default InternItem;
