import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent {

  @Input() note: Note;

  @Output()
  remove: EventEmitter<Note> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Note> = new EventEmitter();

  constructor() {
  }


  removeNote(note: Note) {
    this.remove.emit(note);
  }

}