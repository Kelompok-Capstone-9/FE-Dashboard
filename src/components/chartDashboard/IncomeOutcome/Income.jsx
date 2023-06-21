import '../ChartDashboard.css'
import React from 'react';
import Chart from 'react-apexcharts';
import income from "../../../assets/img/ikon_income.svg"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"
const Income = () => {

    const token = useSelector((state) => state.tokenAuth.token_jwt);
    const [incomeData, setIncomeData] = useState([]);
    const [JanFeb, setJanFeb] = useState();
    const [MarApr, setMarApr] = useState();
    const [MeiJun, setMeiJun] = useState();
    const [JulAug, setJulAug] = useState();
    const [SepOct, setSepOct] = useState();
    const [NovDec, setNovDec] = useState();

    useEffect(() => {
        axios
            .get("http://18.141.56.154:8000/admin/classes/tickets", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setIncomeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [token]);

    const CalculateData = () => {
        
    }



    const options = {
        chart: {
            id: 'area-chart',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            selection: {
                enabled: false
            },
            pan: {
                enabled: false
            },
            resetZoom: {
                enabled: false
            }
        },
        xaxis: {
            categories: ['1/2', '3/4', '5/6', '7/8', '9/10', '11/12'],
            axisBorder: {
                show: false
            },
            labels: {
                style: {
                    fontSize: '10px'
                }
            },
            axisTicks: {
                show: false,
                showAlways: false
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '10px'
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: ['#0D6A50']
        },

    };

    const series = [
        {
            name: 'Series 1',
            data: [2000, 800, 1500, 1300, 500, 900],
            strokeColor: '#0D6A50'
        }
    ];

    return (
        <div className="IncomeDashboard" id="IncomeDashboard">
            <div style={{ display: "flex"}} className="">
                <span style={{ fontWeight: "600", fontSize: "14px" }}>Income</span>
                <div className="detailIncome" style={{marginLeft:"45%"}}>
                    <img src={income} alt="income" />
                    <span style={{ fontWeight: "500", fontSize: "10px"}}>+Rp 50.000.000</span>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontWeight: "600", fontSize: "12px" }}>Rp.</span>
                <span style={{ marginLeft: "5px", fontWeight: "600", fontSize: "20px" }}>500.000.000</span>
            </div>

            <Chart
                options={options}
                series={series}
                type="area"
                height={"70%"}
                width={"70%"}
                className="area-chart-income"
                style={{ marginTop: "-20px" }}
            />
        </div>
    );
}

export default Income

