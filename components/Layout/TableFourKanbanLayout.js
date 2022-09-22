import DocumentDetails from "components/Card/DocumentDetails";
import ListCard from "components/Card/List";
import Sidebar from "components/custom/Sidebar";
import {
  Col,
  Row,
} from "reactstrap";
import Breadcrumbs from "src/@core/components/breadcrumbs";

const TableFourKanbanLayout = ({ children }) => {
  return (
    <div>
      <Breadcrumbs
        breadCrumbTitle="Page Title"
        breadCrumbParent="Review BPM"
        breadCrumbActive="Document List"
        disableDropdown
      />
      <Row>
        <Col lg="3" xs="12">
          <Row>
            <Col xs="12">
              <DocumentDetails />
            </Col>
            <Col xs="12">
              <ListCard />
            </Col>
            <Col xs="12">
              <Sidebar />
            </Col>
          </Row>
        </Col>
        <Col lg="9" xs="12">
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default TableFourKanbanLayout;
