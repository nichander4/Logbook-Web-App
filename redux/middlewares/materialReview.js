import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import { API_MATERIAL_REVIEW } from "constant";
import {
  actionSetMaterialReview,
  actionErrorMaterialReview,
  actionLoadMaterialReview,
  actionSetFilterMaterialReview,
} from "redux/actions/sourcingSelection/materialReview";
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

export const searchFilterMaterialReview = (
  filter,
  keyword = "",
  page = "1",
  orderBy
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const oldState = getState().materialReview.filter;
    const filterData = filter ?? oldState?.filter;
    try {
      dispatch(actionLoadMaterialReview());
      axios({
        method: "get",
        url: API_MATERIAL_REVIEW + "/api/MaterialReview",
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
            actionSetFilterMaterialReview({
              MaterialReviewNumber: oldState?.MaterialReviewNumber ?? "",
              SourcingSelectionNumber: oldState?.SourcingSelectionNumber ?? "",
              ReqSourcingNumber: oldState?.ReqSourcingNumber ?? "",
              ManufacturingSite: oldState?.ManufacturingSite ?? "",
              MaterialName: oldState?.MaterialName ?? "",
              ProjectName: oldState?.ProjectName ?? "",
              CatalogDocNumber: oldState?.CatalogDocNumber ?? "",
              ManufacturerName: oldState?.ManufacturerName ?? "",
              SupplierName: oldState?.SupplierName ?? "",
              CreatedByName: oldState?.CreatedByName ?? "",
              CreatedDate: oldState?.CreatedDate ?? "",
              StatusText: oldState?.StatusText ?? "",
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
          dispatch(actionSetMaterialReview(response.data.data));
        })
        .catch(function (error) {
          dispatch(actionErrorMaterialReview(error.message));
          errorNotification();
        });
    } catch (error) {
      dispatch(actionErrorMaterialReview(error.message));
      errorNotification();
    }
  };
};
