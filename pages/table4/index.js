import VerticalLayout from "src/@core/layouts/VerticalLayout";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "components/custom/BreadcrumbCustom";
import { Fragment, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Input,
  Label,
  Table,
  CustomInput,
} from "reactstrap";
import {
  Printer,
  ExternalLink,
  Download,
  RefreshCw,
  RotateCw,
  Plus,
} from "react-feather";
import Card from "reactstrap/lib/Card";
import DocumentStatus from "components/custom/DocumentStatus";
import Badge from "reactstrap/lib/Badge";
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import CollapsibleRow from "components/custom/CollapsibleRow";
import Slider from "react-slick";
import ListProgress from "components/custom/ListProgress";

const TableFourPage = () => {
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  const data = [
    {
      id: "1045",
      no: 1,
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      criteria: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      weight: 5,
      content: {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        creativity: [
          {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          },
          {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          },
          {
            id: 3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          },
        ],
        scoreStatus: [
          {
            status: "Low",
            minScore: 10,
            maxScore: 40,
            scoreDesc:
              "Tema hanya menjawab tantangan bisnis jangka pendek (1-2 tahun ke depan)",
          },
          {
            status: "Medium",
            minScore: 50,
            maxScore: 70,
            scoreDesc:
              "Tema hanya menjawab tantangan bisnis jangka menengah dan panjang (3-5 tahun ke depan)",
          },
          {
            status: "High",
            minScore: 80,
            maxScore: 100,
            scoreDesc:
              "Tema hanya menjawab tantangan bisnis jangka pendek, menengah, dan panjang (1-5 tahun ke depan)",
          },
        ],
      },
    },
    {
      no: 2,
      id: "1045",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      criteria: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      weight: 5,
      content: {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        creativity: [
          {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          },
          {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          },
          {
            id: 3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          },
        ],
        scoreStatus: [
          {
            status: "Low",
            minScore: 10,
            maxScore: 40,
            scoreDesc:
              "Tema hanya menjawab tantangan bisnis jangka pendek (1-2 tahun ke depan)",
          },
          {
            status: "Medium",
            minScore: 50,
            maxScore: 70,
            scoreDesc:
              "Tema hanya menjawab tantangan bisnis jangka menengah dan panjang (3-5 tahun ke depan)",
          },
          {
            status: "High",
            minScore: 80,
            maxScore: 100,
            scoreDesc:
              "Tema hanya menjawab tantangan bisnis jangka pendek, menengah, dan panjang (1-5 tahun ke depan)",
          },
        ],
      },
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [picker, setPicker] = useState(new Date());

  return (
    <div>
      <Breadcrumbs
        breadCrumbTitle="Page Title"
        breadCrumbParent="Review BPM"
        breadCrumbActive="Document List"
      />
      <Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={active === "1"}
              onClick={() => {
                toggle("1");
              }}
            >
              Data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled> Attachment </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled> Approval Log </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled> Reviewer </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="py-50" activeTab={active}>
          <TabPane tabId="1">
            <Card className="card-table2">
              <Row className="ml-0 mb-3 justify-content-start">
                <Button color="primary" className="button-table2 mb-1 mr-2">
                  <Printer size={14} />
                  <span className="align-middle ml-25">Print</span>
                </Button>
                <Button color="primary" className="button-table2 mb-1 mr-2">
                  <ExternalLink size={14} />
                  <span className="align-middle ml-25">Export</span>
                </Button>
                <Button color="primary" className="button-table2 mb-1 mr-2">
                  <Download size={14} />
                  <span className="align-middle ml-25">Import</span>
                </Button>
                <Button color="primary" className="button-table2 mb-1 mr-2">
                  <RotateCw size={14} />
                  <span className="align-middle ml-25">Reload</span>
                </Button>
                <Button color="primary" className="button-table2 mb-1 mr-2">
                  <RefreshCw size={14} />
                  <span className="align-middle ml-25">Refresh</span>
                </Button>
              </Row>
              <h2 className="font-weight-bolder mb-2">
                Operational Risk Register Document
              </h2>
              <Row className="ml-0 mb-3">
                <Col className="mr-3 p-0 col-table2 mt-1" md="4" sm="12">
                  <Label for="readonlyInput">RR Doc. No</Label>
                  <Input
                    className="input-table2"
                    type="text"
                    value="M1.RR.-AHD.2021.000"
                  />
                </Col>
                <Col className="mr-3 p-0 col-table2 mt-1" md="4" sm="12">
                  <Label for="readonlyInput">Main/Supportive Business</Label>
                  <Input
                    className="input-table2"
                    type="text"
                    value="Business Development"
                  />
                </Col>
                <Col className="mr-3 p-0 col-table2 mt-1" md="4" sm="12">
                  <Label for="readonlyInput">Document Status</Label>
                  <DocumentStatus />
                </Col>
              </Row>
              <div>
                <h2 className="font-medium-5 mb-2">List Process</h2>
                <Slider {...settings}>
                  <ListProgress
                    title="Exploring Idea"
                    number="1"
                    objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
                    entity="N/A"
                    document="N/A"
                  />
                  <ListProgress
                    title="Feasability Study"
                    number="2"
                    objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
                    entity="N/A"
                    document="N/A"
                  />
                  <ListProgress
                    title="Product Development"
                    number="3"
                    objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
                    entity="N/A"
                    document="N/A"
                  />
                  <ListProgress
                    title="Product Registration Process"
                    number="4"
                    objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
                    entity="N/A"
                    document="N/A"
                  />
                  <ListProgress
                    title="Research"
                    number="5"
                    objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
                    entity="N/A"
                    document="N/A"
                  />
                  <ListProgress
                    title="Feedback"
                    number="6"
                    objective="Menemukan produk/bisnis baru yang mempunyai nilai pasar yang tinggi"
                    entity="N/A"
                    document="N/A"
                  />
                </Slider>
              </div>
              <Card className="pt-2" style={{ border: "1px solid #d8d6de" }}>
                <Card>
                  <Row className="mx-0 mb-2 justify-content-start">
                    <Col
                      sm="7"
                      md="9"
                      lg="9"
                      xl="6"
                      className="mb-2 pl-lg-5 pl-"
                    >
                      <h5 className="font-weight-bolder mt-1"> Table Title</h5>
                    </Col>
                    <Col sm="5" md="3" lg="3" xl="2" className="mb-2">
                      <h5 className="font-weight-bolder d-inline mr-1">
                        {" "}
                        Show
                      </h5>
                      <CustomInput
                        type="select"
                        className=""
                        style={{ width: "72px", height: "39px" }}
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                      </CustomInput>
                    </Col>
                    <Col sm="12" md="12" lg="12" xl="4">
                      <Input
                        className="search-table2"
                        type="text"
                        name="search"
                        id="search-invoice"
                        placeholder="Search"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            searchFunction(e.target.value, altPage);
                            setTempName(e.target.value);
                          }
                        }}
                        onChange={(e) => {
                          setTempName(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <CollapsibleRow data={data} />
                </Card>
                <Row className="mb-2 mt-3 justify-content-center justify-content-md-around align-items-center">
                  <Col className="mb-2 mb-md-0" sm="12" md="5">
                    <p
                      className="mb-0 text-center text-md-left"
                      style={{ color: "#b9b9c3" }}
                    >
                      Showing 1 to 10 of 29 entries
                    </p>
                  </Col>
                  <Col sm="12" md="5">
                    <ReactPaginate
                      pageCount="7"
                      nextLabel={""}
                      breakLabel={"..."}
                      activeClassName={"active"}
                      pageClassName={"page-item"}
                      previousLabel={""}
                      nextLinkClassName={"page-link"}
                      nextClassName={"page-item next-item"}
                      previousClassName={"page-item prev-item"}
                      previousLinkClassName={"page-link"}
                      pageLinkClassName={"page-link"}
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      containerClassName={
                        "pagination react-paginate m-0 justify-content-center justify-content-lg-end"
                      }
                    />
                  </Col>
                </Row>
              </Card>
            </Card>
          </TabPane>
        </TabContent>
      </Fragment>
    </div>
  );
};

export default TableFourPage;

TableFourPage.getLayout = function getLayout(page) {
  return <VerticalLayout>{page}</VerticalLayout>;
};
