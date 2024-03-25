


// ---------- INITIAL STATE ---------- //

const initialValue = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

// ---------- INITIAL STATE ---------- //





// ---------- ACCOUNT REDUCER ---------- //


export default function accountReducer(state = initialValue, action){
    switch(action.type){
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload,
            }
        case "account/requestLoan":
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                loan: state.loan + action.payload.amount,
                loanPurpose: action.payload.loanPurpose
            }
        case "account/payLoan":
            return {
                ...state,
                balance: state.balance - state.loan,
                loanPurpose: "",
                loan: 0,
            }
        default: return state;
    }
}

// ---------- ACCOUNT REDUCER ---------- //



// ---------- ACTIONS CREATORS 



export function deposit(amount){
    return {
        type: "account/deposit",
        payload: amount
    }
}


export function withdraw(amount){
    return {
        type: "account/withdraw",
        payload: amount,
    }
}


export function requestLoan(amount, loanPurpose){
    return  {
        type: "account/requestLoan",
        payload: {amount, loanPurpose}
    }
}


export function payLoan(){
    return {
        type: "account/payLoan",
    }
}

// ---------- ACTIONS CREATORS -------------- 


//
