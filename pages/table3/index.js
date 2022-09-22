import VerticalLayout from "src/@core/layouts/VerticalLayout";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "components/custom/BreadcrumbCustom";
import { Fragment, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Input,
  Label,
  Table,
  CustomInput,
} from "reactstrap";
import {
  Printer,
  ExternalLink,
  Download,
  RefreshCw,
  RotateCw,
  Plus,
} from "react-feather";
import Card from "reactstrap/lib/Card";
import DocumentStatus from "components/custom/DocumentStatus";
import Badge from "reactstrap/lib/Badge";
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import CollapsibleRow from "components/custom/CollapsibleRow";
const Table3 = () => {
  const [active, setActive] = useState("1");
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  const data = [
    {
      id: "1045",
      no: 1,
      item: "Lorem ipsum dolor, adipiscing elit...",
    },
    {
      no: 2,
      id: "1045",
      item: "Lorem ipsum dolor, adipiscing elit...",
    },
  ];
  const [picker, setPicker] = useState(new Date());
  return (
    <VerticalLayout>
      <Breadcrumbs
        breadCrumbTitle="Page Title"
        breadCrumbParent="User"
        breadCrumbActive="Page Title"
      />
      <Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={active === "1"}
              onClick={() => {
                toggle("1");
              }}
            >
              Data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled> Attachment </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled> Approval Log </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled> Reviewer </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="py-50" activeTab={active}>
          <TabPane tabId="1">
            <Card className="card-table2">
              <div className="justify-content-start ml-0 mb-3">
                <Button color="primary" className="button-table2 mr-2 mb-1">
                  <Printer size={14} />
                  <span className="align-middle ml-25">Print</span>
                </Button>
                <Button color="primary" className="button-table2 mr-2 mb-1">
                  <ExternalLink size={14} />
                  <span className="align-middle ml-25">Export</span>
                </Button>
                <Button color="primary" className="button-table2 mr-2 mb-1">
                  <Download size={14} />
                  <span className="align-middle ml-25">Import</span>
                </Button>
                <Button color="primary" className="button-table2 mr-2 mb-1">
                  <RotateCw size={14} />
                  <span className="align-middle ml-25">Reload</span>
                </Button>
                <Button color="primary" className="button-table2 mr-2 mb-1">
                  <RefreshCw size={14} />
                  <span className="align-middle ml-25">Refresh</span>
                </Button>
              </div>
              <h2 className="font-weight-bolder mb-2">
                Operational Risk Register Document
              </h2>
              <Row className="ml-0 mb-3">
                <Col className="justify-content-start mt-1" md="4" sm="12">
                  <Label for="readonlyInput">RR Doc. No</Label>
                  <Input
                    className="input-table2"
                    type="text"
                    value="M1.RR.-AHD.2021.000"
                  />
                </Col>
                <Col className="justify-content-start mt-1" md="4" sm="12">
                  <Label for="readonlyInput">Main/Supportive Business</Label>
                  <Input
                    className="input-table2"
                    type="text"
                    value="Business Development"
                  />
                </Col>
                <Col className="justify-content-start mt-1" md="4" sm="12">
                  <Label for="readonlyInput">Document Status</Label>
                  <DocumentStatus />
                </Col>
              </Row>
              <Card className="pt-2" style={{ border: "1px solid #d8d6de" }}>
                <Row className="mx-0 mb-2">
                  <Col
                    className="d-flex align-items-center justify-content-start mt-1"
                    xl="6"
                    md="4"
                    sm="12"
                  >
                    <Label className="mr-1" for="search-input-1">
                      Show
                    </Label>
                    <CustomInput type="select" className="custominput-table2">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </CustomInput>
                  </Col>
                  <Col
                    className="d-flex align-items-center justify-content-center mt-1"
                    xl="2"
                    md="3"
                    sm="12"
                  >
                    <Flatpickr
                      id="range-picker"
                      className="form-control datepicker-table2"
                      onChange={(date) => setPicker(date)}
                      placeholder="Date Range Picker"
                      options={{
                        mode: "range",
                      }}
                    />
                  </Col>
                  <Col
                    className="d-flex align-items-center justify-content-center justify-content-lg-end mt-1 pr-lg-0"
                    xl="3"
                    md="4"
                    sm="12"
                  >
                    <Input
                      className="search-table2"
                      type="text"
                      name="search"
                      id="search-invoice"
                      placeholder="Search"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          searchFunction(e.target.value, altPage);
                          setTempName(e.target.value);
                        }
                      }}
                      onChange={(e) => {
                        setTempName(e.target.value);
                      }}
                    />
                  </Col>
                  <Col
                    className="d-flex align-items-center justify-content-end mt-1"
                    md="1"
                    sm="12"
                  >
                    <Button color="primary" className="button2-table2 p-0">
                      <Plus size={14} />
                    </Button>
                  </Col>
                </Row>
                <Table responsive className="table border-bottom">
                  <thead>
                    <tr>
                      <th className="text-center px-2 align-middle">BPM No</th>
                      <th className="text-center px-2 align-middle">Status</th>
                      <th className="text-center align-middle">Last Update</th>
                      <th className="text-center align-middle">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: "center" }}>BPM-AHD-2021.000</td>
                      <td style={{ textAlign: "center" }}>
                        <Badge
                          color="light-primary"
                          style={{ borderRadius: "18px" }}
                        >
                          Done
                        </Badge>
                      </td>
                      <td style={{ textAlign: "center" }}>7 Feb 2021</td>
                      <td style={{ textAlign: "center" }}>
                        <Download
                          className="mr-50"
                          size={25}
                          style={{ color: "green" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "center" }}>BPM-AHD-2021.000</td>
                      <td style={{ textAlign: "center" }}>
                        <Badge
                          color="light-primary"
                          style={{ borderRadius: "18px" }}
                        >
                          Done
                        </Badge>
                      </td>
                      <td style={{ textAlign: "center" }}>7 Feb 2021</td>
                      <td style={{ textAlign: "center" }}>
                        <Download
                          className="mr-50"
                          size={25}
                          style={{ color: "green" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Row className="mb-2 mt-3 justify-content-center justify-content-md-around align-items-center">
                  <Col className="mb-2 mb-md-0" sm="12" md="5">
                    <p
                      className="mb-0 text-center text-md-left"
                      style={{ color: "#b9b9c3" }}
                    >
                      Showing 1 to 10 of 29 entries
                    </p>
                  </Col>
                  <Col sm="12" md="5">
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
              </Card>
              <Card className="pt-2" style={{ border: "1px solid #d8d6de" }}>
                <Card>
                  <Row className="mx-0 mb-2 justify-content-start">
                    <Col
                      sm="7"
                      md="9"
                      lg="9"
                      xl="6"
                      className="mb-2 pl-lg-5 pl-"
                    >
                      <h5 className="font-weight-bolder mr-3 mt-1">
                        {" "}
                        Table Title
                      </h5>
                    </Col>
                    <Col sm="5" md="3" lg="3" xl="2" className="mb-2">
                      <Label className="mr-1" for="search-input-1">
                        Show
                      </Label>
                      <CustomInput type="select" className="custominput-table2">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                      </CustomInput>
                    </Col>
                    <Col sm="12" md="12" lg="12" xl="4">
                      <Input
                        className="search-table2 mr-2"
                        type="text"
                        name="search"
                        id="search-invoice"
                        placeholder="Search"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            searchFunction(e.target.value, altPage);
                            setTempName(e.target.value);
                          }
                        }}
                        onChange={(e) => {
                          setTempName(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <CollapsibleRow data={data} />
                </Card>
                <Row className="mb-2 mt-3 justify-content-center justify-content-md-around align-items-center">
                  <Col className="mb-2 mb-md-0" sm="12" md="5">
                    <p
                      className="mb-0 text-center text-md-left"
                      style={{ color: "#b9b9c3" }}
                    >
                      Showing 1 to 10 of 29 entries
                    </p>
                  </Col>
                  <Col sm="12" md="5">
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
              </Card>
            </Card>
          </TabPane>
        </TabContent>
      </Fragment>
    </VerticalLayout>
  );
};

export default Table3;
