// ** React Imports
import { Link } from "react-router-dom";

// ** Third Party Components
import Proptypes from "prop-types";
import {
  Grid,
  CheckSquare,
  MessageSquare,
  Mail,
  Calendar,
  Home,
} from "react-feather";
import {
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

const BreadCrumbs = (props) => {
  // ** Props
  const {
    breadCrumbParent,
    breadCrumbParent2,
    breadCrumbParent3,
    breadCrumbActive,
  } = props;

  return (
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 px-0">
        <div className="row breadcrumbs-top">
          <div className="col-12 px-0">
            <div className="breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12">
              <Breadcrumb>
                <BreadcrumbItem tag="li">
                  <Home size={14} style={{ color: "#46A583" }} />
                </BreadcrumbItem>
                <BreadcrumbItem tag="li" className="text-primary">
                  {breadCrumbParent}
                </BreadcrumbItem>
                {breadCrumbParent2 ? (
                  <BreadcrumbItem tag="li" className="text-primary">
                    {breadCrumbParent2}
                  </BreadcrumbItem>
                ) : (
                  ""
                )}
                {breadCrumbParent3 ? (
                  <BreadcrumbItem tag="li" className="text-primary">
                    {breadCrumbParent3}
                  </BreadcrumbItem>
                ) : (
                  ""
                )}
                <BreadcrumbItem tag="li" active>
                  {breadCrumbActive}
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreadCrumbs;

// ** PropTypes
BreadCrumbs.propTypes = {
  breadCrumbActive: Proptypes.string.isRequired,
};
