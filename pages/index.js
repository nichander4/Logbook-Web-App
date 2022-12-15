import DocumentDetails from "components/Card/DocumentDetails";
import KanbanCard from "components/Card/KanbanCard";
import List from "components/Card/List";
import UserInformationForm from "components/Form/UserInformationForm";
import { Col, Row } from "reactstrap";
import VerticalLayout from "src/@core/layouts/VerticalLayout";
import ListProgress from "components/custom/ListProgress";
import FormCustom from "components/custom/Form";
import DocumentStatus from "components/custom/DocumentStatus";
import CalendarCard from "components/Card/CalendarCard";
import Sidebar from "components/custom/Sidebar";
import StatisticCard from "components/Card/StatisticCard";
import WelcomeCard from "components/Card/WelcomeCard";
import ReviewBPMCard from "components/Card/ReviewBPMCard";
import Table1 from "components/Tables/Table1";
import Table2 from "components/Tables/Table2";
import Table3 from "components/Tables/Table3";
import { getSession, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const Home = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const session = useSession();
  
  useEffect(() => {
    signIn();
  }, [session]);

  return (
    <VerticalLayout>
      <Row>
        <Col lg="3">
          <WelcomeCard />
        </Col>
        <Col>
          <StatisticCard cols="1" />
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg="4" xl="3">
          <CalendarCard />
        </Col>
        <Col xs="12" lg="8" xl="9">
          <ReviewBPMCard />
        </Col>
      </Row>
    </VerticalLayout>
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;

  const sessionData = await getSession(ctx);

  if (sessionData) {
    return {
      redirect: {
        destination: "/form",
        permanent: false,
      },
    };
  }

  return {
    props: {
    },
  };
}

export default Home;
