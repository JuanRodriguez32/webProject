import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class LineChart extends Component{


	constructor(props){
		super(props);
		this.state = {
			  chartData:{
        labels: ['2013','2014', '2015','2016', '2017'],
        datasets:[
          {
            label:'revenue Chinese Market (Bn)',
            data:[
              13.8,
              19,
              18.2,
              24.6,
              27.5
             
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          },
            {          
            label:'revenue US Market (Bn)',
            data:[
              15,
              12,
              16,
              19,
              25
             
            ],
             backgroundColor:[
             'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
            
        ]
      }
		}
	}



		static defaultProps ={
			displayTitle : true,
			displayLegend: true,
			legendPosition: 'right',
			location: 'City'
		}


	render(){
		return (
			<div className = "chart">
			
			<Line
			data = {this.state.chartData}
			
			options = {{

				title: {
					display : this.props.displayTitle,
					text: 'Chinese Revenue vs. US Revenue (YoY - Bn)',
					fontSize: 25
				},
				legend :{
					display	: this.props.displayLegend,
					position: this.props.legendPosition
				}

			}}
			/>

			
			</div> 
			)
	}
}

export  default LineChart;