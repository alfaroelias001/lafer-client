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
  CREATE_MAINACTIVITY,
  CREATE_MAINACTIVITY_FAILURE,
  CREATE_MAINACTIVITY_SUCCESS,
  DELETE_MAINACTIVITY,
  DELETE_MAINACTIVITY_FAILURE,
  DELETE_MAINACTIVITY_SUCCESS,
  GET_MAINACTIVITIES,
  GET_MAINACTIVITIES_FAILURE,
  GET_MAINACTIVITIES_SUCCESS,
  UPDATE_MAINACTIVITY,
  UPDATE_MAINACTIVITY_FAILURE,
  UPDATE_MAINACTIVITY_SUCCESS,
  GET_MAINACTIVITY_BY_ID,
  GET_MAINACTIVITY_BY_ID_SUCCESS,
  GET_MAINACTIVITY_BY_ID_FAILURE,
  CREATE_MEDIUMRESPONSES,
  CREATE_MEDIUMRESPONSES_FAILURE,
  CREATE_MEDIUMRESPONSES_SUCCESS,
  DELETE_MEDIUMRESPONSES,
  DELETE_MEDIUMRESPONSES_FAILURE,
  DELETE_MEDIUMRESPONSES_SUCCESS,
  GET_MEDIUMRESPONSES,
  GET_MEDIUMRESPONSES_FAILURE,
  GET_MEDIUMRESPONSES_SUCCESS,
  UPDATE_MEDIUMRESPONSES,
  UPDATE_MEDIUMRESPONSES_FAILURE,
  UPDATE_MEDIUMRESPONSES_SUCCESS,
  GET_MEDIUMRESPONSES_BY_ID,
  GET_MEDIUMRESPONSES_BY_ID_SUCCESS,
  GET_MEDIUMRESPONSES_BY_ID_FAILURE,
  CREATE_LINKCLASSES,
  CREATE_LINKCLASSES_FAILURE,
  CREATE_LINKCLASSES_SUCCESS,
  DELETE_LINKCLASSES,
  DELETE_LINKCLASSES_FAILURE,
  DELETE_LINKCLASSES_SUCCESS,
  GET_LINKCLASSES,
  GET_LINKCLASSES_FAILURE,
  GET_LINKCLASSES_SUCCESS,
  UPDATE_LINKCLASSES,
  UPDATE_LINKCLASSES_FAILURE,
  UPDATE_LINKCLASSES_SUCCESS,
  GET_LINKCLASSES_BY_ID,
  GET_LINKCLASSES_BY_ID_SUCCESS,
  GET_LINKCLASSES_BY_ID_FAILURE,
  CREATE_PQRCONTACTS,
  CREATE_PQRCONTACTS_FAILURE,
  CREATE_PQRCONTACTS_SUCCESS,
  DELETE_PQRCONTACTS,
  DELETE_PQRCONTACTS_FAILURE,
  DELETE_PQRCONTACTS_SUCCESS,
  GET_PQRCONTACTS,
  GET_PQRCONTACTS_FAILURE,
  GET_PQRCONTACTS_SUCCESS,
  UPDATE_PQRCONTACTS,
  UPDATE_PQRCONTACTS_FAILURE,
  UPDATE_PQRCONTACTS_SUCCESS,
  GET_PQRCONTACTS_BY_ID,
  GET_PQRCONTACTS_BY_ID_SUCCESS,
  GET_PQRCONTACTS_BY_ID_FAILURE,
  CREATE_TYPEACTIVITY,
  CREATE_TYPEACTIVITY_FAILURE,
  CREATE_TYPEACTIVITY_SUCCESS,
  DELETE_TYPEACTIVITY,
  DELETE_TYPEACTIVITY_FAILURE,
  DELETE_TYPEACTIVITY_SUCCESS,
  GET_TYPEACTIVITIES,
  GET_TYPEACTIVITIES_FAILURE,
  GET_TYPEACTIVITIES_SUCCESS,
  UPDATE_TYPEACTIVITY,
  UPDATE_TYPEACTIVITY_FAILURE,
  UPDATE_TYPEACTIVITY_SUCCESS,
  GET_TYPEACTIVITY_BY_ID,
  GET_TYPEACTIVITY_BY_ID_SUCCESS,
  GET_TYPEACTIVITY_BY_ID_FAILURE,
  CREATE_PRODUCTS,
  CREATE_PRODUCTS_FAILURE,
  CREATE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS,
  DELETE_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS,
  UPDATE_PRODUCTS_FAILURE,
  UPDATE_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCTS_BY_ID_SUCCESS,
  GET_PRODUCTS_BY_ID_FAILURE,
  CREATE_INSURERS,
  CREATE_INSURERS_FAILURE,
  CREATE_INSURERS_SUCCESS,
  DELETE_INSURERS,
  DELETE_INSURERS_FAILURE,
  DELETE_INSURERS_SUCCESS,
  GET_INSURERS,
  GET_INSURERS_FAILURE,
  GET_INSURERS_SUCCESS,
  UPDATE_INSURERS,
  UPDATE_INSURERS_FAILURE,
  UPDATE_INSURERS_SUCCESS,
  GET_INSURERS_BY_ID,
  GET_INSURERS_BY_ID_SUCCESS,
  GET_INSURERS_BY_ID_FAILURE,
  CREATE_TYPEOPERATIONS,
  CREATE_TYPEOPERATIONS_FAILURE,
  CREATE_TYPEOPERATIONS_SUCCESS,
  DELETE_TYPEOPERATIONS,
  DELETE_TYPEOPERATIONS_FAILURE,
  DELETE_TYPEOPERATIONS_SUCCESS,
  GET_TYPEOPERATIONS,
  GET_TYPEOPERATIONS_FAILURE,
  GET_TYPEOPERATIONS_SUCCESS,
  UPDATE_TYPEOPERATIONS,
  UPDATE_TYPEOPERATIONS_FAILURE,
  UPDATE_TYPEOPERATIONS_SUCCESS,
  GET_TYPEOPERATIONS_BY_ID,
  GET_TYPEOPERATIONS_BY_ID_SUCCESS,
  GET_TYPEOPERATIONS_BY_ID_FAILURE,
  CREATE_TYPEINDUSTRIES,
  CREATE_TYPEINDUSTRIES_FAILURE,
  CREATE_TYPEINDUSTRIES_SUCCESS,
  DELETE_TYPEINDUSTRIES,
  DELETE_TYPEINDUSTRIES_FAILURE,
  DELETE_TYPEINDUSTRIES_SUCCESS,
  GET_TYPEINDUSTRIES,
  GET_TYPEINDUSTRIES_FAILURE,
  GET_TYPEINDUSTRIES_SUCCESS,
  UPDATE_TYPEINDUSTRIES,
  UPDATE_TYPEINDUSTRIES_FAILURE,
  UPDATE_TYPEINDUSTRIES_SUCCESS,
  GET_TYPEINDUSTRIES_BY_ID,
  GET_TYPEINDUSTRIES_BY_ID_SUCCESS,
  GET_TYPEINDUSTRIES_BY_ID_FAILURE,
  CREATE_TYPEIDENTIFICATIONS,
  CREATE_TYPEIDENTIFICATIONS_FAILURE,
  CREATE_TYPEIDENTIFICATIONS_SUCCESS,
  DELETE_TYPEIDENTIFICATIONS,
  DELETE_TYPEIDENTIFICATIONS_FAILURE,
  DELETE_TYPEIDENTIFICATIONS_SUCCESS,
  GET_TYPEIDENTIFICATIONS,
  GET_TYPEIDENTIFICATIONS_FAILURE,
  GET_TYPEIDENTIFICATIONS_SUCCESS,
  UPDATE_TYPEIDENTIFICATIONS,
  UPDATE_TYPEIDENTIFICATIONS_FAILURE,
  UPDATE_TYPEIDENTIFICATIONS_SUCCESS,
  GET_TYPEIDENTIFICATIONS_BY_ID,
  GET_TYPEIDENTIFICATIONS_BY_ID_SUCCESS,
  GET_TYPEIDENTIFICATIONS_BY_ID_FAILURE,
  CREATE_TYPECOMPANIES,
  CREATE_TYPECOMPANIES_FAILURE,
  CREATE_TYPECOMPANIES_SUCCESS,
  DELETE_TYPECOMPANIES,
  DELETE_TYPECOMPANIES_FAILURE,
  DELETE_TYPECOMPANIES_SUCCESS,
  GET_TYPECOMPANIES,
  GET_TYPECOMPANIES_FAILURE,
  GET_TYPECOMPANIES_SUCCESS,
  UPDATE_TYPECOMPANIES,
  UPDATE_TYPECOMPANIES_FAILURE,
  UPDATE_TYPECOMPANIES_SUCCESS,
  GET_TYPECOMPANIES_BY_ID,
  GET_TYPECOMPANIES_BY_ID_SUCCESS,
  GET_TYPECOMPANIES_BY_ID_FAILURE,
  CREATE_REQUESTTYPES,
  CREATE_REQUESTTYPES_FAILURE,
  CREATE_REQUESTTYPES_SUCCESS,
  DELETE_REQUESTTYPES,
  DELETE_REQUESTTYPES_FAILURE,
  DELETE_REQUESTTYPES_SUCCESS,
  GET_REQUESTTYPES,
  GET_REQUESTTYPES_FAILURE,
  GET_REQUESTTYPES_SUCCESS,
  UPDATE_REQUESTTYPES,
  UPDATE_REQUESTTYPES_FAILURE,
  UPDATE_REQUESTTYPES_SUCCESS,
  GET_REQUESTTYPES_BY_ID,
  GET_REQUESTTYPES_BY_ID_SUCCESS,
  GET_REQUESTTYPES_BY_ID_FAILURE,
  IDLEADSHARP_SUCCESS,
  //IDLEADSHARP_FAILURE,
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
    case GET_COUNTRIES:
    case DELETE_COUNTRY:
    case GET_COUNTRY_BY_ID:
    case UPDATE_COUNTRY:
    case CREATE_COUNTRY:
    case GET_MAINACTIVITIES:
    case DELETE_MAINACTIVITY:
    case GET_MAINACTIVITY_BY_ID:
    case UPDATE_MAINACTIVITY:
    case CREATE_MAINACTIVITY:
    case GET_MEDIUMRESPONSES:
    case DELETE_MEDIUMRESPONSES:
    case GET_MEDIUMRESPONSES_BY_ID:
    case UPDATE_MEDIUMRESPONSES:
    case CREATE_MEDIUMRESPONSES:
    case GET_LINKCLASSES:
    case DELETE_LINKCLASSES:
    case GET_LINKCLASSES_BY_ID:
    case UPDATE_LINKCLASSES:
    case CREATE_LINKCLASSES:
    case GET_PQRCONTACTS:
    case DELETE_PQRCONTACTS:
    case GET_PQRCONTACTS_BY_ID:
    case UPDATE_PQRCONTACTS:
    case CREATE_PQRCONTACTS:
    case GET_TYPEACTIVITIES:
    case DELETE_TYPEACTIVITY:
    case GET_TYPEACTIVITY_BY_ID:
    case UPDATE_TYPEACTIVITY:
    case CREATE_TYPEACTIVITY:
    case GET_PRODUCTS:
    case DELETE_PRODUCTS:
    case GET_PRODUCTS_BY_ID:
    case UPDATE_PRODUCTS:
    case CREATE_PRODUCTS:
    case GET_INSURERS:
    case DELETE_INSURERS:
    case GET_INSURERS_BY_ID:
    case UPDATE_INSURERS:
    case CREATE_INSURERS:
    case GET_TYPEOPERATIONS:
    case DELETE_TYPEOPERATIONS:
    case GET_TYPEOPERATIONS_BY_ID:
    case UPDATE_TYPEOPERATIONS:
    case CREATE_TYPEOPERATIONS:
    case GET_TYPEINDUSTRIES:
    case DELETE_TYPEINDUSTRIES:
    case GET_TYPEINDUSTRIES_BY_ID:
    case UPDATE_TYPEINDUSTRIES:
    case CREATE_TYPEINDUSTRIES:
    case GET_TYPEIDENTIFICATIONS:
    case DELETE_TYPEIDENTIFICATIONS:
    case GET_TYPEIDENTIFICATIONS_BY_ID:
    case UPDATE_TYPEIDENTIFICATIONS:
    case CREATE_TYPEIDENTIFICATIONS:
    case GET_TYPECOMPANIES:
    case DELETE_TYPECOMPANIES:
    case GET_TYPECOMPANIES_BY_ID:
    case UPDATE_TYPECOMPANIES:
    case CREATE_TYPECOMPANIES:
    case GET_REQUESTTYPES:
    case DELETE_REQUESTTYPES:
    case GET_REQUESTTYPES_BY_ID:
    case UPDATE_REQUESTTYPES:
    case CREATE_REQUESTTYPES:
      return { ...state, loading: true };
    case IDLEADSHARP_SUCCESS:
      return { ...state, idLeadSharp: action.idLeadSharp };
    case SECURE_CAR_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case CLIENT_INFO_FAILURE:
    case VEHICLE_INFO_FAILURE:
    case BUY_SOAT_FAILURE:
    case BUY_SOAT_FORM_FAILURE:
    case GET_CITIES_FAILURE:
    case MAIN_INFO_FAILURE:
    case CREATE_COUNTRY_FAILURE:
    case UPDATE_COUNTRY_FAILURE:
    case DELETE_COUNTRY_FAILURE:
    case GET_COUNTRIES_FAILURE:
    case CREATE_COUNTRY_SUCCESS:
    case UPDATE_COUNTRY_SUCCESS:
    case DELETE_COUNTRY_SUCCESS:
    case GET_COUNTRY_BY_ID_FAILURE:
    case CREATE_MAINACTIVITY_FAILURE:
    case UPDATE_MAINACTIVITY_FAILURE:
    case DELETE_MAINACTIVITY_FAILURE:
    case GET_MAINACTIVITIES_FAILURE:
    case CREATE_MAINACTIVITY_SUCCESS:
    case UPDATE_MAINACTIVITY_SUCCESS:
    case DELETE_MAINACTIVITY_SUCCESS:
    case GET_MAINACTIVITY_BY_ID_FAILURE:
    case CREATE_MEDIUMRESPONSES_FAILURE:
    case UPDATE_MEDIUMRESPONSES_FAILURE:
    case DELETE_MEDIUMRESPONSES_FAILURE:
    case GET_MEDIUMRESPONSES_FAILURE:
    case CREATE_MEDIUMRESPONSES_SUCCESS:
    case UPDATE_MEDIUMRESPONSES_SUCCESS:
    case DELETE_MEDIUMRESPONSES_SUCCESS:
    case GET_MEDIUMRESPONSES_BY_ID_FAILURE:
    case CREATE_LINKCLASSES_FAILURE:
    case UPDATE_LINKCLASSES_FAILURE:
    case DELETE_LINKCLASSES_FAILURE:
    case GET_LINKCLASSES_FAILURE:
    case CREATE_LINKCLASSES_SUCCESS:
    case UPDATE_LINKCLASSES_SUCCESS:
    case DELETE_LINKCLASSES_SUCCESS:
    case GET_LINKCLASSES_BY_ID_FAILURE:
    case CREATE_PQRCONTACTS_FAILURE:
    case UPDATE_PQRCONTACTS_FAILURE:
    case DELETE_PQRCONTACTS_FAILURE:
    case GET_PQRCONTACTS_FAILURE:
    case CREATE_PQRCONTACTS_SUCCESS:
    case UPDATE_PQRCONTACTS_SUCCESS:
    case DELETE_PQRCONTACTS_SUCCESS:
    case GET_PQRCONTACTS_BY_ID_FAILURE:
    case CREATE_TYPEACTIVITY_FAILURE:
    case UPDATE_TYPEACTIVITY_FAILURE:
    case DELETE_TYPEACTIVITY_FAILURE:
    case GET_TYPEACTIVITIES_FAILURE:
    case CREATE_TYPEACTIVITY_SUCCESS:
    case UPDATE_TYPEACTIVITY_SUCCESS:
    case DELETE_TYPEACTIVITY_SUCCESS:
    case GET_TYPEACTIVITY_BY_ID_FAILURE:
    case CREATE_PRODUCTS_FAILURE:
    case UPDATE_PRODUCTS_FAILURE:
    case DELETE_PRODUCTS_FAILURE:
    case GET_PRODUCTS_FAILURE:
    case CREATE_PRODUCTS_SUCCESS:
    case UPDATE_PRODUCTS_SUCCESS:
    case DELETE_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_BY_ID_FAILURE:
    case CREATE_INSURERS_FAILURE:
    case UPDATE_INSURERS_FAILURE:
    case DELETE_INSURERS_FAILURE:
    case GET_INSURERS_FAILURE:
    case CREATE_INSURERS_SUCCESS:
    case UPDATE_INSURERS_SUCCESS:
    case DELETE_INSURERS_SUCCESS:
    case GET_INSURERS_BY_ID_FAILURE:
    case CREATE_TYPEOPERATIONS_FAILURE:
    case UPDATE_TYPEOPERATIONS_FAILURE:
    case DELETE_TYPEOPERATIONS_FAILURE:
    case GET_TYPEOPERATIONS_FAILURE:
    case CREATE_TYPEOPERATIONS_SUCCESS:
    case UPDATE_TYPEOPERATIONS_SUCCESS:
    case DELETE_TYPEOPERATIONS_SUCCESS:
    case GET_TYPEOPERATIONS_BY_ID_FAILURE:
    case CREATE_TYPEINDUSTRIES_FAILURE:
    case UPDATE_TYPEINDUSTRIES_FAILURE:
    case DELETE_TYPEINDUSTRIES_FAILURE:
    case GET_TYPEINDUSTRIES_FAILURE:
    case CREATE_TYPEINDUSTRIES_SUCCESS:
    case UPDATE_TYPEINDUSTRIES_SUCCESS:
    case DELETE_TYPEINDUSTRIES_SUCCESS:
    case GET_TYPEINDUSTRIES_BY_ID_FAILURE:
    case CREATE_TYPEIDENTIFICATIONS_FAILURE:
    case UPDATE_TYPEIDENTIFICATIONS_FAILURE:
    case DELETE_TYPEIDENTIFICATIONS_FAILURE:
    case GET_TYPEIDENTIFICATIONS_FAILURE:
    case CREATE_TYPEIDENTIFICATIONS_SUCCESS:
    case UPDATE_TYPEIDENTIFICATIONS_SUCCESS:
    case DELETE_TYPEIDENTIFICATIONS_SUCCESS:
    case GET_TYPEIDENTIFICATIONS_BY_ID_FAILURE:
    case CREATE_TYPECOMPANIES_FAILURE:
    case UPDATE_TYPECOMPANIES_FAILURE:
    case DELETE_TYPECOMPANIES_FAILURE:
    case GET_TYPECOMPANIES_FAILURE:
    case CREATE_TYPECOMPANIES_SUCCESS:
    case UPDATE_TYPECOMPANIES_SUCCESS:
    case DELETE_TYPECOMPANIES_SUCCESS:
    case GET_TYPECOMPANIES_BY_ID_FAILURE:
    case CREATE_REQUESTTYPES_FAILURE:
    case UPDATE_REQUESTTYPES_FAILURE:
    case DELETE_REQUESTTYPES_FAILURE:
    case GET_REQUESTTYPES_FAILURE:
    case CREATE_REQUESTTYPES_SUCCESS:
    case UPDATE_REQUESTTYPES_SUCCESS:
    case DELETE_REQUESTTYPES_SUCCESS:
    case GET_REQUESTTYPES_BY_ID_FAILURE:
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
    case GET_MAINACTIVITY_BY_ID_SUCCESS:
      return {
        ...state,
        get_mainactivity: action.response,
        loading: false,
      };
    case GET_MAINACTIVITIES_SUCCESS:
      return {
        ...state,
        get_mainactivities_list: action.response,
        loading: false,
      };
    case GET_MEDIUMRESPONSES_BY_ID_SUCCESS:
      return {
        ...state,
        get_mediumresponses: action.respon,
        loading: false,
      };
    case GET_MEDIUMRESPONSES_SUCCESS:
      return {
        ...state,
        get_mediumresponses_list: action.respon,
        loading: false,
      };
    case GET_LINKCLASSES_BY_ID_SUCCESS:
      return {
        ...state,
        get_linkclasses: action.response,
        loading: false,
      };
    case GET_LINKCLASSES_SUCCESS:
      return {
        ...state,
        get_linkclasses_list: action.response,
        loading: false,
      };
    case GET_PQRCONTACTS_BY_ID_SUCCESS:
      return {
        ...state,
        get_pqrcontacts: action.response,
        loading: false,
      };
    case GET_PQRCONTACTS_SUCCESS:
      return {
        ...state,
        get_pqrcontacts_list: action.response,
        loading: false,
      };
    case GET_TYPEACTIVITY_BY_ID_SUCCESS:
      return {
        ...state,
        get_typeactivity: action.response,
        loading: false,
      };
    case GET_TYPEACTIVITIES_SUCCESS:
      return {
        ...state,
        get_typeactivities_list: action.response,
        loading: false,
      };
    case GET_PRODUCTS_BY_ID_SUCCESS:
      return {
        ...state,
        get_products: action.response,
        loading: false,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        get_products_list: action.response,
        loading: false,
      };
    case GET_INSURERS_BY_ID_SUCCESS:
      return {
        ...state,
        get_insurers: action.response,
        loading: false,
      };
    case GET_INSURERS_SUCCESS:
      return {
        ...state,
        get_insurers_list: action.response,
        loading: false,
      };
    case GET_TYPEOPERATIONS_BY_ID_SUCCESS:
      return {
        ...state,
        get_typeoperations: action.response,
        loading: false,
      };
    case GET_TYPEOPERATIONS_SUCCESS:
      return {
        ...state,
        get_typeoperations_list: action.response,
        loading: false,
      };
    case GET_TYPEINDUSTRIES_BY_ID_SUCCESS:
      return {
        ...state,
        get_typeindustries: action.response,
        loading: false,
      };
    case GET_TYPEINDUSTRIES_SUCCESS:
      return {
        ...state,
        get_typeindustries_list: action.response,
        loading: false,
      };
    case GET_TYPEIDENTIFICATIONS_BY_ID_SUCCESS:
      return {
        ...state,
        get_typeidentifications: action.response,
        loading: false,
      };
    case GET_TYPEIDENTIFICATIONS_SUCCESS:
      return {
        ...state,
        get_typeidentifications_list: action.response,
        loading: false,
      };
    case GET_TYPECOMPANIES_BY_ID_SUCCESS:
      return {
        ...state,
        get_typecompanies: action.response,
        loading: false,
      };
    case GET_TYPECOMPANIES_SUCCESS:
      return {
        ...state,
        get_typecompanies_list: action.response,
        loading: false,
      };
    case GET_REQUESTTYPES_BY_ID_SUCCESS:
      return {
        ...state,
        get_requesttypes: action.response,
        loading: false,
      };
    case GET_REQUESTTYPES_SUCCESS:
      return {
        ...state,
        get_requesttypes_list: action.response,
        loading: false,
      };
    case BUY_SOAT_FORM_SUCCESS:
    default:
      return state;
  }
};

export default reducer;
