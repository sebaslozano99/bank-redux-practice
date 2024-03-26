

// // ---------- INITIAL STATE ---------- //


const initialValue = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
}


// // ---------- INITIAL STATE ---------- //




// // ---------- REDUCER FUNCTION ---------- //

export default function accountReducer(state = initialValue, action){
    switch(action.type){
        case "account/convertingCurrency":
            return {
                ...state,
                isLoading: true,
            }
        case "account/deposit":
            return {
                ...state,
                isLoading: false,
                balance: state.balance + action.payload,
            }
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload,
            }
        case "account/requestLoan":
            return {
                ...state,
                balance: state.balance + action.payload.loanAmount,
                loan: action.payload.loanAmount,
                loanPurpose: state.loan === 0? action.payload.loanPurpose : state.loanPurpose,
            }
        case "account/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            }
        default: return state;
    }
}


// // ---------- REDUCER FUNCTION ---------- //




// // ---------- CREATOR ACTIONS ---------- //

export function deposit(amount, currency){
    if(currency === "USD") return {type: "account/deposit", payload: amount};

    return async function (dispatch, getState){
        dispatch({type: "account/convertingCurrency"});
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
        const data = await res.json();
        const converted = data.rates.USD;

        dispatch({type: "account/deposit", payload: converted});
    }
}

export function withdraw(amount){
    return {type: "account/withdraw", payload: amount};
}

export function requestLoan(loanAmount, loanPurpose){
    return {type: "account/requestLoan", payload: {loanAmount, loanPurpose}};
}

export function payLoan(){
    return {type: "account/payLoan"};
}

// // ---------- CREATOR ACTIONS ---------- //





