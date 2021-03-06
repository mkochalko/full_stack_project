import { 
    RECEIVE_TRIPS,
    RECEIVE_TRIP,
    REMOVE_TRIP,
    CLEAR_TRIPS_INFO
} from '../actions/trip_actions';


export default (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_TRIPS:
            newState = Object.assign({}, action.trips)
            return newState;
        case RECEIVE_TRIP:
            newState[action.trip.id] = action.trip
            return newState;
        case REMOVE_TRIP:
            delete newState[action.trip.id]
            return newState;
        case CLEAR_TRIPS_INFO:
            newState = {};
            return newState;
        default:
            return state;
    }
}