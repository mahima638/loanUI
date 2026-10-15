import { Routes } from '@angular/router';
import { Loanaccount } from './loanaccount/loanaccount';
import { Emischedule } from './emischedule/emischedule';

export const routes: Routes = [
    {path:"loanacc",component:Loanaccount},
    { path: 'emischedule', component:Emischedule}
];
