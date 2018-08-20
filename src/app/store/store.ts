import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { usersReducer } from '../reducers/users.reducer';
import { Note } from '../note/note';
import { Reminder } from '../reminder/reminder';
import { Todo } from '../todo/todo';

export class State {
    notes: Note[];
    reminders: Reminder[];
    toDos: Todo[];
}
export class IAppState {
    content?: State;
}
export const rootReducer = combineReducers<IAppState>({
    content: usersReducer,

    router: routerReducer
});
