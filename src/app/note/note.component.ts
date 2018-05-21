import { Component, OnInit } from '@angular/core';
import {NoteDataService} from './note-data.service';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: []
})
export class NoteComponent implements OnInit  {
  title = 'app';
  // newNote: Note = new Note();

  constructor(private noteDataService: NoteDataService) {
  }

  // addNote() {
  //   this.noteDataService.addNote(this.newNote);
  //   this.newNote = new Note ();
  // }

  ngOnInit() {

  }

  onAddNote(note: Note) {
    this.noteDataService.addNote(note);
  }

  onRemoveNote(note) {
    this.noteDataService.deleteNotesById(note.id);
  }

  get notes() {
    return this.noteDataService.getAllNotes();
  }

}


