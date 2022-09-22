import KanbanCard from "components/Card/KanbanCard";
import { Col, Row } from "reactstrap";
import VerticalLayout from "src/@core/layouts/VerticalLayout"
import ListProgress from "components/custom/ListProgress";
import DetailsPopUp from "components/modal/DetailsPopUp";
import DetailsPopUp2 from "components/modal/DetailsPopUp2";
import SuccessPopUp from "components/modal/SuccessPopUp";
import ApprovePopUp from "components/modal/ApprovePopUp";
import WarningPopUp from "components/modal/WarningPopUp";
import ApprovalPopUp from "components/modal/ApprovalPopUp";
import NotePopUp from "components/modal/NotePopUp";
import RejectPopUp from "components/modal/RejectPopUp";
import AttachmentPopUp from "components/modal/AttachmentPopUp";
import TermsAndConditionsPopUp from "components/modal/TermsAndConditionsPopUp";

const Home = () => {
  return (
    <VerticalLayout>
      <h1>Hello Index</h1>
      <Row className="row no-gutters">
        <Col className="mr-2">
          <ListProgress 
            title="Exploring Idea" 
            number="1" 
            objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
            entity="N/A"
            document="N/A"
          />
        </Col>
        <Col className="mr-2">
          <ListProgress
            title="Feasability Study" 
            number="2" 
            objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
            entity="N/A"
            document="N/A"
          />
        </Col>
        <Col className="mr-2">
          <ListProgress
            title="Product Development" 
            number="3" 
            objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
            entity="N/A"
            document="N/A"
          />
        </Col>
        <Col className="mr-2">
          <ListProgress
            title="Product Registration Process" 
            number="4" 
            objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
            entity="N/A"
            document="N/A"
          />
        </Col>
      </Row>

      <DetailsPopUp />

      <DetailsPopUp2 />

      <SuccessPopUp />

      <ApprovePopUp />

      <WarningPopUp />

      <ApprovalPopUp />

      <NotePopUp />

      <RejectPopUp />

      <AttachmentPopUp />

      <TermsAndConditionsPopUp />

      <br/>

      <div>
        <Row>
          <Col lg="4" xs="12">
            <KanbanCard />
          </Col>
        </Row>
      </div>
    </VerticalLayout>
  )
}

export default Home
