import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerEmployeComponent} from '../employe/creer-employe/creer-employe.component';
import { RechercherEmployeComponent } from '../employe/rechercher-employe/rechercher-employe.component';

export const routes: Routes = [
  { path: 'create/employe', component: CreerEmployeComponent },
  { path: 'search/employe', component: RechercherEmployeComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
