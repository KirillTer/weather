import * as R from "ramda";

export const getWeatherSelector = state => R.values(state.weather);

export const getMaleWeatherSelector = state =>
  R.values(state.weather);

export const getFemaleWeatherSelector = state =>
  R.values(state.weather);
