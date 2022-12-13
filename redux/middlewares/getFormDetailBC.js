import axios from "axios";
import InfoNotification from "components/Alert/InfoNotification";
import { API_BID_COMPARISON } from "constant";
import {
  actionClearBidComparison,
  actionErrorBidComparison,
  actionLoadBidComparison,
  actionSetBidComparison,
} from "redux/actions/bidComparison/index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const errorNotification = () => {
  return MySwal.fire({
    position: "center",
    html: (
      <InfoNotification
        title={"Info"}
        description={"Data not exist"}
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

export const getBidComparison = (tokenValue, id) => {
  return async (dispatch, getState) => {
    const token = tokenValue ? tokenValue : getState().auth.token;
    try {
      dispatch(actionLoadBidComparison());

      axios({
        method: "get",
        url: API_BID_COMPARISON + "/api/BidComparison/RequestNumber",
        headers: {
          AppAuthorization: `Bearer ${token}`,
          app_id: "64aea8cf",
          app_key: "f4262e0ed2d1e30fd0341cdf1412a409",
          "Content-Type": "application/json",
          "CSTM-REQUESTNUMBER": id,
        },
      })
        .then(function (response) {
          dispatch(actionSetBidComparison(response.data));
        })
        .catch(function (error) {
          dispatch(actionErrorBidComparison(error.message));
          dispatch(actionClearBidComparison());
        });
    } catch (error) {
      dispatch(actionErrorBidComparison(error.message));
      dispatch(actionClearBidComparison());
    }
  };
};
