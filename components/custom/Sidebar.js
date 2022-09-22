// ** Third Party Component
import classnames from "classnames";
import { Star, Search } from "react-feather";

import {
  Card,
  CardBody,
  Row,
  Col,
  CustomInput,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  FormGroup,
  Label,
} from "reactstrap";
// import NumberInput from 'src/@core/components/number-input'
import NumberInput from "src/@core/components/number-input";
import Avatar from "src/@core/components/avatar";
import PickerRange from "./DatePickerRange";

const Sidebar = (props) => {
  // ** Props
  const { sidebarOpen } = props;

  // ** Array of categories
  const categories = [
    {
      id: "appliances",
      title: "Appliances",
      defaultChecked: true,
    },
    {
      id: "audio",
      title: "Audio",
    },
    {
      id: "camera-camcorders",
      title: "Camera & Camcorders",
    },
    {
      id: "car-electronics",
      title: "Car Electronics & Gps",
    },
    {
      id: "cellphones",
      title: "Cell Phones",
    },
    {
      id: "computers",
      title: "Computers & Tablets",
    },
    {
      id: "health-fitness-beauty",
      title: "Health, Fitness & Beauty",
    },
    {
      id: "office-school",
      title: "Office & School Supplies",
    },
    {
      id: "tv-home-theater",
      title: "TV & Home Theater",
    },
    {
      id: "video-games",
      title: "Video Games",
    },
  ];

  // ** Array of brands
  const brands = [
    {
      title: "Insignia™",
      total: 746,
    },
    {
      title: "Samsung",
      total: 633,
      checked: true,
    },
    {
      title: "Metra",
      total: 591,
    },
    {
      title: "HP",
      total: 530,
    },
    {
      title: "Apple",
      total: 422,
      checked: true,
    },
    {
      title: "GE",
      total: 394,
    },
    {
      title: "Sony",
      total: 350,
    },
    {
      title: "Incipio",
      total: 320,
    },
    {
      title: "KitchenAid",
      total: 318,
    },
    {
      title: "Whirlpool",
      total: 298,
    },
  ];

  // ** Array of ratings
  const ratings = [
    {
      ratings: 4,
      total: 160,
    },
    {
      ratings: 3,
      total: 176,
    },
    {
      ratings: 2,
      total: 291,
    },
    {
      ratings: 1,
      total: 190,
    },
  ];

  return (
    // <div className="sidebar-detached sidebar-left">
    <div className="sidebar">
      <div
        className={classnames("sidebar-shop", {
          show: sidebarOpen,
        })}
        // className="sidebar-shop"
      >
        {/* <Row>
          <Col sm="12">
            <h6 className="filter-heading d-none d-lg-block">Filters</h6>
          </Col>
        </Row> */}
        <Card>
          <CardBody>
            <div className="multi-range-price">
              <InputGroup className="mb-2">
                <Input placeholder="Search" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <Search size={14} />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>

            <FormGroup>
              <Label for="select-custom">Sort</Label>
              <Input type="number" min="1" max="999" />
            </FormGroup>

            <FormGroup className="d-flex align-items-center">
              <NumberInput className="w-100" />
            </FormGroup>

            <FormGroup>
              <Label for="select-custom">Color Filter</Label>
              <br />
              <div className="demo-inline-spacing emirTest">
                <Avatar color="primary" size="sm" className="mr-1" />
                <Avatar color="secondary" size="sm" className="mr-1" />
                <Avatar color="success" size="sm" className="mr-1" />
                <Avatar color="danger" size="sm" />
              </div>
            </FormGroup>

            <div className="brands">
              <h6 className="filter-title">Brands</h6>
              <ul className="list-unstyled brand-list">
                {brands.map((brand) => {
                  return (
                    <li key={brand.title} className="formSidebar">
                      <CustomInput
                        type="checkbox"
                        id={brand.title}
                        label={brand.title}
                        defaultChecked={brand.checked}
                      />
                      <span>{brand.total}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <FormGroup>
              <PickerRange />
            </FormGroup>

            <div id="clear-filters">
              <Button color="primary" block>
                Clear All Filters
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
