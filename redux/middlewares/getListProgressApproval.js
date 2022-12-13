import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import { API_PROGRESS_APPROVAL_URL, TOKEN_PROGRESS_APPROVAL } from "constant";
import {
  actionErrorListPA,
  actionLoadListPA,
  actionSetFilterListPA,
  actionSetListPA,
} from "redux/actions/progressApproval/index";
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

export const searchFilterListPA = (filter, requestNumber) => {
  return async (dispatch, getState) => {
    const oldState = getState().listPA.filter;

    try {
      dispatch(actionLoadListPA());
      axios({
        method: "get",
        url:
          API_PROGRESS_APPROVAL_URL + "/transaction/Document/" + requestNumber,
        headers: {
          apikey: TOKEN_PROGRESS_APPROVAL,
          "X-PAGINATION": "true",
          "X-PAGE": "1",
          "X-PAGESIZE": oldState?.totalShow ?? "5",
          "X-FILTER": "",
          "X-SEARCH": oldState?.keyword ?? "",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          app_id: "64aea8cf",
          app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
        },
      })
        .then(function (response) {
          dispatch(
            actionSetFilterListPA({
              GenericName: oldState?.GenericName ?? "",
              ItemDescription: oldState?.ItemDescription ?? "",
              ItemCode: oldState?.ItemCode ?? "",
              RequestNumber: oldState?.RequestNumber ?? "",
              totalShow: oldState?.totalShow ?? "5",
              filter: oldState?.filter ?? "",
              keyword: oldState?.keyword ?? "",
              page: oldState?.page ?? "1",
              pageSize: response?.pageSize ?? "0",
              totalData: response?.totalData ?? "0",
              totalPage: response?.totalPage ?? "1",
            })
          );
          dispatch(actionSetListPA(response.data.data));
        })
        .catch(function (error) {
          dispatch(actionErrorListPA(error.message));
          errorNotification();
        });
    } catch (error) {
      dispatch(actionErrorListPA(error.message));
      errorNotification();
    }
  };
};
