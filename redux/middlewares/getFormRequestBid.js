import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import { API_REQUEST_BID } from "constant";
import {
  actionErrorRequestBid,
  actionLoadRequestBid,
  actionSetFilterRequestBid,
  actionSetRequestBid,
} from "redux/actions/requestBid/getFormRequestBid/index";
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

export const getFormRequestBid = (tokenValue) => {
  return async (dispatch, getState) => {
    const token = tokenValue ? tokenValue : getState().auth.token;
    const oldState = getState().listRequestBid.filter;
    try {
      dispatch(actionLoadRequestBid());
      axios({
        method: "get",
        url:
          API_REQUEST_BID + "/api/RequestBid/" + oldState?.noRequestValue ?? "",
        headers: {
          AppAuthorization: `Bearer ${token}`,
          "X-PAGINATION": "true",
          "X-FILTER": oldState?.genericNameValue ?? "",
          app_id: "64aea8cf",
          app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
        },
      })
        .then(function (response) {
          dispatch(
            actionSetFilterRequestBid({
              noRequestValue: oldState?.noRequestValue ?? "",
              genericNameValue: oldState?.genericNameValue ?? "",
              totalShow: oldState?.totalShow ?? "5",
              filter: oldState?.filter ?? "",
              keyword: oldState?.keyword ?? "",
              page: oldState?.page ?? "1",
              pageSize: response.data?.pageSize ?? "0",
              totalData: response.data?.totalData ?? "0",
              totalPage: response.data?.totalPage ?? "1",
            })
          );
          dispatch(actionSetRequestBid(response.data));
        })
        .catch(function (error) {
          dispatch(actionErrorRequestBid(error.message));
          errorNotification();
        });
    } catch (error) {
      dispatch(actionErrorRequestBid(error.message));
      errorNotification();
    }
  };
};
