import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-list-header',
  templateUrl: './note-list-header.component.html',
  styleUrls: ['./note-list-header.component.css']
})
export class NoteListHeaderComponent implements OnInit {

  newNote: Note = new Note();

  @Output()
  add: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addNote(){
    this.add.emit(this.newNote);
    this.newNote = new Note();
  }

}
