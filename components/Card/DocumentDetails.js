import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Collapse,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const DocumentDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const CreateDataBox = ({ title, content }) => (
    <ListGroup className="mb-2">
      <Label>{title}</Label>
      <ListGroupItem className="rounded text-truncate">{content}</ListGroupItem>
    </ListGroup>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h2" className="font-medium-5">Operational Risk<br />Register Document</CardTitle>
      </CardHeader>
      <CardBody className="pb-0">
        <CreateDataBox title="RR Doc. No" content="M1.RR.-AHD.2021.000" />
        <CreateDataBox title="Main/Supportive Business" content="Business Development" />
        <Collapse isOpen={isOpen}>
          <CreateDataBox title="Entity" content="Lorem ipsum" />
          <CreateDataBox title="Core Process" content="Lorem ipsum" />
          <CreateDataBox title="Process" content="Lorem ipsum" />
          <CreateDataBox title="Entity" content="Lorem ipsum" />
        </Collapse>
        <hr className="mt-2 mb-0" />
        <a
          className="d-flex justify-content-center my-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronUp className="text-muted" size={18} />
          ) : (
            <ChevronDown className="text-muted" size={18} />
          )}
        </a>
      </CardBody>
    </Card>
  );
};

export default DocumentDetails;
