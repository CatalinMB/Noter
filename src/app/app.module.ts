import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NoteDataService } from './note/note-data.service';
import { NoteListHeaderComponent } from './note/note-list-header/note-list-header.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { NoteListItemComponent } from './note/note-list-item/note-list-item.component';
import { NoteListFooterComponent } from './note/note-list-footer/note-list-footer.component';
import { NoteComponent } from './note/note.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDataService } from './todo/todo-data.service';
import { TodoListHeaderComponent } from './todo/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './todo/todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo/todo-list-footer/todo-list-footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { ReminderComponent } from './reminder/reminder.component';
import { ReminderListComponent } from './reminder/reminder-list/reminder-list.component';
import { ReminderListItemComponent } from './reminder/reminder-list-item/reminder-list-item.component';
import { ReminderListFooterComponent } from './reminder/reminder-list-footer/reminder-list-footer.component';
import { ReminderListHeaderComponent } from './reminder/reminder-list-header/reminder-list-header.component';
import { ReminderDataService } from './reminder/reminder-data.service';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { MatIconModule } from '@angular/material';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import rootReducer, { IAppState } from './reducers';
import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';




@NgModule({
  declarations: [
    AppComponent,
    NoteListHeaderComponent,
    NoteListComponent,
    NoteListItemComponent,
    NoteListFooterComponent,
    NoteComponent,
    TodoComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    WelcomeComponent,
    ReminderComponent,
    ReminderListComponent,
    ReminderListItemComponent,
    ReminderListFooterComponent,
    ReminderListHeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AmazingTimePickerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    NgReduxModule,
    NgReduxRouterModule.forRoot()
  ],
  providers: [NoteDataService, TodoDataService, ReminderDataService],
  bootstrap: [AppComponent]
})


export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>, ngReduxRouter: NgReduxRouter) {
      ngRedux.configureStore(rootReducer, {}, []);
      ngReduxRouter.initialize(/* args */);
    }
}
