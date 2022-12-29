import { Button, Card, CardBody, Col, Row, Spinner } from 'reactstrap';
import { Book } from 'react-feather';
import { useState } from 'react';
import RealTimeShow from '../Layout/RealTimeShow';
import { useRouter } from 'next/router';
import {useSession } from "next-auth/react";

const WelcomeCard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [Loading, setLoading] = useState(false);

  const isiLogbook = () => {
    setLoading(true);
    setTimeout(function () {
      router.push('/logbook');
    }, 1000);
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="m-3">
      <Row>
        <Col>
          <Card className="card-congratulations">
            <CardBody className="profileIcon">
              <div className="text-center">
                <h5 className="mb-1 text-white">
                  {hour >= 12
                    ? hour >= 16
                      ? 'Good Evening,'
                      : 'Good Afternoon,'
                    : 'Good Morning,'}
                </h5>

                <h1 className="text-white">{session?.user.userName}</h1>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="">
            <CardBody className="">
              <h1 className="text-center text-primary">
                <RealTimeShow />
              </h1>

              <div className="text-center mt-2">
                <h5 className="text-dark">Click here to check Intern's Logbook</h5>
              </div>

              <div className="d-flex justify-content-center mt-1">
                <Button.Ripple
                  color="primary"
                  className="d-flex align-items-center py-1"
                  onClick={isiLogbook}
                  disabled={Loading}
                >
                  <div className="text-white">
                    {Loading ? (
                      <div className="d-flex flex-row justify-content-center align-items-center">
                        <Spinner size={14} color="white" />

                        <p className="ml-1 mr-0 my-0">Redirect...</p>
                      </div>
                    ) : (
                      <div className="">
                        <Book size={20} color="white" className="mr-1" />{' '}
                        Logbook
                      </div>
                    )}
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
