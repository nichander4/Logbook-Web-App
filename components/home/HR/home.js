import React, { useState } from 'react';
import BreadCrumbs from 'components/custom/BreadcrumbCustom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button } from 'reactstrap';
import VerticalLayout from 'src/layouts/VerticalLayout';
import InternTable from 'components/HR/dashboard/internTable';
import MentorTable from 'components/HR/dashboard/mentorTable';
import { Plus } from 'react-feather';
import { useRouter } from 'next/router';

const HR_Dashboard = ({token}) => {
  const router = useRouter();
  const [active, setActive] = useState('1');

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <VerticalLayout>
      <BreadCrumbs breadCrumbParent="HR" breadCrumbActive="Dashboard" />
      <Row className="mt-1">
        <Col md="9" sm="9">
          <h2 className="">Dashboard</h2>
        </Col>

        <Col
          className="d-flex justify-content-lg-end justify-content-md-end justify-content-sm-start"
          md="3"
          sm="4"
        >
          <Button
            color="primary"
            className="d-flex align-items-center py-1"
            onClick={() => router.push(`/HR/dashboard/addUser`)}
          >
            <Plus size={14} className="mr-1" /> Add New User
          </Button>
        </Col>
      </Row>

      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1');
              }}
              className={`${active === '1' ? 'text-dark' : 'text-muted'}`}
            >
              Intern
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2');
              }}
              className={`${active === '2' ? 'text-dark' : 'text-muted'}`}
            >
              Mentor
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="ml-1 py-50" activeTab={active}>
          <TabPane tabId="1">
            {active == '1' && <InternTable token={token}/>}
            
          </TabPane>

          <TabPane tabId="2">
          {active == '2' && <MentorTable token={token}/>}
            
          </TabPane>
        </TabContent>
      </React.Fragment>
    </VerticalLayout>
  );
};
export default HR_Dashboard;
