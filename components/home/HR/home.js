import React, { useState } from 'react';
import BreadCrumbs from 'components/custom/BreadcrumbCustom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import VerticalLayout from 'src/layouts/VerticalLayout';
import InternTable from 'components/HR/dashboard/internTable';
import MentorTable from 'components/HR/dashboard/mentorTable';

const HR_Dashboard = ({token}) => {
  const [active, setActive] = useState('1');

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <VerticalLayout>
      <BreadCrumbs breadCrumbParent="HR" breadCrumbActive="Dashboard" />
      <h2 className="mt-2 mb-1">Dashboard</h2>

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
            <InternTable token={token}/>
          </TabPane>

          <TabPane tabId="2">
            <MentorTable token={token}/>
          </TabPane>
        </TabContent>
      </React.Fragment>
    </VerticalLayout>
  );
};
export default HR_Dashboard;
