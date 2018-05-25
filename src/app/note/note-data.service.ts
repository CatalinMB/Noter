import {Injectable} from '@angular/core';
import {Note} from './note';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response } from '@angular/http';

@Injectable()
export class NoteDataService {

  lastId = 0;

  constructor(private http: Http) {
  }

  // Simulate POST /notes
  addNote(note: Note): Observable<Note> {
    if (!note.id) {
      note.id = ++this.lastId;
    }
    return this.http
      .post('http://localhost:3000/note', note)
      .map(response => {
        return new Note(response.json());
      })
      .catch(this.handleError);
  }

  // Simulate DELETE /notes/:id
  deleteNoteById(noteId: number): Observable<null> {
    return this.http
      .delete('http://localhost:3000/note/' + noteId)
      .map(response => null)
      .catch(this.handleError);
  }


  // Simulate GET /notes
  getAllNotes(): Observable<Note[]> {
    return this.http
      .get('http://localhost:3000/note')
      .map(response => {
        const notes = response.json();
        return notes.map((note) => new Note(note));
      })
      .catch(this.handleError);
  }

  // Simulate GET /notes/:id
 getNoteById(noteId: number): Observable<Note> {
    return this.http
      .get('http://localhost:3000/note' + noteId)
      .map(response => {
        return new Note(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('handleError', error);
    return Observable.throw(error);
  }
}
