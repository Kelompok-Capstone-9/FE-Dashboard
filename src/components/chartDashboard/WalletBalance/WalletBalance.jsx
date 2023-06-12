import React from 'react';
import Chart from 'react-apexcharts';
import "../../chartDashboard/ChartDashboard.css"
import ikon from "../../../assets/img/ikon_walletBalance.svg"

const WalletBalance = () => {
    const options = {
        chart: {
            id: 'column-chart',
            toolbar: {
                show: false
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false // Menghilangkan garis pada sumbu x
            },
            labels: {
                style: {
                    fontFamily: 'Josefin Sans, sans-serif',
                    fontSize: '14px'
                }
            },
            axisTicks: {
                show: false,
                showAlways: false
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontFamily: 'Josefin Sans, sans-serif',
                    fontSize: '14px'
                }
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 15,
                colors: {
                    backgroundBarColors: ['#FFDB99'],
                    backgroundBarRadius: 15
                  }
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: ['#FF7F00'],
        }
    };

    const series = [
        {
            name: 'Data',
            data: [30, 40, 30, 60, 50, 60, 70, 80, 130, 100, 110, 120]
        },
    ];


    return (
        <div className="WalletBalance mt-2" id="WalletBalance">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "600", fontSize: "20px" }}>Wallet Balance</span>
                <div className="detailWalletBalance">
                    <img src={ikon} alt="ikon" />
                    <span style={{ fontWeight: "500", fontSize: "10px" }}>33,3% (Since last month)</span>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>Rp.</span>
                <span style={{ marginLeft: "5px", fontWeight: "600", fontSize: "32px" }}>500.000.000</span>
            </div>
            <div style={{ marginTop: "-2%" }}>
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width={640}
                    height={300}
                    className="column-wallet-balance"
                />
            </div>
        </div>

    )
}

export default WalletBalance