import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListFooterComponent } from './note-list-footer.component';

describe('NoteListFooterComponent', () => {
  let component: NoteListFooterComponent;
  let fixture: ComponentFixture<NoteListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
