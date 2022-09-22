import { Row, Col, Card } from "reactstrap";
const ListProgress = ({ title, number, objective, entity, document }) => {
  return (
    <Card className="card-listprogress bg-primary bg-lighten-5">
      <img
        src="/images/custom/Ellipse.png"
        alt="Exploring"
        className="ellipse-listprogress"
      />
      <h3 className="title-listprogress">{title}</h3>
      <div className="num-listprogress">{number}</div>
      <Row className="row1-listprogress">
        <p className="sub-listprogress">Objective</p>
        <p className="content-listprogress">{objective}</p>
      </Row>
      <hr className="hr-listprogress" />
      <Row className="row2-listprogress mb-2">
        <p className="sub-listprogress">Entity References</p>
        <p className="content-listprogress">{entity}</p>
      </Row>
      <Row className="row2-listprogress">
        <p className="sub-listprogress">Document Refereces</p>
        <p className="content-listprogress">{document}</p>
      </Row>
    </Card>
  );
};

export default ListProgress;
