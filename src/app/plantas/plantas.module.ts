import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPlantaComponent } from './listar-planta/listar-planta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ListarPlantaComponent ],
  declarations: [ ListarPlantaComponent ]
})
export class PlantasModule { }
