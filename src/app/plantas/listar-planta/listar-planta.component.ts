import { Component, OnInit } from '@angular/core';
import { Planta } from 'src/app/class/planta';
import { PlantaService } from 'src/app/services/planta.service';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {

  plantas: Array<Planta>=[];
  cantidadPlantasInterior: number;
  cantidadPlantasExterior: number;

  constructor( private plantaService: PlantaService ) {
    this.cantidadPlantasInterior = 0;
    this.cantidadPlantasExterior = 0;
   }

  getPlanta():void{
    this.plantaService.getPlantas().subscribe((planta)=>{
      this.plantas = planta;
      this.cantidadPlantasInterior = this.plantas.filter(o => o.tipo == 'Interior').length;
      this.cantidadPlantasExterior = this.plantas.filter(o => o.tipo == 'Exterior').length;
    })
  }

  ngOnInit() {
    this.getPlanta();
  }

}
