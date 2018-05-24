import { NoteComponent } from '../note/note.component';
import { TodoComponent } from '../todo/todo.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../auth-guard';



export const appRoutes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard],
        children: [
            { path: 'note', component: NoteComponent },
            { path: 'todo', component: TodoComponent },
            { path: 'reminder', component: ReminderComponent },
        ]
    },
    { path: 'note', component: NoteComponent, canActivate: [AuthGuard] },
    { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
    { path: 'reminder', component: ReminderComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'signup', component: RegisterComponent },
];
