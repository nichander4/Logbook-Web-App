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
  CardHeader,
  CardTitle,
  FormattedMessage,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  Printer,
  ExternalLink,
  Download,
  RefreshCw,
  RotateCw,
  Plus,
  MoreVertical,
  Edit2,
  CheckCircle,
  XCircle,
  EyeOff,
  CornerUpLeft,
} from "react-feather";
import Card from "reactstrap/lib/Card";
import DocumentStatus from "components/custom/DocumentStatus";
import Badge from "reactstrap/lib/Badge";
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import Link from "next/link";
const Table1 = () => {
  const [active, setActive] = useState("1");
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  const [picker, setPicker] = useState(new Date());
  const [searchValue, setSearchValue] = useState("");
  return (
    <VerticalLayout>
      <Breadcrumbs
        breadCrumbTitle="Review BPM"
        breadCrumbParent="Review BPM"
        breadCrumbActive="Review BPM"
      />
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <Card className="card-table2">
            <Row className="ml-0 mb-3">
              <Col className="justify-content-start mt-1" md="4" sm="12">
                <Label for="readonlyInput">Entity</Label>
                <Input
                  className="input-table2"
                  type="text"
                  value="Animal Health Division"
                />
              </Col>
              <Col className="justify-content-start mt-1" md="4" sm="12">
                <Label for="readonlyInput">Sort</Label>
                <Input className="input-table2" type="text" value="1" />
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
                  <Button color="primary" className=" button2-table2 p-0">
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
                          <Link href="/">
                            <DropdownItem
                              href="/"
                              className="action-vuexy-item"
                              // onClick={() => {
                              //   router.replace(`idea_catalog/detail/${id}`);
                              // }}
                            >
                              <Edit2 className="mr-2" size={15} />{" "}
                              <span className="align-middle">View Details</span>
                            </DropdownItem>
                          </Link>
                          <DropdownItem className="action-vuexy-item w-100">
                            <CheckCircle className="mr-2" size={15} />{" "}
                            <span className="align-middle font-weight-bold">
                              Submit
                            </span>
                          </DropdownItem>
                          <DropdownItem className="action-vuexy-item w-100">
                            <XCircle className="mr-2" size={15} />{" "}
                            <span className="align-middle font-weight-bold">
                              Reject
                            </span>
                          </DropdownItem>
                          <DropdownItem className="action-vuexy-item w-100">
                            <EyeOff className="mr-2" size={15} />{" "}
                            <span className="align-middle">Hide</span>
                          </DropdownItem>
                          <DropdownItem className="action-vuexy-item w-100">
                            <XCircle className="mr-2" size={15} />{" "}
                            <span className="align-middle font-weight-bold">
                              Revised
                            </span>
                          </DropdownItem>
                          <DropdownItem className="action-vuexy-item w-100">
                            <CornerUpLeft className="mr-2" size={15} />{" "}
                            <span className="align-middle font-weight-bold">
                              Revised
                            </span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
                          <Link href="/">
                            <DropdownItem
                              href="/"
                              className="action-vuexy-item"
                              // onClick={() => {
                              //   router.replace(`idea_catalog/detail/${id}`);
                              // }}
                            >
                              <Edit2 className="mr-2" size={15} />{" "}
                              <span className="align-middle">View Details</span>
                            </DropdownItem>
                          </Link>
                          <DropdownItem className="action-vuexy-item w-100">
                            <CheckCircle className="mr-2" size={15} />{" "}
                            <span className="align-middle font-weight-bold">
                              Submit
                            </span>
                          </DropdownItem>
                          <DropdownItem className="action-vuexy-item w-100">
                            <XCircle className="mr-2" size={15} />{" "}
                            <span className="align-middle font-weight-bold">
                              Reject
                            </span>
                          </DropdownItem>
                          <DropdownItem className="action-vuexy-item w-100">
                            <EyeOff className="mr-2" size={15} />{" "}
                            <span className="align-middle">Hide</span>
                          </DropdownItem>
                          <DropdownItem className="action-vuexy-item w-100">
                            <XCircle className="mr-2" size={15} />{" "}
                            <span className="align-middle font-weight-bold">
                              Revised
                            </span>
                          </DropdownItem>
                          <DropdownItem className="action-vuexy-item w-100">
                            <CornerUpLeft className="mr-2" size={15} />{" "}
                            <span className="align-middle font-weight-bold">
                              Revised
                            </span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
          </Card>
        </TabPane>
      </TabContent>
    </VerticalLayout>
  );
};

export default Table1;
