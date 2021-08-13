import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';

const routes: Routes = [
  {
    path: 'prueba',
    component: PruebaComponent
  },
  { path: '', redirectTo: 'prueba', pathMatch: 'full' },
  { path: '**', redirectTo: 'prueba' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
