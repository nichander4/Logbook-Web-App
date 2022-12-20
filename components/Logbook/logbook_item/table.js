import React, { useState } from "react";
import { useEffect } from "react";
import { Search } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
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
  Button,
} from "reactstrap";
import { reauthenticate } from "redux/actions/auth";
import { getLogbook } from "redux/actions/intern_action";

import styles1 from "styles/scrollbarTable.module.css";
import TableItem from "./item";

const TableLogbook = ({ id, token }) => {
  const DUMMY_Item = [
    {
      date: "Fri, 01 Jul 2022",
      name: "Nicholas Anderson",
      activity: "mengerjakan bla bla",
      isWfo: "WFH",
      check_in: "07:30 am",
      check_out: "04:00 pm",
      mentor_approval: "Awaiting",
      hr_approval: "Approved",
    },
  ];

  const dispatch = useDispatch();
  const [dataState, setDataState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [SubmitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(reauthenticate(token));
    dispatch(getLogbook(id)).then((data) => {
      console.log(data, "DATAAAA");
      setDataState(data);
      setLoading(false);
    });

    return () => {
      setDataState([]);
    };
  }, []);

  const submitLogbook = () => {
    setSubmitLoading(true);
    setTimeout(function () {
      setSubmitLoading(false);
    }, 1000);
  };

  return (
    <>
      <Row className="mb-1">
        <Col
          className="d-flex align-items-center justify-content-start"
          xl="1"
          md="2"
          sm="3"
        >
          <Label className="mr-1" for="search-input-1">
            Show
          </Label>
          <CustomInput type="select" className="custominput-table2 border-0">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </CustomInput>
        </Col>

        <Col className="" xl="7" md="6" sm="5">
          <div className="d-flex justify-content-center">
            <Label className="text-dark">
              *All log book entries for this month are required
            </Label>
          </div>
          <div className="d-flex justify-content-center ">
            <Button.Ripple
              color="primary"
              className="d-flex align-items-center"
              onClick={submitLogbook}
              disabled={SubmitLoading}
            >
              {SubmitLoading ? "Submitting..." : "Submit Log book"}
              {/* Process Log Book Calculations */}
            </Button.Ripple>
          </div>
        </Col>

        <Col
          className="d-flex align-items-center justify-content-center justify-content-lg-end pr-lg-1 mb-sm-1"
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

      <div id={styles1.Table}>
        <Table
          className="table border-1 text-nowrap"
          style={{ border: "1px solid #d8d6de" }}
        >
          <thead>
            <tr>
              <th className="text-left align-middle">Date</th>
              <th className="text-left align-middle">Activity</th>
              <th className="text-left align-middle">WFH/WFO</th>
              <th className="text-left align-middle">Check in</th>
              <th className="text-left align-middle">check out</th>
              <th className="text-left align-middle">MENTOR Approval</th>
              <th className="text-left align-middle">HR Approval</th>
              <th className="text-center align-middle">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* {dataState.items ? (
              (dataState.items)
                .map
                (item, id) => (id++, (<TableItem key={id} item={item} />))
                ()
            ) : (
              <></>
            )} */}
            {loading ? (
              <tr>
                <td colSpan={15} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : dataState.items ? (
              dataState.items.map(
                (item, id) => (id++, (<TableItem key={id} item={item} token={token}/>))
              )
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
        <Col sm="6" md="6">
          <h3>Total Salary : Rp. {"180,000"}</h3>
        </Col>

        <Col sm="6" md="6">
          <ReactPaginate
            pageCount="5"
            nextLabel={""}
            breakLabel={"..."}
            activeClassName={"active"}
            pageClassName={"page-item"}
            previousLabel={""}
            nextLinkClassName={"page-link"}
            nextClassName={"page-item next-item"}
            previousClassName={"page-item prev-item"}
            previousLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={
              "pagination react-paginate m-0 justify-content-center justify-content-lg-end"
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default TableLogbook;
