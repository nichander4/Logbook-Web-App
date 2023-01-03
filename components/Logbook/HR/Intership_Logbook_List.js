import BreadCrumbs from "components/custom/BreadcrumbCustom";
import React, { useState } from "react";
import { Search } from "react-feather";
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
} from "reactstrap";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import styles from "styles/scrollbarTable.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { reauthenticate } from "redux/actions/auth";
import { getAllIntern } from "redux/actions/intern_action";
import moment from "moment";

const MenteeItem = ({ item }) => {
  return (
    <tr>
      <td style={{ textAlign: "start" }}>
        <Link href={`/logbook/${item.userName}/${item.id}`} passHref>
          {item.userName}
        </Link>
      </td>
      <td style={{ textAlign: "start" }}>{item.university}</td>
      <td style={{ textAlign: "start" }}>{item.department}</td>
      <td style={{ textAlign: "start" }}>{item.position}</td>
      <td style={{ textAlign: "start" }}>{item.mentor.userName}</td>
      <td style={{ textAlign: "start" }}>{moment(item.endDate).format("D MMM YYYY")}</td>
    </tr>
  );
};

const Intership_Logbook_List = ({ token, user }) => {
  const [active, setActive] = useState("1");
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  const dispatch = useDispatch();
  const [dataState, setDataState] = useState("");
  const [tempPageSize, setTempPageSize] = useState(5);
  const [tempPageNumber, setTempPageNumber] = useState(1);
  const [tempSearchQuery, setTempSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(reauthenticate(token));
    dispatch(
      getAllIntern(
        tempPageNumber,
        tempPageSize,
        tempSearchQuery,
      )
    ).then((response) => {
      setDataState({
        data: response.data.data,
        currentPage: response.data.currentPage,
        pageSize: response.data.pageSize,
        totalPage: response.data.totalPage,
      });
      setLoading(false);
    });
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
      <BreadCrumbs
        breadCrumbParent="Mentor"
        breadCrumbActive="Internship Log book"
      />
      <Row className="mt-1">
        <Col md="7" sm="7">
          <h2 className="mt-1">Internship Log Book</h2>
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
                    if (e.key === "Enter") handleSearchQuery(e.target.value);
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
          <div id={styles.Table}>
            <Table
              className="table border-1 text-nowrap"
              style={{ border: "1px solid #d8d6de" }}
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
                {loading ? (
                  <tr>
                    <td colSpan={15} className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : dataState && dataState.data.length > 0 ? (
                  dataState.data.map(
                    (item, id) => (id++, (<MenteeItem key={item.id} item={item} />))
                  )
                  // <></>
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
                pageCount={dataState.totalPage || 1}
                forcePage={tempPageNumber - 1}
                onPageChange={(page) => {
                  setTempPageNumber(page.selected + 1);
                }}
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
        </TabPane>
      </TabContent>
    </>
  );
};

export default Intership_Logbook_List;
