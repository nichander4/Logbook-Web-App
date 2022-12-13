import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import { API_CONTRACT_APPROVAL } from "constant";
import {
  actionErrorContractApproval,
  actionLoadContractApproval,
  actionSetContractApproval,
  actionSetFilterContractApproval,
} from "redux/actions/contractApproval";
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
    allowOutsideClick: false,
  });
};

export const getListContractApproval = (
  sessionData,
  userRoles,
  filter = null,
  page = null,
  inquiry = null
) => {
  return async (dispatch, getState) => {
    const token = getState()?.auth?.token ?? sessionData.user.token;
    const oldState = getState().contractApproval.filter;
    const generalFilter = filter ? filter : oldState?.filter ?? "";
    const filterVendor = sessionData?.user?.supplier?.id
      ? "VENDORID=" + sessionData.user.supplier.id
      : "";
    const mergeFilterVendor =
      generalFilter.length > 0
        ? generalFilter + "|" + filterVendor
        : filterVendor;
    var beforeFilter = page != "vendor" ? generalFilter : mergeFilterVendor;
    var finalFilter =
      inquiry == "inquiry"
        ? beforeFilter.length > 0
          ? beforeFilter + "|STATUS=Approved Internal"
          : "STATUS=Approved Internal"
        : beforeFilter;

    try {
      dispatch(actionLoadContractApproval());
      axios({
        method: "get",
        url: API_CONTRACT_APPROVAL + "/api/ContractApproval",
        headers: {
          AppAuthorization: `Bearer ${token}`,
          "X-PAGINATION": "true",
          "X-PAGE": oldState?.page ?? "1",
          "X-PAGESIZE": oldState?.totalShow ?? "5",
          "X-ORDERBY": "createdDate desc",
          "X-FILTER": finalFilter,
          "X-SEARCH": oldState?.keyword ?? "",
          app_id: "64aea8cf",
          app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
        },
      })
        .then(function (response) {
          dispatch(
            actionSetFilterContractApproval({
              ContractNumber: oldState?.ContractNumber ?? "",
              RequestNumber: oldState?.RequestNumber ?? "",
              GenericName: oldState?.GenericName ?? "",
              Manufacturer: oldState?.Manufacturer ?? "",
              VendorName: oldState?.VendorName ?? "",
              Status: oldState?.Status ?? "",
              StatusContract: oldState?.StatusContract ?? "",
              totalShow: oldState?.totalShow ?? "5",
              filter: oldState?.filter ?? "",
              keyword: oldState?.keyword ?? "",
              page: oldState?.page ?? "1",
              pageSize: response?.data?.pageSize ?? "0",
              totalData: response?.data?.totalData ?? "0",
              totalPage: response?.data?.totalPage ?? "1",
            })
          );
          dispatch(actionSetContractApproval(response.data));
        })
        .catch(function (error) {
          dispatch(actionErrorContractApproval(error.message));
          errorNotification();
        });
    } catch (error) {
      dispatch(actionErrorContractApproval(error.message));
      errorNotification();
    }
  };
};
