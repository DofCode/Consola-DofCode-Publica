import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    anio_actual: number;
  constructor() { }

  ngOnInit() {
    var fecha = new Date();
    this.anio_actual = fecha.getFullYear();
  }

}
