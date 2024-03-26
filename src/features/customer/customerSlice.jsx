


// ---------- INITIAL STATE ---------- //

const initialValue = {
    fullName: "",
    nationalId: "",
}

// ---------- INITIAL STATE ---------- //





// ---------- REDUCER FUNCTION ---------- //


export default function customerReducer(state = initialValue, action){
    switch(action.type){
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payload.nationalId,
            }
        case "customer/updateCustomer":
            return {
                ...state,
                fullName: action.payload,
            }
        default: return state;
    }
}


// ---------- REDUCER FUNCTION ---------- //



// ---------- CREATOR ACTIONS ---------- //

export function createCustomer(fullName, nationalId){
    return {type: "customer/createCustomer", payload: {fullName, nationalId}};
}

export function updateCustomer(fullName){
    return {type: "customer/updateCustomer", payload: fullName}
}