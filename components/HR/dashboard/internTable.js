import React, { useEffect, useState } from 'react';
import { Search } from 'react-feather';
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
  InputGroupText
} from 'reactstrap';

import styles1 from 'styles/scrollbarTable.module.css';
import InternTableItem from './internTableItem';
import { useDispatch, connect } from 'react-redux';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { reauthenticate } from 'redux/actions/auth';
import { getAllIntern } from 'redux/actions/intern_action';
import { wrapper } from 'redux/store';
import {
  resetPage,
  resetPageSize,
  setPage,
  setPageSize,
  setSearch
} from 'redux/action/pagination.js';
import { useSelector } from 'react-redux';
import {useSession } from "next-auth/react";

const internTable = ({ dataIntern, token }) => {
  const { data: session, status } = useSession();
  console.log(dataIntern, 'test data')
  console.log(session?.user.token, 'test token')
  const router = useRouter();
  const dispatch = useDispatch();

  const [dataState, setDataState] = useState(dataIntern);

  const { pagination, page, pageSize, search, pageCount } = useSelector(
    (state) => state.pagination
  );

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    dispatch(reauthenticate(token));
    dispatch(getAllIntern(page, pageSize, search)).then((response) => {
      console.log(response,"test response");
      // setDataState(response.data);
    });
    // getAllIntern(page, pageSize, search).then((response) => {
    //   console.log(response, 'asdasd');
    //   setDataState(response.data);
    // });
    console.log(dataState, 'asd');
  }, [page, pageSize, search]);

  const handlePageSize = (value) => {
    dispatch(setPageSize(value));
  };

  const handlePagination = (page) => {
    dispatch(setPage(page.selected + 1));
  };

  const handleSearchQuery = (search) => {
    dispatch(setSearch(search));
  };
  const DUMMY_MenteeItem = [
    {
      name: 'Nicholas Anderson',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    },
    {
      name: 'Reyhan Nathanael',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    },
    {
      name: 'Nicholas Anderson',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    },
    {
      name: 'Reyhan Nathanael',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    },
    {
      name: 'Nicholas Anderson',
      university: 'BINUS',
      department: 'CIT',
      position: 'Web Developer',
      mentor: 'Edwin Simjaya',
      endDate: '23-2-2023'
    }
  ];

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
            value={pageSize}
            onChange={(e) => handlePageSize(e.target.value)}
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
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSearchQuery(e.target.value);
              }}
              onChange={(e) => {
                dispatch(setSearch(e.target.value));
              }}
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
              <th className="text-left align-middle">UNIVERSITY</th>
              <th className="text-left align-middle">DEPARTMENT</th>
              <th className="text-left align-middle">POSITION</th>
              <th className="text-left align-middle">MENTOR</th>
              <th className="text-left align-middle">END DATE</th>
            </tr>
          </thead>
          <tbody>
            {dataState &&
              dataState.data &&
              dataState.data.map((data) => (
                <InternTableItem
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
              ))}
            {/* {DUMMY_MenteeItem.map(
              (item, id) => (id++, (<InternTableItem key={id} item={item} />))
            )} */}
          </tbody>
        </Table>
      </div>
      <Row className="mx-0 ml-2 mb-2" style={{ marginTop: '67px' }}>
        <Col
          // className="d-flex align-items-center justify-content-start mt-1"
          md="7"
          sm="12"
        >
          {/* <p
            className="mb-0 text-center text-md-left"
            style={{ color: '#b9b9c3' }}
          >
            Showing {(dataState.currentPage - 1) * dataState.pageSize + 1} to{' '}
            {dataState.hasNext
              ? dataState.currentPage * dataState.pageSize
              : dataState.totalData}{' '}
            of {dataState.totalData} entries
          </p> */}
        </Col>
        <Col sm="12" md="5">
          <ReactPaginate
            onPageChange={(page) => handlePagination(page)}
            // pageCount={dataState.totalPage}
            nextLabel={''}
            breakLabel={'...'}
            activeClassName={'active'}
            pageClassName={'page-item'}
            previousLabel={''}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item next-item'}
            previousClassName={'page-item prev-item'}
            previousLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={
              'pagination react-paginate m-0 justify-content-center justify-content-lg-end'
            }
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { req, query } = ctx;
    const sessionData = await getSession(ctx);

    if (!sessionData) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false
        }
      };
    }

    store.dispatch(reauthenticate(sessionData.user.token));
    await store.dispatch(getAllIntern(1, 10, ''));

    const dataIntern = store.getState().intern;

    return {
      props: {
        dataIntern,
        token: sessionData.user.token
      }
    };
  }
);

export default connect((state) => state)(internTable);
