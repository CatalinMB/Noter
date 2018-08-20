import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Note } from '../note/note';
import {NoteDataService} from '../note/note-data.service';

@Injectable()
export class UsersActions {

    constructor(private noteDataService: NoteDataService,
        private ngRedux: NgRedux<IAppState>) { }

    static ADD_NOTE: String = 'ADD_NOTE';
    static GET_NOTES: String = 'GET_NOTES';
    static GET_NOTES_SUCCESS: String = 'GET_NOTES_SUCCESS';
    static GET_NOTES_FAILURE: String = 'GET_NOTES_FAILURE';

    getNotes() {
        this.ngRedux.dispatch({
            type: UsersActions.GET_NOTES
        });
    }

    addNote(note: Note): void {

        this.ngRedux.dispatch({
            type: UsersActions.ADD_NOTE,
            payload: note
            // Example of passing multiple parameters to reducer by passing an object
            // payload: {baby, sitterName}
        });
    }
}
