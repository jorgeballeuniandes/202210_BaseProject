import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPlantaComponent } from './plantas/listar-planta/listar-planta.component';

const routes: Routes = [{ path: 'plantas', component:  ListarPlantaComponent},
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
