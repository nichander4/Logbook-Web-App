import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import { API_STAGING_FC } from "constant";
import { getStatusByRoleAccess } from "helpers/forecastCalculation";
import { getPermissionComponent } from "helpers/getPermission";
import {
  actionErrorListFC,
  actionLoadListFC,
  actionSetFilterListFC,
  actionSetListFC,
} from "redux/actions/forecastCalculation/index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const errorNotification = () => {
  return MySwal.fire({
    position: "center",
    html: (
      <ErrorNotification
        title={"Error"}
        description={"Please try again later"}
        onClose={() => MySwal.close()}
        onConfirm={() => MySwal.close()}
      />
    ),
    showDenyButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    padding: "0",
    allowOutsideClick: false 
  });
};

export const searchFilterListFC = (
  sessionData,
  userRoles,
  filter,
  page = "1"
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token ?? sessionData.user.token;
    const dataUserRoles = userRoles ?? getState().auth.userRoles;
    const oldStateFilter = getState().listFC.filter;
    const filterData = filter ?? oldStateFilter?.filter ?? "";

    var site = "";

    (sessionData.user.userSite ?? []).map((item, index) => {
      site += index == 0 ? item : "|" + item;
    });

    try {
      dispatch(actionLoadListFC());
      axios({
        method: "get",
        url: API_STAGING_FC + "/api/ForecastCalculation/",
        headers: {
          AppAuthorization: `Bearer ${token}`,
          "X-PAGINATION": "true",
          "X-PAGE": page,
          "X-PAGESIZE": oldStateFilter?.totalShow ?? "5",
          "X-FILTER": filterData,
          "X-SEARCH": oldStateFilter?.keyword,
          "X-VIEWALL": true,
          "X-ORDERBY": "createdDate desc",
          "CSTM-STATUS": getStatusByRoleAccess(dataUserRoles),
          "CSTM-SITE": getPermissionComponent(["Material Planner Sr. Mgr"])
            ? ""
            : site,
          app_id: "64aea8cf",
          app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
        },
      })
        .then(function (response) {
          dispatch(
            actionSetFilterListFC({
              GenericName: oldStateFilter?.GenericName ?? "",
              ItemDescription: oldStateFilter?.ItemDescription ?? "",
              ItemCode: oldStateFilter?.ItemCode ?? "",
              RequestNumber: oldStateFilter?.RequestNumber ?? "",
              Site: oldStateFilter?.Site ?? "",
              totalShow: oldStateFilter?.totalShow ?? "5",
              filter: oldStateFilter?.filter ?? "",
              keyword: oldStateFilter?.keyword ?? "",
              page: oldStateFilter?.page ?? "1",
              pageSize: response?.data?.pageSize ?? "0",
              totalData: response?.data?.totalData ?? "0",
              totalPage: response?.data?.totalPage ?? "1",
            })
          );
          dispatch(actionSetListFC(response.data.data));
        })
        .catch(function (error) {
          dispatch(actionErrorListFC(error.message));
          errorNotification();
        });
    } catch (error) {
      dispatch(actionErrorListFC(error.message));
      errorNotification();
    }
  };
};
