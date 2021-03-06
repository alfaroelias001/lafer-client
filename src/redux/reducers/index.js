import {
  SIGN_UP,
  SIGN_IN,
  BUY_SOAT,
  SECURE_CAR,
  CLIENT_INFO,
  VEHICLE_INFO,
  BUY_SOAT_FORM,
  MAIN_INFO,
  GET_CITIES,
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  BUY_SOAT_FORM_FAILURE,
  SIGN_IN_SUCCESS,
  GET_CITIES_SUCCESS,
  BUY_SOAT_SUCCESS,
  BUY_SOAT_FORM_SUCCESS,
  SECURE_CAR_FAILURE,
  SECURE_CAR_SUCCESS,
  CLIENT_INFO_FAILURE,
  CLIENT_INFO_SUCCESS,
  VEHICLE_INFO_FAILURE,
  VEHICLE_INFO_SUCCESS,
  BUY_SOAT_FAILURE,
  GET_CITIES_FAILURE,
  MAIN_INFO_FAILURE,
  MAIN_INFO_SUCCESS,
  SIGN_UP_SUCCESS,
  CREATE_COUNTRY,
  CREATE_COUNTRY_FAILURE,
  CREATE_COUNTRY_SUCCESS,
  DELETE_COUNTRY,
  DELETE_COUNTRY_FAILURE,
  DELETE_COUNTRY_SUCCESS,
  GET_COUNTRIES,
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_SUCCESS,
  UPDATE_COUNTRY,
  UPDATE_COUNTRY_FAILURE,
  UPDATE_COUNTRY_SUCCESS,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_BY_ID_SUCCESS,
  GET_COUNTRY_BY_ID_FAILURE,
} from '../constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_INFO:
    case VEHICLE_INFO:
    case BUY_SOAT:
    case SIGN_IN:
    case SIGN_UP:
    case BUY_SOAT_FORM:
    case SECURE_CAR:
    case GET_CITIES:
    case MAIN_INFO:
    /* COUNTRIES */
    case GET_COUNTRIES:
    case DELETE_COUNTRY:
    case GET_COUNTRY_BY_ID:
    case UPDATE_COUNTRY:
    case CREATE_COUNTRY:
    /* END COUNTRIES */
      return { ...state, loading: true };
    case SECURE_CAR_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case CLIENT_INFO_FAILURE:
    case VEHICLE_INFO_FAILURE:
    case BUY_SOAT_FAILURE:
    case BUY_SOAT_FORM_FAILURE:
    case GET_CITIES_FAILURE:
    case MAIN_INFO_FAILURE:
    /* COUNTRIES */
    case CREATE_COUNTRY_FAILURE:
    case UPDATE_COUNTRY_FAILURE:
    case DELETE_COUNTRY_FAILURE:
    case GET_COUNTRIES_FAILURE:
    case CREATE_COUNTRY_SUCCESS:
    case UPDATE_COUNTRY_SUCCESS:
    case DELETE_COUNTRY_SUCCESS:
    case GET_COUNTRY_BY_ID_FAILURE:
    /* END COUNTRIES */
      return {
        ...state,
        response: action.response,
        loading: false,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        auth: action.response,
        loading: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        auth: action.response,
        loading: false,
      };
    case MAIN_INFO_SUCCESS:
      return {
        ...state,
        response: action.response,
        loading: false,
      };
    case SECURE_CAR_SUCCESS:
      return {
        ...state,
        secure_car: action.response,
      };
    case GET_CITIES_SUCCESS:
      return { ...state, cities_secure_car: action.response, loading: false }
    case CLIENT_INFO_SUCCESS:
      return {
        ...state,
        client_info_soat: action.client_info,
        loading: false
      };
    case VEHICLE_INFO_SUCCESS:
      return {
        ...state,
        vehicle_info_soat: action.vehicle_info,
        loading: false
      };
    case BUY_SOAT_SUCCESS:
      return {
        ...state,
        buy_soat: action.buy_soat,
        loading: false
      };
    /* COUNTRIES */
    case GET_COUNTRY_BY_ID_SUCCESS:
        return {
          ...state,
          get_country: action.response,
          loading: false,
        };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        get_countries_list: action.response,
        loading: false,
      };
    /* END COUNTRIES */
    case BUY_SOAT_FORM_SUCCESS:
    default:
      return state;
  }
};

export default reducer;
