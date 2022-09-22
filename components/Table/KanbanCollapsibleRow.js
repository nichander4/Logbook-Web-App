import { useState } from "react";
import classnames from "classnames";
import { ChevronDown, ChevronUp } from "react-feather";
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  Table,
  FormGroup,
  Input,
  Badge,
  Button,
  CardText,
} from "reactstrap";
import { Edit, MessageCircle } from "react-feather";
import Avatar from "src/@core/components/avatar";

const KanbanCollapsibleRow = ({ data, active, type }) => {
  const defaultActive = () => [active];

  const [openCollapse, setOpenCollapse] = useState(defaultActive());

  const tableColWidth = ["15%", "35%", "30%", "16.25%", "10%"];

  const handleCollapseToggle = (id) => {
    const arr = openCollapse,
      index = arr.indexOf(id);
    if (arr.includes(id)) {
      arr.splice(index, 1);
      setOpenCollapse([...arr]);
    } else {
      arr.push(id);
      setOpenCollapse([...arr]);
    }
  };

  return (
    <Table responsive className="table border-bottom">
      <thead className="w-100">
        <tr className="d-flex align-items-center">
          <th
            className="text-center px-1"
            style={{ width: tableColWidth[0] }}
          >
            No
          </th>
          <th className="px-1" style={{ width: tableColWidth[1] }}>
            Title
          </th>
          <th className="px-1" style={{ width: tableColWidth[2] }}>
            Creators
          </th>
          <th
            className="text-center px-1"
            style={{ width: tableColWidth[3] }}
          >
            Edit
          </th>
          <th
            className="text-center"
            style={{ width: tableColWidth[4] }}
          ><div className="invisible">{"."}</div></th>
        </tr>
      </thead>
      <tbody
        className={classnames("collapse-icon", {
          "collapse-default": !type,
        })}
      >
        {data &&
          data.map((item, index) => (
            <Card
              className={classnames("", {
                open: openCollapse.includes(index),
              })}
              key={index}
            >
              <CardHeader
                className={classnames("align-items-center p-0", {
                  collapsed: !openCollapse.includes(index),
                })}
                onClick={() => handleCollapseToggle(index)}
              >
                <tr className="d-flex align-items-center w-100">
                  <td
                    className="text-center font-weight-bolder border-top-0 px-1"
                    style={{ width: tableColWidth[0], color: "#FF9F43" }}
                  >
                    {index + 1}
                  </td>
                  <td
                    className="border-top-0 px-1"
                    style={{ width: tableColWidth[1] }}
                  >
                    <div>
                      <Badge color="light-success" className="mb-1">
                        {item.theme}
                      </Badge>
                      <p>{item.title}</p>
                    </div>
                  </td>
                  <td
                    className="border-top-0 px-1"
                    style={{ width: tableColWidth[2] }}
                  >
                    {item.byWho.map((obj, index) => {
                      return (
                        <Avatar
                          className={
                            index !== item.byWho.length - 1 ? "mr-50" : ""
                          }
                          key={index}
                          {...obj}
                        />
                      );
                    })}
                  </td>
                  <td
                    className="text-center border-top-0 px-1"
                    style={{ width: tableColWidth[3] }}
                  >
                    <a onClick={() => {}}>
                      <Edit size={18} />
                    </a>
                  </td>
                  <td
                    className="text-center border-top-0"
                    style={{ width: tableColWidth[4] }}
                  >
                    {openCollapse.includes(index) ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </td>
                </tr>
              </CardHeader>
              <Collapse isOpen={openCollapse.includes(index)}>
                <CardBody className="card-app-design border-top mx-3 pt-2">
                  <div className="design-group mb-2">
                    <h6 className="section-label">Risk</h6>
                    <p>
                      Kesulitan dalam mendapat ahli di bidang yang dibutuhkan.
                    </p>
                  </div>
                  <div className="design-group mb-2">
                    <h6 className="section-label">Overall Residue Risk</h6>
                    <div className="design-planning-wrapper-full">
                      {item.riskIndicator.map((item) => (
                        <div key={item.title} className="design-planning-full">
                          <CardText className="mb-25">{item.title}</CardText>
                          <h6 className="mb-0">{item.subtitle}</h6>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="design-group mb-25">
                    <h6 className="section-label">Current Action</h6>
                    {item.currentAction.map((action) => (
                      <div>
                        <h6 className="font-weight-bolder">
                          {action.actionTitle}
                        </h6>
                        <ul className="list-style-square">
                          {action.actionList.map((list) => (
                            <li>{list}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Collapse>
            </Card>
          ))}
      </tbody>
    </Table>
  );
};

export default KanbanCollapsibleRow;
