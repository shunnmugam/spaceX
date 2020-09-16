import { UPDATE_FILTERS, UPDATE_DATA, UPDATE_STATUS } from "./actionTypes"

export const updateFilter = (data) => {
    return {
        type : UPDATE_FILTERS,
        data
    }
}

export const updateData = (data) => {
    return {
        type : UPDATE_DATA,
        data
    }
}

export const updateStatus = (data) => {
    return {
        type : UPDATE_STATUS,
        data
    }
}