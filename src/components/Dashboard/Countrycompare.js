import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import ReactApexChart from "react-apexcharts";
export default class Countrycompare extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cases: [],
            active: [],
            recovered: [],
            deaths: [],
            loading: false,
            series: [
                {
                    name: 'Total Cases',
                    data: []
                }, 
                {
                    name: 'Total Active Cases',
                    data: []
                }, 
                {
                    name: 'Total Recovered Cases',
                    data: []
                }, 
                {
                    name: 'Total Deaths',
                    data: []
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
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
                plotOptions: {
                    bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#1E90FF','#00FF7F','#FFD700','#FF0000'],
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    labels: {
                        fontSize: '12px',
                        style: {
                            colors: ["#fff","#fff","#fff","#fff"]
                        },
                    },
                    categories: this.props.list
                },
                yaxis: {
                    labels: {
                        fontSize: '12px',
                        style: {
                            colors: ["#fff","#fff","#fff","#fff"]
                        },
                    },
                    title: {
                    text: '$ (thousands)'
                    }
                },
                fill: {
                    opacity: 1
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
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            },
        
        };
    }
    render() {
        return (
            <div id="chart">
                {this.state.loading === false ?
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={550} />
                    : <BarLoader color={this.state.color} loading={this.state.loading} css={this.state.css} className="mt-30 bg-white text-white" size={150} /> 
                }     
            </div>
        );
    }
    componentDidMount(){
        this.state.series[0].data = this.props.update_country.map(x => {return x.cases})
        this.state.series[1].data = this.props.update_country.map(x => {return x.active})
        this.state.series[2].data = this.props.update_country.map(x => {return x.recovered})
        this.state.series[3].data = this.props.update_country.map(x => {return x.deaths})
    }
}