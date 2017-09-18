import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends Component{


	constructor(props){
		super(props);
		this.state = {
			  chartData:{
        labels: ['North America', 'USA','Latin America', 'Europe, middle-east, Africa', 'China', 'Asia-Pacific'],
        datasets:[
          {
            label:'revenue YoY (Bn)',
            data:[
              23.8,
              22.0,
              4.0,
              20.5,
              22.2,
              43.1
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
			<Bar
			data = {this.state.chartData}
			
			options = {{

				title: {
					display : this.props.displayTitle,
					text: 'Revenue games Market ' + this.props.location,
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

export  default Chart;