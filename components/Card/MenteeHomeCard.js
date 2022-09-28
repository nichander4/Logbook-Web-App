import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { UserCheck, LogOut } from 'react-feather';
import { useState } from 'react';

const WelcomeCard = () => {
  const [attendanceStatus, setAttendanceStatus] = useState(false);

  const [CheckinLoading, setCheckinLoading] = useState(false);
  const [CheckOutLoading, setCheckOutLoading] = useState(false);

  const Checkin = () => {
    setCheckinLoading(true);
    setTimeout(function () {
      setAttendanceStatus(true);
      setCheckinLoading(false);
    }, 1000);
  };

  const Checkout = () => {
    setCheckOutLoading(true);
    setTimeout(function () {
      setAttendanceStatus(false);
      setCheckOutLoading(false);
    }, 1000);
  };

  return (
    <div className="m-3">
      <Row>
        <Col>
          <Card className="card-congratulations">
            <CardBody className="profileIcon">
              <div className="text-center">
                <h5 className="mb-1 text-white">
                  {attendanceStatus
                    ? 'Thank You for Your Work Today'
                    : 'Good Morning,'}
                </h5>

                <h1 className="text-white">JOHN DOE</h1>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="">
            <CardBody className="">
              <div className="text-center">
                <h1 className="text-primary">July 11th 2022, 11:38:22 am</h1>
              </div>

              <div className="text-center mt-2">
                <h5 className="text-dark">
                  {attendanceStatus
                    ? 'Click here to check out'
                    : 'Click here to make attendance'}
                </h5>
              </div>

              <div className="d-flex justify-content-center mt-1">
                <Button.Ripple
                  color="primary"
                  className="d-flex align-items-center py-1"
                  onClick={attendanceStatus ? Checkout : Checkin}
                  disabled={attendanceStatus ? CheckOutLoading : CheckinLoading}
                >
                  {attendanceStatus ? (
                    <LogOut size={14} color="white" className="mr-1" />
                  ) : (
                    <UserCheck size={14} color="white" className="mr-1" />
                  )}{' '}
                  <div className="text-white">
                    {attendanceStatus
                      ? CheckOutLoading
                        ? 'Check out...'
                        : 'Check out'
                      : CheckinLoading
                      ? 'Check in...'
                      : 'Check in'}
                  </div>
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WelcomeCard;
