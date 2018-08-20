import { TestBed, inject } from '@angular/core/testing';

import { NoteDataService } from './note-data.service';
import { Note } from './note';

describe('NoteDataService', () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [NoteDataService]
  //   });
  // });

  // describe('#getAllNotes()', () => {

  //   it('should return an empty array by default', inject([NoteDataService], (service: NoteDataService) => {
  //     expect(service.getAllNotes()).toEqual([]);
  //   }));

  //   it('should return all notes', inject([NoteDataService], (service: NoteDataService) => {
  //     const note1 = new Note({title: 'Hello 1'});
  //     const note2 = new Note({title: 'Hello 2'});
  //     service.addNote(note1);
  //     service.addNote(note2);
  //     expect(service.getAllNotes()).toEqual([note1, note2]);
  //   }));

  // });

  // describe('#save(note)', () => {

  //   it('should assign an id', inject([NoteDataService], (service: NoteDataService) => {
  //     const note1 = new Note({title: 'Hello 1'});
  //     const note2 = new Note({title: 'Hello 2'});
  //     service.addNote(note1);
  //     service.addNote(note2);
  //     expect(service.getNoteById(1)).toEqual(note1);
  //     expect(service.getNoteById(2)).toEqual(note2);
  //   }));

  // });

  // describe('#deleteNoteById(id)', () => {

  //   it('should remove a note according with the right id', inject([NoteDataService], (service: NoteDataService) => {
  //     const note1 = new Note({title: 'Hello 1'});
  //     const note2 = new Note({title: 'Hello 2'});
  //     service.addNote(note1);
  //     service.addNote(note2);
  //     expect(service.getAllNotes()).toEqual([note1, note2]);
  //     service.deleteNotesById(1);
  //     expect(service.getAllNotes()).toEqual([note2]);
  //     service.deleteNotesById(2);
  //     expect(service.getAllNotes()).toEqual([]);
  //   }));

  // });

  // describe('#updateNotebyId(id, values)', () => {

  //   it('should return the note with the corresponding id and updated data', inject([NoteDataService], (service: NoteDataService) => {
  //     const note = new Note({title: 'Hello 1'});
  //     service.addNote(note);
  //     const updatedNote = service.updateNotesById(1, {
  //       title: 'new title'
  //     });
  //     expect(updatedNote.title).toEqual('new title');
  //   }));

  //   // it('should return null if the note is not found', inject([NoteDataService], (service: NoteDataService) => {
  //   //   const note = new Note({title: 'Hello 1'});
  //   //   service.addTodo(todo);
  //   //   let updatedTodo = service.updateTodoById(2, {
  //   //     title: 'new title'
  //   //   });
  //   //   expect(updatedTodo).toEqual(null);
  //   // }));

  // });

  // describe('#toggleTodoComplete(todo)', () => {

  //   it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(true);
  //     service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(false);
  //   }));

  // });

});

