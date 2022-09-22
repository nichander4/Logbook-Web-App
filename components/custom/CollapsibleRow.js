import { useState } from "react";
import classnames from "classnames";
import { ChevronUp } from "react-feather";
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
} from "reactstrap";
import { Edit, MessageCircle } from "react-feather";

const CollapsibleRow = ({ data, active, type }) => {
  const defaultActive = () => [active];

  const [openCollapse, setOpenCollapse] = useState(defaultActive());

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

  const scoreOptions = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];

  return (
    <Table responsive className="table border-bottom">
      <thead>
        <tr
          className="d-flex align-items-center"
          style={{ backgroundColor: "#F3F2F7" }}
        >
          <td
            className="text-center font-weight-bolder"
            style={{ width: "19%" }}
          >
            NO
          </td>
          <td
            className="text-center font-weight-bolder"
            style={{ width: "19%" }}
          >
            ID
          </td>
          <td
            className="text-center font-weight-bolder"
            style={{ width: "50%" }}
          >
            NAME
          </td>
          <td
            className="text-center font-weight-bolder"
            style={{ width: "27%" }}
          >
            STATUS
          </td>
          <td
            className="text-center font-weight-bolder"
            style={{ width: "27%" }}
          >
            ACTION
          </td>
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
              className={classnames("app-collapse", {
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
                <tr
                  className="d-flex align-items-center td-table3"
                  style={{ width: "100%" }}
                >
                  <td
                    className="text-center font-weight-bolder"
                    style={{ width: "19%", color: "#FF9F43", borderTop: "0px" }}
                  >
                    {item.no}
                  </td>
                  <td
                    className="text-center"
                    style={{ width: "19%", borderTop: "0px" }}
                  >
                    {item.id}
                  </td>
                  <td
                    className="text-center"
                    style={{ width: "50%", borderTop: "0px" }}
                  >
                    {item.item}
                  </td>
                  <td
                    className="text-center"
                    style={{ width: "27%", borderTop: "0px" }}
                  >
                    <Badge
                      color="light-success"
                      style={{ borderRadius: "70px" }}
                    >
                      Active
                    </Badge>
                  </td>
                  <td
                    className="text-center"
                    style={{ width: "27%", borderTop: "0px" }}
                  >
                    <ChevronUp size={14} />
                  </td>
                </tr>
              </CardHeader>
              <Collapse isOpen={openCollapse.includes(index)}>
                <CardBody className="m-2 p-2 shadow">
                  <FormGroup className="mb-2">
                    <h5 className="font-weight-bolder">Title</h5>
                    <Input
                      type="textarea"
                      id="deskripsiItem"
                      rows="1"
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
                    />
                  </FormGroup>
                  <div className="mb-2 custom-bullet">
                    <h5 className="font-weight-bolder">Remarks</h5>
                    <ul>
                      <li className="font-weight-bolder">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </li>
                      <li className="font-weight-bolder">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </li>
                      <li className="font-weight-bolder">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </li>
                    </ul>
                  </div>
                  <Button
                    color="primary"
                    style={{ marginLeft: "958px", marginRight: "20px" }}
                  >
                    <Edit size={14} />
                    <span className="align-middle ml-25">Edit</span>
                  </Button>
                  <Button
                    outline
                    color="primary"
                    style={{ backgroundColor: "rgba(115, 103, 240, 0.12)" }}
                  >
                    <MessageCircle size={14} />
                    <span className="align-middle ml-25">Comment</span>
                  </Button>
                </CardBody>
              </Collapse>
            </Card>
          ))}
      </tbody>
    </Table>
  );
};

export default CollapsibleRow;
