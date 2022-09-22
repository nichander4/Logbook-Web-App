import { Row, Col } from "reactstrap";
import CompanyTable from "./CompanyTable";
import Earnings from "src/views/ui-elements/cards/analytics/Earnings";
import CardMedal from "src/views/ui-elements/cards/advance/CardMedal";
import CardMeetup from "src/views/ui-elements/cards/advance/CardMeetup";
import StatsCard from "src/views/ui-elements/cards/statistics/StatsCard";
import GoalOverview from "src/views/ui-elements/cards/analytics/GoalOverview";
import RevenueReport from "src/views/ui-elements/cards/analytics/RevenueReport";
import OrdersBarChart from "src/views/ui-elements/cards/statistics/OrdersBarChart";
import ProfitLineChart from "src/views/ui-elements/cards/statistics/ProfitLineChart";
import CardTransactions from "src/views/ui-elements/cards/advance/CardTransactions";
import CardBrowserStates from "src/views/ui-elements/cards/advance/CardBrowserState";
import VerticalLayout from "src/@core/layouts/VerticalLayout";

const EcommerceDashboard = () => {
  const colors = {
    primary: "#46A583",
    secondary: "#FF795B",
    success: "#28c76f",
    danger: "#ea5455",
    warning: "#ff9f43",
    info: "#00cfe8",
    dark: "#607d8b",
    trackBgColor: "#e9ecef",
  };

  return (
    <div id="dashboard-ecommerce">
      <Row className="match-height">
        <Col xl="4" md="6" xs="12">
          <CardMedal />
        </Col>
        <Col xl="8" md="6" xs="12">
          <StatsCard cols={{ xl: "3", sm: "6" }} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="4" md="12">
          <Row className="match-height">
            <Col lg="6" md="3" xs="6">
              <OrdersBarChart warning={colors.warning} />
            </Col>
            <Col lg="6" md="3" xs="6">
              <ProfitLineChart info={colors.info} />
            </Col>
            <Col lg="12" md="6" xs="12">
              <Earnings success={colors.success} />
            </Col>
          </Row>
        </Col>
        <Col lg="8" md="12">
          <RevenueReport primary={colors.primary} warning={colors.warning} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="8" xs="12">
          <CompanyTable />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardMeetup />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardBrowserStates colors={colors} />
        </Col>
        <Col lg="4" md="6" xs="12">
          <GoalOverview success={colors.success} />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardTransactions />
        </Col>
      </Row>
    </div>
  );
};

export default EcommerceDashboard;

EcommerceDashboard.getLayout = function getLayout(page) {
  return <VerticalLayout>{page}</VerticalLayout>;
};
