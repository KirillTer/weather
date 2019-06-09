import * as R from 'ramda'
import {LOAD_WEATHER_SUCCESS} from '../actions/actionTypes'

const initialState = {
    weather: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_WEATHER_SUCCESS:
            console.log('LOAD_WEATHER_SUCCESS')
            return R.merge(state, {
                weather: payload
            })
        default: return state
    }
}