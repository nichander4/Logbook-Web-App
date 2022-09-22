import { useState } from "react";
import { ChevronDown, ChevronUp, Edit } from "react-feather";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Row,
} from "reactstrap";
import Avatar from "src/@core/components/avatar";
import CardActions from "src/@core/components/card-actions";

const KanbanCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const avatarArr = [
    {
      img: "/images/portrait/small/avatar-s-9.jpg",
      imgHeight: 34,
      imgWidth: 34,
    },
    {
      content: "PI",
      color: "light-danger",
    },
    {
      img: "/images/portrait/small/avatar-s-14.jpg",
      imgHeight: 34,
      imgWidth: 34,
    },
    {
      img: "/images/portrait/small/avatar-s-7.jpg",
      imgHeight: 34,
      imgWidth: 34,
    },
    {
      content: "AL",
      color: "light-secondary",
    },
  ];

  const riskIndicator = [
    {
      title: "After Current Action",
      subtitle: "Medium",
    },
    {
      title: "After Treatment Plan",
      subtitle: "Medium",
    },
  ];

  return (
    <Col lg="6" xs="12">
      <Card className="card-app-design">
        <CardBody className="pb-0">
          <div className="d-flex justify-content-between align-items-center">
            <Badge color="light-success">Exploring Idea</Badge>
            <a onClick={() => {}}>
              <Edit size={18} />
            </a>
          </div>
          <CardTitle tag="h5" className="my-2">
            Title
          </CardTitle>
          <div className="design-group mb-2">
            <h6 className="section-label">By Who</h6>
            {avatarArr.map((obj, index) => {
              return (
                <Avatar
                  className={index !== avatarArr.length - 1 ? "mr-75" : ""}
                  key={index}
                  {...obj}
                />
              );
            })}
          </div>
          <div className="design-group mb-2">
            <h6 className="section-label">Risk</h6>
            <p>Kesulitan dalam mendapat ahli di bidang yang dibutuhkan.</p>
          </div>
          <div className="design-group mb-2">
            <h6 className="section-label">Overall Residue Risk</h6>
            <div className="design-planning-wrapper-full">
              {riskIndicator.map((item) => (
                <div key={item.title} className="design-planning-full">
                  <CardText className="mb-25">{item.title}</CardText>
                  <h6 className="mb-0">{item.subtitle}</h6>
                </div>
              ))}
            </div>
          </div>
          <Collapse isOpen={isOpen}>
            <div className="design-group mb-25">
              <h6 className="section-label">Current Action</h6>
              <div>
                <h6 className="font-weight-bolder">Protective</h6>
                <ul className="list-style-square">
                  <li>
                    Bekerja sama dengan praktisi, konsultan, lembaga penelitian
                    dan kampus (dengan MoU)
                  </li>
                  <li>
                    Mengikuti pameran dan seminar nasional & international untuk
                    berdiskusi dengan ahli
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-weight-bolder">Preventive</h6>
                <ul>
                  <li>
                    Bekerja sama dengan praktisi, konsultan, lembaga penelitian
                    dan kampus (dengan MoU)
                  </li>
                  <li>
                    Mengikuti pameran dan seminar nasional & international untuk
                    berdiskusi dengan ahli
                  </li>
                </ul>
              </div>
            </div>
          </Collapse>
          <hr className="my-0" />
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
    </Col>
  );
};

export default KanbanCard;
