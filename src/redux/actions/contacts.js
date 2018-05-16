import ContactsApi from '../../utils/api/contactsApi'

export const CREATE_CONTACT = 'CREATE_CONTACT';
export const CREATE_CONTACT_SUCCESS = 'CREATE_CONTACT_SUCCESS';
export const CREATE_CONTACT_ERROR = 'CREATE_CONTACT_ERROR';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';

export function createContact(contact) {
  return async (dispatch) => {
    dispatch({ type: CREATE_CONTACT });

    try {
      await ContactsApi.createContact(contact);

      return dispatch({ type: CREATE_CONTACT_SUCCESS, contact });
    } catch (error) {
      return dispatch({
        type: CREATE_CONTACT_ERROR,
        error,
      });
    }
  }
}

export function fetchContacts() {
  return async (dispatch) => {
    dispatch({ type: FETCH_CONTACTS });

    try {
      const data = await ContactsApi.getAllContacts();
      console.log(data);
      return dispatch({ type: FETCH_CONTACTS_SUCCESS, data });
    } catch (error) {
      return dispatch({
        type: FETCH_CONTACTS_ERROR,
        error,
      })
    }
  }
}
