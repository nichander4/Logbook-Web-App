import { Fragment } from "react";
import { Row, Col } from "reactstrap";
// import WizardHorizontal from "src/views/forms/wizard/WizardHorizontal";
// import BreadCrumbs from "src/@core/components/breadcrumbs";
import BreadCrumbs from "src/@core/components/breadcrumbs";
import Form from "components/custom/Form";
import dynamic from "next/dynamic";
import VerticalLayout from "src/layouts/VerticalLayout";
import { getSession, useSession } from "next-auth/react";

const WizardHorizontal = dynamic(
  () => import("src/views/forms/wizard/WizardHorizontal"),
  { ssr: false }
);

const Wizard = () => {
  const session = useSession();
  console.log(session, "aa");
  return (
    <VerticalLayout>
      <BreadCrumbs
        breadCrumbTitle="Form Wizard"
        breadCrumbParent="Form"
        breadCrumbActive="Form Wizard"
      />
      <Row>
        <Col sm="8">
          <WizardHorizontal />
          {/* <Form /> */}
        </Col>
      </Row>
    </VerticalLayout>
  );
};
export default Wizard;
