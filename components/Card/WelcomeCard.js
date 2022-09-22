import { Award } from "react-feather";
import Avatar from "src/@core/components/avatar";
import { Card, CardBody, CardText } from "reactstrap";

const WelcomeCard = () => {
  return (
    <Card className="card-congratulations">
      <CardBody className="profileIcon">
        <Avatar
          icon={<Award size={28} />}
          className="shadow"
          color="primary"
          size="xl"
        />
        <div className="text-left">
          <h5 className="mb-1 text-white">Welcome Back,</h5>
          {/* <CardText className='w-75'> */}
          <h1 className="text-white">JOHN DOE</h1>
          {/* </CardText> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default WelcomeCard;
