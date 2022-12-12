import BreadCrumbs from 'components/custom/BreadcrumbCustom';
import React, { useState } from 'react';
import { Search,} from 'react-feather';
import {
  TabContent,
  TabPane,
  Button,
  Input,
  Label,
  Table,
  CustomInput,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import styles from 'styles/scrollbarTable.module.css';

const MenteeItem = ({ item }) => {
  return (
    <tr>
      <td style={{ textAlign: 'start' }}>
        <Link href={`/logbook`} passHref>
          {item.name}
        </Link>
      </td>
      <td style={{ textAlign: 'start' }}>{item.university}</td>
      <td style={{ textAlign: 'start' }}>{item.department}</td>
      <td style={{ textAlign: 'start' }}>{item.position}</td>
      <td style={{ textAlign: 'start' }}>{item.mentor}</td>
      <td style={{ textAlign: 'start' }}>{item.endDate}</td>
    </tr>
  );
};

function IntershipLogbook() {
  const [active, setActive] = useState('1');
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
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
    
        <BreadCrumbs
          breadCrumbParent="HR"
          breadCrumbActive="Internship Log book"
        />
        <Row className="mt-1">
          <Col md="7" sm="7">
            <h2 className="mt-1">Internship Log Book - 2022</h2>
          </Col>
        </Row>

        <TabContent className="py-50" activeTab={active}>
          <TabPane tabId="1">
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
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <Search size={14} />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
            <div id={styles.Table}>
              <Table
                className="table border-1 text-nowrap"
                style={{ border: '1px solid #d8d6de' }}
              >
                <thead>
                  <tr>
                    <th className="text-left align-middle">NAME</th>
                    <th className="text-left align-middle">UNIVERSITY</th>
                    <th className="text-left align-middle">DEPARTMENT</th>
                    <th className="text-left align-middle">POSITION</th>
                    <th className="text-left align-middle">MENTOR</th>
                    <th className="text-left align-middle">END DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {DUMMY_MenteeItem.map(
                    (item, id) => (id++, (<MenteeItem key={id} item={item} />))
                  )}
                </tbody>
              </Table>
            </div>
            <Row className="mb-2 mt-3 justify-content-center justify-content-md-around align-items-center">
              <Col sm="12" md="11">
                <ReactPaginate
                  pageCount="5"
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
                />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
     
    </>
  );
}

export default IntershipLogbook;
