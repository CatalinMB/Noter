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
  
  notes: Note[] = [];

  constructor(private noteDataService: NoteDataService) {
  }

  ngOnInit() {
    this.noteDataService
      .getAllNotes()
      .subscribe(
        (notes) => {
          this.notes = notes;
          console.log(notes, 'notes');
        }
      );

  }

  onAddNote(note) {
    this.noteDataService
      .addNote(note)
      .subscribe(
        (notes) => {
          this.notes.push(note);
        }
      );
  }

  onRemoveNote(note) {
    this.noteDataService
      .deleteNoteById(note.id)
      .subscribe(
        (_) => {
          this.notes = this.notes.filter((n) => n.id !== note.id);
          console.log('length after delete ' + this.notes.length);
        }
      );
  }
}


