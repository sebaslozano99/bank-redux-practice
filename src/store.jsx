import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";


const rootReducers = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

 const store = createStore(
    rootReducers, 
    composeWithDevTools(applyMiddleware(thunk))
);

 export default store;