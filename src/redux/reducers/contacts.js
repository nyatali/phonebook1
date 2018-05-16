import {
  CREATE_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
  FETCH_CONTACTS_SUCCESS
} from '../actions/contacts';

const initialState =
  {
  data: [],
  error: null,
  isFetched: false,
}
export default (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CONTACT:
      return state;
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        isFetched: true,
        data: [
          ...state.data,
          action.contact,
        ]
      }
    case CREATE_CONTACT_ERROR:
      return {
        ...state,
        error: action.error
      }

    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        isFetched: true,
        data: action.data
      }
    default:
      return state;
  }
}
