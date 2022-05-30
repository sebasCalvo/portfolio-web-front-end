import { Component, OnInit } from '@angular/core';
import { PortfofolioService } from 'src/app/servicios/portfofolio.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacionLista:any;
  constructor(private datosPortfolio: PortfofolioService) 
  { }

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe( data => {
      console.log(data.educacion);
      this.educacionLista = data.educacion;
    });
  }

}
