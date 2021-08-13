import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  persons: IPerson[] = [];

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.loadData()
      .subscribe(x => {
        this.persons = x;
      });
  }

  printInConsole() {
    console.clear();
    if (!this.persons || this.persons.length === 0) {
      console.error('No se ha encontrado data para mostrar');
    } else {
      this.persons.forEach(p => {
        console.info(`El email de ${p.first_name} ${p.last_name} es: ${p.email}`);
      });
    }
    alert('Revisar el resultado en la consola del navegador')
  }

}
