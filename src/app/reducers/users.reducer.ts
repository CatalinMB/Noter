import { UsersActions } from '../reducers/users.actions';
import { State } from '../store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: State = {
    notes: [], reminders: [], toDos: []
};

export function usersReducer(state: State = INITIAL_STATE, action: any) {

    switch (action.type) {

        case UsersActions.GET_NOTES: // The component wants the data
            return state.notes;
        case UsersActions.GET_NOTES_SUCCESS: // The ws sent back the users.
            // action.payload: an array of users
            return tassign(state, { notes: action.payload});

        // return state;
        case UsersActions.GET_NOTES_FAILURE: // The ws failed or something else bad
            return state;


        case UsersActions.ADD_NOTE: // action.payload is note: Baby
            // How to add an object to an array of objects without modifying the existing array?
            return tassign(state, { notes: [...state.notes, action.payload] });

        // return {...state, babies:[...state.babies, action.payload] };

        

        default:
            return state;
    }
}
