import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NoteDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId = 0;

  // Store the notes
  notes: Note[] = [];

  constructor() { }


  //Simulate POST /notes
  //Adding Nodejs functionallity for the future ( for POST )
  addNote(note: Note): NoteDataService {
    if (!note.id) {
      note.id = ++this.lastId;
    }
    this.notes.push(note);
    return this;
  }

  //Simulate DELETE /notes/:id
  //Adding NodeJs ..
  deleteNotesById(id: number): NoteDataService {
    this.notes = this.notes.filter(note => note.id !== id);
    return this;
  }

  //Simuate PUT /notes/id
  updateNotesById(id: number, values: Object = {}): Note {
    const note = this.getNoteById(id);
    if (!note) {
      return null;
    }
    Object.assign(note, values);
    return note;
  }

  // Simulate GET /notes
  getAllNotes(): Note[] {
    return this.notes;
  }

  // Simulate GET /todos/:id
  getNoteById(id: number): Note {
    return this.notes.filter(note => note.id === id).pop();
  }
}
