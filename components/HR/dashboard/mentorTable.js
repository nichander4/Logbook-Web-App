import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Edit2, Info, MoreVertical, Search, Trash2 } from 'react-feather';
import ReactPaginate from 'react-paginate';
import {
  Table,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Row,
  Col,
  CustomInput,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import { getAllMentor } from 'redux/actions/mentor_action';

import styles1 from 'styles/scrollbarTable.module.css';
import { useDispatch } from 'react-redux';

import { reauthenticate } from 'redux/actions/auth';

const MentorItem = ({ data }) => {
  const router = useRouter();
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
              onClick={() => router.push(`/HR/dashboard/mentor/detail/${1}`)}
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
              onClick={() => router.push(`/HR/dashboard/mentor/edit/${1}`)}
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
      <td style={{ textAlign: 'start' }}>{data.No}</td>
      <td style={{ textAlign: 'start' }}>{data.department}</td>
      <td style={{ textAlign: 'start' }}>{data.position}</td>
      <td style={{ textAlign: 'start' }}>{data.intern}</td>
    </tr>
  );
};

const mentorTable = ({ token }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [tempData, setTempData] = useState('');
  const [tempPageSize, setTempPageSize] = useState(5);
  const [tempPageNumber, setTempPageNumber] = useState(1);
  const [tempSearchQuery, setTempSearchQuery] = useState('');

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    dispatch(reauthenticate(token));

    dispatch(getAllMentor(tempPageNumber, tempPageSize, tempSearchQuery)).then(
      (response) => {
        setTempData({
          data: response.data.data,
          currentPage: response.data.currentPage,
          pageSize: response.data.pageSize,
          totalPage: response.data.totalPage
        });
      }
    );
  }, [tempPageSize, tempPageNumber, tempSearchQuery]);

  const handlePageSize = (e) => {
    setTempPageSize(e.target.value);
    setTempPageNumber(1);
  };

  const handleSearchQuery = (e) => {
    setTempSearchQuery(e);
    setTempPageNumber(1);
  };

  return (
    <>
      <h3 className="mb-2">Mentor List</h3>
      <Row className="mb-2">
        <Col
          className="d-flex align-items-center justify-content-start mt-1"
          xl="8"
          md="7"
          sm="7"
        >
          <Label className="mr-1" for="search-input-1">
            Show
          </Label>
          <CustomInput
            type="select"
            className="custominput-table2 border-0"
            defaultValue={tempPageSize}
            onChange={handlePageSize}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </CustomInput>
        </Col>

        <Col
          className="d-flex align-items-center justify-content-center justify-content-lg-end mt-1 pr-lg-1"
          xl="4"
          md="4"
          sm="4"
        >
          <InputGroup className="input-group-merge">
            <Input
              className="search-table2 d-flex w-50"
              type="text"
              name="search"
              id="search-invoice"
              placeholder="Search"
              value={tempSearchQuery}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSearchQuery(e.target.value);
              }}
              onChange={(e) => setTempSearchQuery(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>

      <div id={styles1.Table}>
        <Table
          className="table border-1 text-nowrap"
          style={{ border: '1px solid #d8d6de' }}
        >
          <thead>
            <tr>
              <th className="text-center align-middle">ACTION</th>
              <th className="text-left align-middle">NAME</th>
              <th className="text-left align-middle">DEPARTMENT</th>
              <th className="text-left align-middle">POSITION</th>
              <th className="text-left align-middle">INTERN</th>
            </tr>
          </thead>
          <tbody>
          {tempData && tempData.data.length > 0 ? (
              tempData.data.map((data) => (
                <MentorItem
                  key={data.id}
                  data={data}
                  // pageSize={pageSize}
                  // pageNumber={pageNumber}
                  // searchQuery={searchQuery}
                  dispatch={dispatch}
                  router={router}
                  setIsDeleteModal={setIsDeleteModal}
                  setIsAlertModal={setIsAlertModal}
                  setAlertStatus={setAlertStatus}
                  setAlertMessage={setAlertMessage}
                />
              ))
            ) : (
              <tr>
                <td colSpan={15} className="text-center">
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <Row className="mb-2 mt-3 justify-content-center justify-content-md-around align-items-center">
        <Col sm="12" md="11">
          <ReactPaginate
            pageCount={tempData.totalPage || 1}
            nextLabel={''}
            breakLabel={'...'}
            activeClassName={'active'}
            pageClassName={'page-item'}
            previousLabel={''}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item next-item'}
            forcePage={tempPageNumber - 1}
            onPageChange={(page) => {
              setTempPageNumber(page.selected + 1);
            }}
            previousClassName={'page-item prev-item'}
            previousLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={
              'pagination react-paginate m-0 justify-content-center justify-content-lg-end'
            }
          />
        </Col>
      </Row>
    </>
  );
};
export default mentorTable;
