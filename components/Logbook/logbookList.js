import React, { useState } from 'react';
import BreadCrumbs from 'components/custom/BreadcrumbCustom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import VerticalLayout from 'src/layouts/VerticalLayout';
import January from 'components/Logbook/logbook_item/january';
import MentorTable from 'components/HR/dashboard/mentorTable';
import { useEffect } from 'react';
import moment from 'moment';

const entryLogbook = ({user}) => {
  const [active, setActive] = useState(moment().format('M'));

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <VerticalLayout>
      <BreadCrumbs breadCrumbParent={user.role.roleName} breadCrumbActive="Log book" />
      <h2 className="mt-2 mb-1">
        Entry Log Book Internship - {moment().format('YYYY')}{' '}
        {user.userName}
      </h2>

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
              January
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
              February
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '3'}
              onClick={() => {
                toggle('3');
              }}
              className={`${active === '3' ? 'text-dark' : 'text-muted'}`}
            >
              March
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '4'}
              onClick={() => {
                toggle('4');
              }}
              className={`${active === '4' ? 'text-dark' : 'text-muted'}`}
            >
              April
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '5'}
              onClick={() => {
                toggle('5');
              }}
              className={`${active === '5' ? 'text-dark' : 'text-muted'}`}
            >
              May
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '6'}
              onClick={() => {
                toggle('6');
              }}
              className={`${active === '6' ? 'text-dark' : 'text-muted'}`}
            >
              June
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '7'}
              onClick={() => {
                toggle('7');
              }}
              className={`${active === '7' ? 'text-dark' : 'text-muted'}`}
            >
              July
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '8'}
              onClick={() => {
                toggle('8');
              }}
              className={`${active === '8' ? 'text-dark' : 'text-muted'}`}
            >
              August
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '9'}
              onClick={() => {
                toggle('9');
              }}
              className={`${active === '9' ? 'text-dark' : 'text-muted'}`}
            >
              September
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '10'}
              onClick={() => {
                toggle('10');
              }}
              className={`${active === '10' ? 'text-dark' : 'text-muted'}`}
            >
              October
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '11'}
              onClick={() => {
                toggle('11');
              }}
              className={`${active === '11' ? 'text-dark' : 'text-muted'}`}
            >
              November
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '12'}
              onClick={() => {
                toggle('12');
              }}
              className={`${active === '12' ? 'text-dark' : 'text-muted'}`}
            >
              December
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="ml-1 py-50" activeTab={active}>
          <TabPane tabId="1">
            <January />
          </TabPane>

          <TabPane tabId="2"></TabPane>

          <TabPane tabId="3"></TabPane>

          <TabPane tabId="4"></TabPane>

          <TabPane tabId="5"></TabPane>

          <TabPane tabId="6"></TabPane>

          <TabPane tabId="7"></TabPane>

          <TabPane tabId="8"></TabPane>

          <TabPane tabId="9"></TabPane>

          <TabPane tabId="10"></TabPane>

          <TabPane tabId="11"></TabPane>

          <TabPane tabId="12"></TabPane>
        </TabContent>
      </React.Fragment>
    </VerticalLayout>
  );
};
export default entryLogbook;
