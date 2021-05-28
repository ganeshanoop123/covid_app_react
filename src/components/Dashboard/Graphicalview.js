import react, {useState} from 'react'
import ReactApexChart from "react-apexcharts";
export default class Graphicalview extends react.Component{
    constructor(props){
        super(props)

        this.state = {
          
            series: [{
                data: [this.props.covid_cases.cases,this.props.covid_cases.active,this.props.covid_cases.recovered,this.props.covid_cases.deaths],
            }],
            options: {
                responsive: [{
                    breakpoint: undefined,
                    options: {},
                }],                
                grid: {
                    show: true,
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }, 
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }, 
                },    
                chart: {
                    height: 550,
                    type: 'bar',
                },
                colors: ['#1E90FF','#00FF7F','#FFD700','#FF0000'],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: true,
                    position: "top",
                    labels: {
                        style: {
                            colors: ["#fff","#fff","#fff","#fff"]
                        },
                        useSeriesColors: true
                    },
                    itemMargin: {
                        horizontal: 35,
                        vertical: 0
                    },
                },
                xaxis: {
                    categories: [
                        ['Total Cases'],['Total Active Cases'],['Total Recovered Cases'],['Total Deaths']
                    ],
                    labels: {
                        fontSize: '12px',
                        style: {
                            colors: ["#fff","#fff","#fff","#fff"]
                        },
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: ["#fff","#fff","#fff","#fff"]
                        },
                    }
                }
            },  
        };
    }
    render(){
        return(
            <div className="graphical-view">
                <div className="d-flex align-items-center close-graph justify-content-between">
                    <h1 className="text-white font-weight-bold">
                        COVID-19
                    </h1>
                    <div>
                        <div className="d-block pull-right mr-3" onClick={this.props.closeGraphical}>
                            <i className="fa fa-times-circle text-white fs-26"></i>
                        </div>
                    </div>
                </div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={550} />
                </div>
            </div>
        )            
    }
}