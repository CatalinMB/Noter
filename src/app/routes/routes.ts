import { NoteComponent } from '../note/note.component';
import { TodoComponent } from '../todo/todo.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ReminderComponent } from '../reminder/reminder.component';



export const appRoutes = [
    {
        path: 'welcome', component: WelcomeComponent,
        children: [
            { path: 'note', component: NoteComponent },
            { path: 'todo', component: TodoComponent },
            { path: 'reminder', component: ReminderComponent },
        ]
    },
    { path: 'note', component: NoteComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'reminder', component: ReminderComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];
