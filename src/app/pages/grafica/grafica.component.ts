import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { GraficasService } from './../../services/graficas.service';
import { WebsocketService } from './../../services/websocket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0 ], label: 'Lenguajes' }
 
  ];
  public lineChartLabels: Label[] = ['Angular', 'React', 'Vue', 'Jsp'];

  constructor(private graService: GraficasService,
              private wsService: WebsocketService) { }

  ngOnInit(): void {
    this.getData();
    this.escucharSocket();
  }

  escucharSocket() {
    this.wsService.listen('cambio-grafica').subscribe( (resp: any) => {
    
      this.lineChartData = resp;
    });

  }

  getData() {
    this.graService.getData().subscribe( (resp: any) => {
      this.lineChartData = resp;
    });
  }

  votoPor(len : string ) {
    this.graService.postData(len).subscribe ( () => {}  );
  }

}
