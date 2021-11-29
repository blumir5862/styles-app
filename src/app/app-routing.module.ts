import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NoneComponent } from './none/none.component';
import { onestyleComponent } from './onestyle/onestyle.component';
import { twostyleComponent } from './twostyle/twostyle.component';

const routes: Routes = [
  { path: 'onestyle', component: onestyleComponent, },
  { path: 'twostyle', component: twostyleComponent, },
// { path: '**', component: NoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
