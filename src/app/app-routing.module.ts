import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NoneComponent } from './none/none.component';
import { onestyleComponent } from './onestyle/onestyle.component';

const routes: Routes = [{ path: 'onestyle', component: onestyleComponent },
// { path: '**', component: NoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
