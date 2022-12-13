import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import { API_STAGING_SC } from "constant";
import {
  actionErrorListSC,
  actionLoadListSC,
  actionSetFilterListSC,
  actionSetListSC,
} from "redux/actions/suggestionContract/listSC";
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

export const searchFilterListSC = (filter, keyword = "", page = "1") => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const oldState = getState().listSC.filter;
    const filterData = filter ?? oldState?.filter;
    try {
      dispatch(actionLoadListSC());
      axios({
        method: "get",
        url: API_STAGING_SC + "/api/SuggestionContract/",
        headers: {
          AppAuthorization: `Bearer ${token}`,
          "X-PAGINATION": "true",
          "X-PAGE": page,
          "X-PAGESIZE": oldState?.totalShow ?? "5",
          "X-FILTER": filterData,
          "X-SEARCH": keyword,
          app_id: "64aea8cf",
          app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
        },
      })
        .then(function (response) {
          dispatch(
            actionSetFilterListSC({
              GenericName: oldState?.GenericName ?? "",
              ItemDescription: oldState?.ItemDescription ?? "",
              ItemCode: oldState?.ItemCode ?? "",
              Manufacture: oldState?.Manufacture ?? "",
              totalShow: oldState?.totalShow ?? "5",
              filter: oldState?.filter ?? "",
              keyword: oldState?.keyword ?? "",
              page: oldState?.page ?? "1",
              pageSize: response.data?.pageSize ?? "0",
              totalData: response.data?.totalData ?? "0",
              totalPage: response.data?.totalPage ?? "1",
            })
          );
          dispatch(actionSetListSC(response.data.data));
        })
        .catch(function (error) {
          dispatch(actionErrorListSC(error.message));
          errorNotification();
        });
    } catch (error) {
      dispatch(actionErrorListSC(error.message));
      errorNotification();
    }
  };
};
