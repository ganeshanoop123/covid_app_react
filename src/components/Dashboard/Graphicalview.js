import { set } from 'mongoose';
import react, {useState} from 'react'
import { Bar } from 'react-chartjs-2';
export default function Graphicalview(props){
    const data = {
        labels: ['Total Cases','Total Active Cases','Recovered Cases','Total Deaths'],
        datasets: [
            {
                label: "cases",
                data: [props.covid_cases.cases,props.covid_cases.active,props.covid_cases.recovered,props.covid_cases.deaths],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return(
        <div className="graphical-view">
            <div className="d-flex align-items-center close-graph justify-content-between">
                <h1 className="text-white font-weight-bold">
                    COVID-19
                </h1>
                <div>
                    <div className="d-block pull-right mr-3" onClick={props.closeGraphical}>
                        <i className="fa fa-times-circle text-white fs-26"></i>
                    </div>
                </div>
            </div>
            <div>
                <Bar width={100}
	height={43}
	options={{ maintainAspectRatio: true }}
 data={data} options={options} />
            </div>
        </div>
    )
}