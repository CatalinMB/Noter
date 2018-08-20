import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard';
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
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { rootReducer, IAppState } from './store/store';
import { UsersActions } from './reducers/users.actions';
import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './login/logout.component';
import { MatInputModule } from '@angular/material/input';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { NotesEpic } from './epic/notes.epic';
import { FilterNotes } from './note/notes.filter';



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
    ReminderListHeaderComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FilterNotes
  ],
  imports: [
    BrowserAnimationsModule,
    AmazingTimePickerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgReduxModule,
    NgReduxRouterModule.forRoot()
  ],
  providers: [NoteDataService , NotesEpic, UsersActions, TodoDataService, ReminderDataService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter,
    private devTool: DevToolsExtension,
    private notesEpic: NotesEpic
  ) {
    ngReduxRouter.initialize(/* args */);

    const rootEpic = combineEpics(
      // Each epic is referenced here.
      this.notesEpic.getNotes, this.notesEpic.addNote//this.usersEpic.createBaby
    );

    // Middleware
    // http://redux.js.org/docs/advanced/Middleware.html
    // https://github.com/angular-redux/store/blob/master/articles/epics.md
    // const epicMiddleware = createEpicMiddleware(rootEpic);
    const middleware = [
      createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
    ];

    ngRedux.configureStore(
      rootReducer,
      {}, middleware, [devTool.isEnabled() ? devTool.enhancer() : f => f]);

  }
}
