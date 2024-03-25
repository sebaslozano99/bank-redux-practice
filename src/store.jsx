import { createStore, combineReducers } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customersReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
    accounts: accountReducer,
    customers: customersReducer,
})
const store = createStore(rootReducer);

export default store;