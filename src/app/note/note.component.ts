import { Component, OnInit } from '@angular/core';
import { NoteDataService } from './note-data.service';
import { Note } from './note';
import { UsersActions } from '../reducers/users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: []
})
export class NoteComponent implements OnInit {

  private registerForm;
  private notes: Note[];
  lastId = 0;

  // constructor(private noteDataService: NoteDataService) { }
  constructor(private http: Http, private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>,
     private noteDataService: NoteDataService) { }

  ngOnInit() {
    /*     this.noteDataService
          .getAllNotes()
          .subscribe(
            (notes) => {
              this.notes = notes;
              console.log(notes, 'notes');
            }
          );
        console.log("--------------------------->STATE", this.ngRedux.getState()); */
    this.usersActions.getNotes();

    this.ngRedux.select(state => state.content).subscribe(content => {
      console.log(content, 'response');
      this.notes = content.notes;
    });
  }


  onAddNote(note) {

    this.usersActions.addNote(note);
    console.log('noteeeeeee', note);
    this.ngRedux.select(state => state.content).subscribe(content => {
      console.log(content, 'response');
      this.notes = content.notes;
    });
    // this.noteDataService
    // .addNote(note)
    // .subscribe(
    //   (_) => {
    //     this.notes.push(note);
    //   }
    // );

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


