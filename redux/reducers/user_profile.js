import { GET_ALL_USER_PROFILE, GET_USER_PROFILE_DETAIL } from "redux/types";

const initialState = {
  searchList: [],
  individualData: {},
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_PROFILE:
      let tempUserProfile = [];
      action.payload.map((data) => {
        tempUserProfile.push({
          value: data.name,
          label: data.name,
          clusterCode: data.clusterCode,
          nik: data.nik,
        });
      });

      return {
        ...state,
        searchList: tempUserProfile,
      };
    case GET_USER_PROFILE_DETAIL:
      const tempUserProfileDetail = {
        userName: action.payload.userPrincipalName,
        name: action.payload.name,
        headAccount: action.payload.clusterCode,
        nik: action.payload.nik,
        email: action.payload.email || "",
        company: action.payload.compName,
        department: action.payload.deptName,
      };

      return {
        ...state,
        searchList: [],
        individualData: tempUserProfileDetail,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
