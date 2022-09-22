import { Card, CardBody, CardHeader, CardTitle, Media } from "reactstrap";
import Avatar from "src/@core/components/avatar";

const ListCard = () => {
  const list = [
    { name: "Exploring Ideas", color: "light-success" },
    { name: "Feasibility Study", color: "light-primary" },
    { name: "Product Development", color: "light-danger" },
    { name: "Product Registration Process", color: "light-danger" },
  ];

  const renderList = () => {
    return list.map((data, index) => (
      <div className="transaction-item">
        <Media>
          <Avatar className="rounded" color={data.color} icon={index + 1} />
          <Media body>
            <h6 className="transaction-title">{data.name}</h6>
            <small>Lorem ipsum dolor sit</small>
          </Media>
        </Media>
      </div>
    ));
  };

  return (
    <Card className="card-transaction">
      <CardHeader>
        <CardTitle tag="h2" className="font-medium-5">List Process</CardTitle>
      </CardHeader>
      <CardBody>{renderList()}</CardBody>
    </Card>
  );
};

export default ListCard;
