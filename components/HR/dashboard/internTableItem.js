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
} from 'reactstrap';



const InternItem = ({ item }) => {
    const [deleteModal, setDeteleModal] = useState(false);
    const toggleDeletePopup = () => setDeteleModal(!deleteModal);
  
    const deleteData = (e) => {
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
                  router.push(`/master/request_budget/detail/${data.id}`)
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
                  router.push(`/master/request_budget/edit/${data.id}`)
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
        <td style={{ textAlign: 'start' }}>{item.name}</td>
        <td style={{ textAlign: 'start' }}>{item.university}</td>
        <td style={{ textAlign: 'start' }}>{item.department}</td>
        <td style={{ textAlign: 'start' }}>{item.position}</td>
        <td style={{ textAlign: 'start' }}>{item.mentor}</td>
        <td style={{ textAlign: 'start' }}>{item.endDate}</td>
      </tr>
    );
  };

  export default InternItem;