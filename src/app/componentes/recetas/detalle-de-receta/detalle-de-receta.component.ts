import {Component, Input, OnInit} from '@angular/core';
import {Receta} from "../../receta.model";

@Component({
  selector: 'app-detalle-de-receta',
  templateUrl: './detalle-de-receta.component.html',
  styleUrls: ['./detalle-de-receta.component.css']
})
export class DetalleDeRecetaComponent implements OnInit {

  @Input() receta: Receta;

  constructor() { }

  ngOnInit() {
  }

}
