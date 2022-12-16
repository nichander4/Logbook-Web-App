// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
// import chat from 'pages/apps/chat/store/reducer'
// import todo from 'pages/apps/todo/store/reducer'
// import users from 'pages/apps/user/store/reducer'
// import email from 'pages/apps/email/store/reducer'
// import invoice from 'pages/apps/invoice/store/reducer'
// import calendar from 'pages/apps/calendar/store/reducer'
// import ecommerce from 'pages/apps/ecommerce/store/reducer'
// import dataTables from 'src/views/tables/data-tables/store/reducer'
import listSC from './suggestionContract/listSC';

const rootReducer = combineReducers({
  auth,
  // todo,
  // chat,
  // email,
  // users,
  navbar,
  layout,
  // invoice,
  // calendar,
  // ecommerce,
  // dataTables,
  listSC,
})

export default rootReducer
