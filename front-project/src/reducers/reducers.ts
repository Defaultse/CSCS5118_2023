import { Logged, Seller } from "./states";

interface ActionSignIn {
    type: Logged.SIGN_IN;
}

interface ActionSignOut {
    type: Logged.SIGN_OUT;
}

interface ActionSetSeller {
    type: Seller.SET_SELLER;
}

interface ActionUnsetSeller {
    type: Seller.UNSET_SELLER;
}

type Action = ActionSignIn | ActionSignOut | ActionSetSeller | ActionUnsetSeller;

const loggedReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case Logged.SIGN_IN:
            localStorage.setItem('favorites', JSON.stringify([]));
            return true;

        case Logged.SIGN_OUT:
            localStorage.removeItem('account');
            localStorage.removeItem('favorites');
            return false;

        default:
            return state;
    }
};

const sellerReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case Seller.SET_SELLER:
            return true;

        case Seller.UNSET_SELLER:
            return false;

        default:
            return state;
    }
};

export { loggedReducer, sellerReducer };
