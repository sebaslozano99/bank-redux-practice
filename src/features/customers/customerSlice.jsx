
// ---------- INITIAL STATE ---------- //

const initialValue = {
    fullName: "",
    id: "",
}

// ---------- INITIAL STATE ---------- //




// ---------- ACCOUNT REDUCER ---------- //


export default function customerReducer(state = initialValue, action){
    switch(action.type){
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                id: action.payload.id
            };
        default: return state;
    }
}


// ---------- ACCOUNT REDUCER ---------- //




// ---------- ACTION CREATORS ---------- //

export function createCustomer(fullName, id){
    return {
        type: "customer/createCustomer",
        payload: {fullName, id}
    }
}


// ---------- ACTIONS CREATORS ---------- //


