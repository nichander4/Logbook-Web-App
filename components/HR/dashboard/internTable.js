import React, { useEffect, useState } from 'react';
import { Plus, Search } from 'react-feather';
import ReactPaginate from 'react-paginate';
import {
  Table,
  Label,
  Row,
  Col,
  CustomInput,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Button
} from 'reactstrap';

import styles1 from 'styles/scrollbarTable.module.css';
import InternTableItem from './internTableItem';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { reauthenticate } from 'redux/actions/auth';
import { getAllIntern } from 'redux/actions/intern_action';
import ComboAlert from 'components/Alert/ComboAlert';

const tabTable_intern = ({ token }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [loadingData, setLoadingData] = useState(false);

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  const [tempData, setTempData] = useState('');
  const [tempPageSize, setTempPageSize] = useState(5);
  const [tempPageNumber, setTempPageNumber] = useState(1);
  const [tempSearchQuery, setTempSearchQuery] = useState('');

  useEffect(() => {
    setLoadingData(true);
    dispatch(reauthenticate(token));

    dispatch(getAllIntern(tempPageNumber, tempPageSize, tempSearchQuery)).then(
      (response) => {
        setTempData({
          data: response.data.data,
          currentPage: response.data.currentPage,
          pageSize: response.data.pageSize,
          totalPage: response.data.totalPage
        });
        setLoadingData(false);
      }
    );
  }, [tempPageSize, tempPageNumber, tempSearchQuery, isDeleteModal]);

  const handlePageSize = (e) => {
    setTempPageSize(e.target.value);
    setTempPageNumber(1);
  };

  const doSearch = (e) => {
    setTempSearchQuery(e);
    setTempPageNumber(1);
  };

  return (
    <>
  
      <h3 className="mb-2">Intern List</h3>
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
              className="searchField search-table2 d-flex w-50"
              type="text"
              name="search"
              id="doSearch"
              placeholder="Search"
              value={tempSearchQuery}
              onKeyPress={(e) => {
                if (e.key === 'Enter') doSearch(e.target.value);
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

      <div id={styles1.Table} className="pb-3">
        <Table
          className="table border-1 text-nowrap"
          style={{ border: '1px solid #d8d6de' }}
        >
          <thead>
            <tr>
              <th className="text-center align-middle">ACTION</th>
              <th className="text-left align-middle">NAME</th>
              <th className="text-left align-middle">UNIVERSITY</th>
              <th className="text-left align-middle">DEPARTMENT</th>
              <th className="text-left align-middle">POSITION</th>
              <th className="text-left align-middle">MENTOR</th>
              <th className="text-left align-middle">END DATE</th>
            </tr>
          </thead>
          <tbody>
            {loadingData ? (
              <tr>
                <td colSpan={15} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : tempData && tempData.data.length > 0 ? (
              tempData.data.map((data) => (
                <InternTableItem
                  key={data.id}
                  data={data}
                  isDeleteModal = {isDeleteModal}
                  setIsDeleteModal = {setIsDeleteModal}
                  isAlertModal = {isAlertModal}
                  setIsAlertModal = {setIsAlertModal}
                  alertStatus = {alertStatus}
                  setAlertStatus = {setAlertStatus}
                  alertMessage = {alertMessage}
                  setAlertMessage = {setAlertMessage}
                  dispatch={dispatch}
                  router={router}
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
      <Row className="mb-2 mt-1 justify-content-center justify-content-md-around align-items-center">
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
      <ComboAlert
        router={router}
        routerPath="/home"
        isAlertModal={isAlertModal}
        setIsAlertModal={setIsAlertModal}
        alertStatus={alertStatus}
        alertMessage={alertMessage}
        isDeleteModal={isDeleteModal}
      />
      
    </>
  );
};

export default tabTable_intern;
