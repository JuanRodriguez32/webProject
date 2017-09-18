import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class BarChart extends Component{


	constructor(props){
		super(props);
		this.state = {
			  chartData:{
        labels: ['Tencent', 'Sony','Activision Blizzard', 'Microsoft', 'Apple', 'EA' , 'NetEase', 'Google','Bandai Namco','Nexon'],
        datasets:[
          {
            label:'2016 Revenue(Bn)',
            data:[
              4.9,
              3.4,
              3,
              3,
              2.7,
              2.6,
              1.9,
              1.8,
              1,
              0.8

            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)'

           
            ]
          },
          {
            label:'2017 Revenue(Bn)',
            data:[
              7.4,
              4.3,
              3.4,
              3.2,
              3,
              3,
              2.9,
              2.1,
              1.1,
              1

            ],
            backgroundColor:[
              
              'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(54, 162, 235, 0.6)'
             
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
					text: 'Top 10 company profits',
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

export  default BarChart;