import { NoteDataService } from '../note/note-data.service'
import { UsersActions } from '../reducers/users.actions';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class NotesEpic {
    constructor(private notesService: NoteDataService) { }

    // This is an epic function!!! Must be registered in app.module.

    getNotes = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.GET_NOTES) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                console.log("heyoooooo", this.notesService.getAllNotes);
                return this.notesService.getAllNotes()
                    .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.GET_NOTES_SUCCESS,
                        payload: result
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.GET_NOTES_FAILURE,
                        payload: error
                    }));
            });
    }
    addNote = (action$: ActionsObservable<any>) => {
      return action$.ofType(UsersActions.ADD_NOTE) // Listen for this action
        .mergeMap(({payload}) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
             this.notesService.addNote(payload).subscribe(
                (_) => {
                //   this.notes.push(note);
                }
              );
             return this.notesService.getAllNotes() // createUser
              .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
                type: UsersActions.GET_NOTES_SUCCESS,
                payload: result
              }))
              .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                type: UsersActions.GET_NOTES_FAILURE,
                payload: error
            }));
    });
    }

}