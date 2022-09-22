import { List } from "react-feather";
import { kFormatter } from "src/utility/Utils";
import Avatar from "src/@core/components/avatar";
import Timeline from "src/@core/components/timeline";
import AvatarGroup from "src/@core/components/avatar-group";
// import InvoiceList from "pages/apps/invoice/list";
import Sales from "src/views/ui-elements/cards/analytics/Sales";
import AvgSessions from "src/views/ui-elements/cards/analytics/AvgSessions";
import CardAppDesign from "src/views/ui-elements/cards/advance/CardAppDesign";
import SupportTracker from "src/views/ui-elements/cards/analytics/SupportTracker";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
} from "reactstrap";
import OrdersReceived from "src/views/ui-elements/cards/statistics/OrdersReceived";
import CardCongratulations from "src/views/ui-elements/cards/advance/CardCongratulations";
import SubscribersGained from "src/views/ui-elements/cards/statistics/SubscribersGained";
import VerticalLayout from "src/@core/layouts/VerticalLayout";

const AnalyticsDashboard = () => {
  const colors = {
    primary: "#7367f0",
    secondary: "#82868b",
    success: "#28c76f",
    danger: "#ea5455",
    warning: "#ff9f43",
    info: "#00cfe8",
    dark: "#607d8b",
    trackBgColor: "#e9ecef",
  };

  const avatarGroupArr = [
      {
        title: "Billy Hopkins",
        img: "/images/portrait/small/avatar-s-9.jpg",
        placement: "bottom",
        imgHeight: 33,
        imgWidth: 33,
      },
      {
        title: "Amy Carson",
        img: "/images/portrait/small/avatar-s-6.jpg",
        placement: "bottom",
        imgHeight: 33,
        imgWidth: 33,
      },
      {
        title: "Brandon Miles",
        img: "/images/portrait/small/avatar-s-8.jpg",
        placement: "bottom",
        imgHeight: 33,
        imgWidth: 33,
      },
      {
        title: "Daisy Weber",
        img: "/images/portrait/small/avatar-s-7.jpg",
        placement: "bottom",
        imgHeight: 33,
        imgWidth: 33,
      },
      {
        title: "Jenny Looper",
        img: "/images/portrait/small/avatar-s-20.jpg",
        placement: "bottom",
        imgHeight: 33,
        imgWidth: 33,
      },
    ],
    data = [
      {
        title: "12 Invoices have been paid",
        content: "Invoices have been paid to the company.",
        meta: "",
        metaClassName: "mr-1",
        customContent: (
          <Media>
            <img
              className="mr-1"
              src="/images/icons/json.png"
              alt="data.json"
              height="23"
            />
            <Media className="mb-0" body>
              data.json
            </Media>
          </Media>
        ),
      },
      {
        title: "Client Meeting",
        content: "Project meeting with john @10:15am.",
        meta: "",
        metaClassName: "mr-1",
        color: "warning",
        customContent: (
          <Media className="align-items-center">
            <Avatar img="/images/portrait/small/avatar-s-9.jpg" />
            <Media className="ml-50" body>
              <h6 className="mb-0">John Doe (Client)</h6>
              <span>CEO of Infibeam</span>
            </Media>
          </Media>
        ),
      },
      {
        title: "Create a new project for client",
        content: "Add files to new design folder",
        color: "info",
        meta: "",
        metaClassName: "mr-1",
        customContent: <AvatarGroup data={avatarGroupArr} />,
      },
      {
        title: "Create a new project for client",
        content: "Add files to new design folder",
        color: "danger",
        meta: "",
        metaClassName: "mr-1",
      },
    ];

  return (
    <div id="dashboard-analytics">
      <Row className="match-height">
        <Col lg="6" sm="12">
          <CardCongratulations />
        </Col>
        <Col lg="3" sm="6">
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
        <Col lg="3" sm="6">
          <OrdersReceived kFormatter={kFormatter} warning={colors.warning} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="6" xs="12">
          <AvgSessions primary={colors.primary} />
        </Col>
        <Col lg="6" xs="12">
          <SupportTracker primary={colors.primary} danger={colors.danger} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="4" xs="12">
          <Card className="card-user-timeline">
            <CardHeader>
              <div className="d-flex align-items-center">
                <List className="user-timeline-title-icon" />
                <CardTitle tag="h4">User Timeline</CardTitle>
              </div>
            </CardHeader>
            <CardBody>
              <Timeline className="ml-50 mb-0" data={data} />
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="6" xs="12">
          <Sales primary={colors.primary} info={colors.info} />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardAppDesign />
        </Col>
      </Row>
      <Row className="match-height">
        <Col xs="12">{/* <InvoiceList /> */}</Col>
      </Row>
    </div>
  );
};

export default AnalyticsDashboard;

AnalyticsDashboard.getLayout = function getLayout(page) {
  return <VerticalLayout>{page}</VerticalLayout>;
};
