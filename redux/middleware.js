import { updateData, updateStatus } from "./action"

export const getData = (filter) => {
    return (dispatch) => {
        dispatch(updateStatus(0)); //loading
        let url = `https://api.spacexdata.com/v3/launches?limit=${filter.limit}`
        if(filter.launch_success !== undefined) {
            url+=`&launch_success=${filter.launch_success}`
        }
        if(filter.land_success !== undefined) {
            url+=`&land_success=${filter.land_success}`
        }
        if(filter.launch_year !== undefined) {
            url+=`&launch_year=${filter.launch_year}`
        }
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                dispatch(updateData(res));
                dispatch(updateStatus(1));
            }).catch((e) => {
                dispatch(updateStatus(-1));
            })
    }
}