import { UserActionTypes, UserState, UserAction } from "../../types/user"


const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading:true, error: null, users: []}
    
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading:false, error: null, users: action.payload}
    
        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading:false, error: action.type, users: []}
        default: 
        return state;
    }
}