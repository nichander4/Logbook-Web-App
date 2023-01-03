import React, { useState } from "react";
import BreadCrumbs from "components/custom/BreadcrumbCustom";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import TableLogbook from "components/Logbook/logbook_item/table";
import MentorTable from "components/HR/dashboard/mentorTable";
import { useEffect } from "react";
import moment from "moment";

const entryLogbook = ({ user, token, dataIntern }) => {
  const [active, setActive] = useState("");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <>
      <BreadCrumbs
        breadCrumbParent={dataIntern.role.roleName}
        breadCrumbActive="Log book"
      />
      <h2 className="mt-2 mb-1">Entry Log Book Internship - {dataIntern.userName}</h2>

      <React.Fragment>
        <Nav tabs>
          {dataIntern.logbooks.map((x) => {
            return (
              <NavItem>
                <NavLink
                  active={active === x.id}
                  onClick={() => {
                    toggle(x.id);
                  }}
                  className={`${active === x.id ? "text-dark" : "text-muted"}`}
                  key={x.id}
                >
                  {x.monthLogbook}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent className="ml-1 py-50" activeTab={active}>
          {dataIntern.logbooks.map((x) => {
            return (
              <TabPane tabId={x.id}>
                <TableLogbook id={x.id} token={token} key={x.id} user={user} dataIntern={dataIntern} />
              </TabPane>
            );
          })}
        </TabContent>
      </React.Fragment>
    </>
  );
};
export default entryLogbook;
