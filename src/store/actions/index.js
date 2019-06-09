import {LOAD_WEATHER_START, LOAD_WEATHER_SUCCESS, LOAD_WEATHER_FAILURE} from './actionTypes'

import { fetchWeatherApi } from '../../api/'

export const loadWeather = () => async dispatch => {
    dispatch({type: LOAD_WEATHER_START})

    try {
        const weather = await fetchWeatherApi()
        dispatch({type: LOAD_WEATHER_SUCCESS, payload: weather})
    } catch (err) {
        dispatch({type: LOAD_WEATHER_FAILURE, payload: err, error: true})
    }
}
