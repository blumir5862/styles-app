import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NoneComponent } from './none/none.component';
import { onestyleComponent } from './onestyle/onestyle.component';
import { twostyleComponent } from './twostyle/twostyle.component';
import { threestyleComponent } from './threestyle/threestyle.component';
import { fourstyleComponent } from './fourstyle/fourstyle.component';
import { fivestyleComponent } from './fivestyle/fivestyle.component';
import { linksComponent } from './links/links.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'onestyle', component: onestyleComponent, },
  { path: 'twostyle', component: twostyleComponent, },
  { path: 'threestyle', component: threestyleComponent, },
  { path: 'fourstyle', component: fourstyleComponent, },
  { path: 'fivestyle', component: fivestyleComponent, },
  { path: 'links', component: linksComponent, },
  { path: 'questionnaires', component: QuestionnairesComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: 'links', pathMatch: 'full' },
// { path: '**', component: NoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
