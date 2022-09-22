import VerticalLayout from "src/@core/layouts/VerticalLayout"
import {
  Row,
  Col,
} from "reactstrap";
import Breadcrumbs from 'components/custom/BreadcrumbCustom'
import { Fragment, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Input, Label, Table, CustomInput, CardHeader, CardTitle, FormattedMessage} from 'reactstrap'
import {  Printer, ExternalLink, Download, RefreshCw, RotateCw, Plus} from 'react-feather'
import Card from "reactstrap/lib/Card";
import DocumentStatus from "components/custom/DocumentStatus";
import Badge from "reactstrap/lib/Badge";
import Flatpickr from 'react-flatpickr'
import ReactPaginate from 'react-paginate'
const Table2 = () => {
const [active, setActive] = useState('1')
const toggle = tab => {
if (active !== tab) {
    setActive(tab)
}
}
const [picker, setPicker] = useState(new Date())
const [searchValue, setSearchValue] = useState('')
    return (
        <Card className='px-2 py-2'>
            <Breadcrumbs
                breadCrumbTitle='Page Title'
                breadCrumbParent='Review BPM'
                breadCrumbActive='Document List'
            />
            <Fragment>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                            toggle('1')
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
                <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='1'>
                    <Card className="card-table2">
                    <div className="justify-content-start ml-0 mb-3">
                        <Button color='primary' className="button-table2 mr-2 mb-1">
                            <Printer size={14} />
                            <span className='align-middle ml-25'>Print</span>
                        </Button>
                        <Button color='primary' className="button-table2 mr-2 mb-1">
                            <ExternalLink size={14} />
                            <span className='align-middle ml-25' >Export</span>
                        </Button>
                        <Button color='primary' className="button-table2 mr-2 mb-1">
                            <Download size={14} />
                            <span className='align-middle ml-25'>Import</span>
                        </Button>
                        <Button color='primary' className="button-table2 mr-2 mb-1">
                            <RotateCw size={14} />
                            <span className='align-middle ml-25'>Reload</span>
                        </Button>
                        <Button color='primary' className="button-table2 mr-2 mb-1">
                            <RefreshCw size={14} />
                            <span className='align-middle ml-25'>Refresh</span>
                        </Button>
                    </div>
                    <h2 className='font-weight-bolder mb-2'>Operational Risk Register Document</h2>
                    <Row className="ml-0 mb-3">
                        <Col className='justify-content-start mt-1' md="4" sm="12">
                            <Label for='readonlyInput'>RR Doc. No</Label>
                            <Input className="input-table2" type='text' value="M1.RR.-AHD.2021.000" />
                        </Col>
                        <Col className='justify-content-start mt-1' md="4" sm="12">
                            <Label for='readonlyInput'>Main/Supportive Business</Label>
                            <Input className="input-table2" type='text' value="Business Development" />
                        </Col>
                        <Col className='justify-content-start mt-1' md="4" sm="12">
                            <Label for='readonlyInput'>Document Status</Label>
                            <DocumentStatus/>
                        </Col>
                    </Row>
                        <Card className="pt-2" style={{border:"1px solid #d8d6de"}}>
                            <Row className='mx-0 mb-2'>
                                <Col className='d-flex align-items-center justify-content-start mt-1' md='5' sm='12'>
                                <Label className='mr-1' for='search-input-1'>
                                    Show
                                </Label>
                                <CustomInput
                                    type="select"
                                    className="custominput-table2"
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                </CustomInput>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-end mt-1' md='3' sm='12'>
                                <Flatpickr
                                    id='range-picker'
                                    className='form-control datepicker-table2 mr-2'
                                    onChange={date => setPicker(date)}
                                    placeholder="Date Range Picker"
                                    options={{
                                    mode: 'range',
                                    }}
                                />
                                </Col>
                                <Col className='d-flex align-items-center justify-content-end mt-1' md='3' sm='12'>
                                <Input
                                    className="search-table2 mr-2"
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
                                <Col className='d-flex align-items-center justify-content-start mt-1' md='1' sm='12'>
                                <Button color='primary' className="mr-2 button2-table2 p-0">
                                    <Plus size={14} />
                                </Button>
                                </Col>
                            </Row>
                            <Table responsive
                                className="table border-bottom"
                            >
                                <thead>
                                <tr>
                                    <th className="text-center px-2 align-middle">
                                    BPM No
                                    </th>
                                    <th className="text-center px-2 align-middle">
                                    Status
                                    </th>
                                    <th className="text-center align-middle">
                                    Last Update
                                    </th>
                                    <th className="text-center align-middle">
                                    Action 
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{textAlign:"center"}}>BPM-AHD-2021.000</td>
                                        <td style={{textAlign:"center"}}><Badge color='light-primary' style={{borderRadius:"18px"}}>Done</Badge></td>
                                        <td style={{textAlign:"center"}}>7 Feb 2021</td>
                                        <td style={{textAlign:"center"}}>
                                            <Download className='mr-50' size={25} style={{color:'green'}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:"center"}}>BPM-AHD-2021.000</td>
                                        <td style={{textAlign:"center"}}><Badge color='light-primary' style={{borderRadius:"18px"}}>Done</Badge></td>
                                        <td style={{textAlign:"center"}}>7 Feb 2021</td>
                                        <td style={{textAlign:"center"}}>
                                            <Download className='mr-50' size={25} style={{color:'green'}}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Row className="mx-0 ml-2 mb-2" style={{marginTop:"67px"}}>
                                <Col className='d-flex align-items-center justify-content-start mt-1' md='9' sm='12'>
                                <p className="mb-0" style={{ color: "#b9b9c3" }}>
                                Showing 1 to 10 of 29 entries
                                </p>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-start mt-1' md='3' sm='12'>
                                    <ReactPaginate
                                        pageCount="5"
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
                                        containerClassName={"pagination react-paginate m-0"}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Card>
                    </TabPane>
                </TabContent>
            </Fragment>
    </Card>
  )
}

export default Table2
