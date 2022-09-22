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
} from "reactstrap";
import {
  Printer,
  ExternalLink,
  Download,
  RefreshCw,
  RotateCw,
  Plus,
  ArrowRight,
} from "react-feather";
import { Card, CardBody } from "reactstrap";
import DocumentStatus from "components/custom/DocumentStatus";
import Badge from "reactstrap/lib/Badge";
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import Link from "next/link";

const ReviewBPM = () => {
  const [active, setActive] = useState("1");
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  const [picker, setPicker] = useState(new Date());
  const [searchValue, setSearchValue] = useState("");
  return (
    <Card>
      <Row>
        <Col sm="12" md="8">
          <h4 className="font-weight-bolder m-sm-2 m-md-3">Review BPM</h4>
        </Col>
        <Col sm="12" md="4">
          <Link href="\">
            <h6 className=" m-sm-2 m-md-3">
              <t className="viewDetailsText">View Details</t>{" "}
              <ArrowRight size="18px" />
            </h6>
          </Link>
        </Col>
      </Row>
      <Table responsive className="table border-bottom">
        <thead>
          <tr>
            <th className="text-center px-2 align-middle">BPM No</th>
            <th className="text-center px-2 align-middle">Status</th>
            <th className="text-center align-middle">Last Update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }}>BPM-AHD-2021.000</td>
            <td style={{ textAlign: "center" }}>
              <Badge color="light-primary" style={{ borderRadius: "18px" }}>
                Done
              </Badge>
            </td>
            <td style={{ textAlign: "center" }}>7 Feb 2021</td>
          </tr>
          <tr>
            <td style={{ textAlign: "center" }}>BPM-AHD-2021.000</td>
            <td style={{ textAlign: "center" }}>
              <Badge color="light-primary" style={{ borderRadius: "18px" }}>
                Done
              </Badge>
            </td>
            <td style={{ textAlign: "center" }}>7 Feb 2021</td>
          </tr>
        </tbody>
      </Table>
      <Row className="mx-0 ml-2 mb-2" style={{ marginTop: "67px" }}>
        <Col
          className="d-flex align-items-center justify-content-start mt-1"
          md="7"
          sm="12"
        ></Col>
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
  );
};

export default ReviewBPM;
