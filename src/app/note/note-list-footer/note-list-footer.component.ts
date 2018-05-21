import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-list-footer',
  templateUrl: './note-list-footer.component.html',
  styleUrls: ['./note-list-footer.component.css']
})
export class NoteListFooterComponent {

  @Input()
  notes: Note[];

  constructor() {
  }

}