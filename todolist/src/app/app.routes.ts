import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatetodolistComponent } from './createtodolist/createtodolist.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'createtodolist', component: CreatetodolistComponent}
];
