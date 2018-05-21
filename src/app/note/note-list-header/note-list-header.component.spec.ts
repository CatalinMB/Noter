import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListHeaderComponent } from './note-list-header.component';

describe('NoteListHeaderComponent', () => {
  let component: NoteListHeaderComponent;
  let fixture: ComponentFixture<NoteListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
