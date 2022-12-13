import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import { API_SOURCING_SELECTION } from "constant";
import {
  actionSetListSourcing,
  actionErrorListSourcing,
  actionLoadListSourcing,
  actionSetFilterListSourcing,
} from "redux/actions/sourcingSelection/listSourcing";
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

export const searchFilterListSourcing = (
  filter,
  keyword = "",
  page = "1",
  orderBy
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const oldState = getState().listSourcing.filter;
    const filterData = filter ?? oldState?.filter;
    try {
      dispatch(actionLoadListSourcing());
      axios({
        method: "get",
        url: API_SOURCING_SELECTION + "/api/SourcingSelection",
        headers: {
          AppAuthorization: `Bearer ${token}`,
          "X-PAGINATION": "true",
          "X-PAGE": page,
          "X-PAGESIZE": oldState?.totalShow ?? "5",
          "X-FILTER": filterData,
          "X-SEARCH": keyword,
          "X-ORDERBY": orderBy ? orderBy : oldState?.orderBy ?? "",
          app_id: "64aea8cf",
          app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
        },
      })
        .then(function (response) {
          dispatch(
            actionSetFilterListSourcing({
              SourcingSelectionNumber: oldState?.SourcingSelectionNumber ?? "",
              RequestSourcingNumber: oldState?.RequestSourcingNumber ?? "",
              MaterialName: oldState?.MaterialName ?? "",
              ProjectName: oldState?.ProjectName ?? "",
              ProjectCategory: oldState?.ProjectCategory ?? "",
              ManufacturingSite: oldState?.ManufacturingSite ?? "",
              CreatedByName: oldState?.CreatedByName ?? "",
              CreatedDate: oldState?.CreatedDate ?? "",
              Status: oldState?.Status ?? "",
              totalShow: oldState?.totalShow ?? "5",
              filter: oldState?.filter ?? "",
              keyword: oldState?.keyword ?? "",
              page: oldState?.page ?? "1",
              pageSize: response.data?.pageSize ?? "0",
              totalData: response.data?.totalData ?? "0",
              totalPage: response.data?.totalPage ?? "1",
              orderBy: orderBy ? orderBy : oldState?.orderBy ?? "",
            })
          );
          dispatch(actionSetListSourcing(response.data.data));
        })
        .catch(function (error) {
          dispatch(actionErrorListSourcing(error.message));
          errorNotification();
        });
    } catch (error) {
      dispatch(actionErrorListSourcing(error.message));
      errorNotification();
    }
  };
};
