import { Injectable } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
@Injectable({
    'providedIn': 'root',
})
export class ChartSettingService {

    private getRandomColors(len: number) {
        let colors: Array<string> = [];
        for (let i = 1; i <=len; i++) {
            colors.push(this.rainbow(len, i));
        }
        return colors;
    }

    public getChartColors(chartType: ChartType, len: number){
        switch(chartType){
            case 'line':
                return this.getLineChartColor(len);
            case 'bar':
            case 'polarArea':
            case 'pie':
                return this.getBarPiePolarChartColor(len);
            default:
                return [];
        }
    }

    private getBarPiePolarChartColor(len: number){
        let chartColors = [];

        let colors = this.getRandomColors(len);
      chartColors.push({
        backgroundColor: colors
      });
    return chartColors;
           
    }

    private getLineChartColor(len: number){
        let chartColors = [];
        let colors = this.getRandomColors(len);
       colors.forEach(color => {
            let rgb = this.hexToRgb(color);
            chartColors.push(
            { 
                backgroundColor: 'rgba('.concat(rgb, ', 0.2)'),
                borderColor: 'rgba('.concat(rgb, ', 1)'),
                pointBackgroundColor: 'rgba('.concat(rgb, ', 0.9)'),
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba('.concat(rgb, ', 0.7)'),
              }
            )
            });
            console.log(chartColors);
       return chartColors;
       
    }
    public getChartOptions(chartType: string){
        switch(chartType){
            case 'line': 
                return this.getLineChartOptions();
            case 'bar':
                return this.getBarChartOptions();
            case 'pie':
                return this.getPieChartOptions();
            case 'polarArea':
                return this.getPolarChartOptions();
            default: 
                return [];
        }
    }

    private rainbow(numOfSteps, step): string {
        // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
        // Adam Cole, 2011-Sept-14
        // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        var r, g, b;
        var h = step / numOfSteps;
        var i = ~~(h * 6);
        var f = h * 6 - i;
        var q = 1 - f;
        switch (i % 6) {
            case 0: r = 1; g = f; b = 0; break;
            case 1: r = q; g = 1; b = 0; break;
            case 2: r = 0; g = 1; b = f; break;
            case 3: r = 0; g = q; b = 1; break;
            case 4: r = f; g = 0; b = 1; break;
            case 5: r = 1; g = 0; b = q; break;
        }
        let c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
        return c;
    }
    private hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return  parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16);

    }

    private getLineChartOptions() {
        let chartOptions: (ChartOptions & { annotation: any }) = {
            responsive: true,
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                xAxes: [{}],
                yAxes: [
                    {
                        id: 'y-axis-0',
                        position: 'left',
                    },
                    {
                        id: 'y-axis-1',
                        position: 'right',
                        gridLines: {
                            color: 'rgba(255,0,0,0.3)',
                        },
                        ticks: {
                            fontColor: 'red',
                        }
                    }
                ]
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            fontColor: 'orange',
                            content: 'LineAnno'
                        }
                    },
                ],
            },
        };

        return chartOptions;
    }

    private getBarChartOptions() {
     let barChartOptions: ChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: { xAxes: [{}], yAxes: [{}] },
            plugins: {
              datalabels: {
                anchor: 'end',
                align: 'end',
              }
            }
          };

          return barChartOptions;
    }

    private getPieChartOptions() {
        let pieChartOptions: ChartOptions = {
            responsive: true,
            legend: {
                position: 'top',
            },
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        const label = ctx.chart.data.labels[ctx.dataIndex];
                        return label;
                    },
                },
            }
        };

        return pieChartOptions;
    }

    private getPolarChartOptions(){
        return [];
    }

}