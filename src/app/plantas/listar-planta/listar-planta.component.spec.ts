/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { faker} from '@faker-js/faker';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ListarPlantaComponent } from './listar-planta.component';
import { Planta } from 'src/app/class/planta'

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarPlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;
    component.plantas = [
      new Planta ( faker.datatype.number(), faker.datatype.string(), faker.datatype.string(), faker.datatype.string(), faker.datatype.number(), faker.datatype.string(), faker.datatype.string()),
      new Planta ( faker.datatype.number(), faker.datatype.string(), faker.datatype.string(), faker.datatype.string(), faker.datatype.number(), faker.datatype.string(), faker.datatype.string()),
      new Planta ( faker.datatype.number(), faker.datatype.string(), faker.datatype.string(), faker.datatype.string(), faker.datatype.number(), faker.datatype.string(), faker.datatype.string())
    ]

    // component.plantas = [
    //   new Planta ( 1, 'planta 1', 'nombre cientifico planta 1', 'Interior', 120, 'Templado, cálido', 'Tierra orgánica con buen drenaje, arena, cascarilla de arroz'),
    //   new Planta ( 2, 'planta 2', 'nombre cientifico planta 2', 'Exterior', 20, 'Templado', 'Tierra orgánica con buen drenaje'),
    //   new Planta ( 1, 'planta 3', 'nombre cientifico planta 3', 'Interior', 180, 'Cálido', 'Arena, cascarilla de arroz')
    // ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
