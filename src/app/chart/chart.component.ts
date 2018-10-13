import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart = [];

  constructor(private _chart: ChartService) { }

  ngOnInit() {
    this._chart.getChart()
      .subscribe(res => {
        console.log(res);
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let alldates = res['list'].map(res => res.dt);
        //console.log(alldates);
        let chartDates = [];
        alldates.forEach((res) => {
            let jsdate = new Date(res * 1000);
            chartDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        });
        //console.log(chartDates);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: chartDates,
            datasets: [
              {
                data: temp_max,
                borderColor: "#3cba9f",
                fill: false
              },
              {
                data: temp_min,
                borderColor: "#ffcc00",
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      });
  }

}
