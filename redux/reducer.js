import { UPDATE_DATA, UPDATE_STATUS, UPDATE_FILTERS } from "./actionTypes";
import { HYDRATE } from 'next-redux-wrapper'
export const initialStore = {
    data : [],
    filters : {
        limit: 100
    },
    
    status : 0 //0-> loading //1->success -1->error
}

const dataReducer = (state= initialStore, action) => {
    const copiedState = {...state};
    switch(action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
              };
        case UPDATE_DATA:
            copiedState.data = action.data;
            return copiedState;
        case UPDATE_STATUS:
            copiedState.status = action.data;
            return copiedState;
        case UPDATE_FILTERS:
            const filters = {...state.filters};
            copiedState.filters = {...filters, ...action.data};
            return copiedState;
        default:
            return state;
    }
}

export default dataReducer;