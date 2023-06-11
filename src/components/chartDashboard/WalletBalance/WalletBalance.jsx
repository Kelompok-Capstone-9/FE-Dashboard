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
            labels: {
                style: {
                    fontSize: '14px'
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
                    fontSize: '14px'
                }
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 15, // Mengatur border radius batang
            }
        }
    };

    const series = [
        {
            name: 'Data',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            colors: ['#FF0000', '#FFA500', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#800080', '#008000', '#000080', '#FF4500', '#00CED1']
        }
    ];


    return (
        <div className="WalletBalance mt-2" id="WalletBalance">
            <div style={{ display: "flex" }}>
                <span style={{ fontWeight: "600", fontSize: "20px" }}>Wallet Balance</span>
                <div className="detailWalletBalance" style={{ marginLeft: "10%" }}>
                    <img src={ikon} alt="ikon" />
                    <span style={{ fontWeight: "500", fontSize: "10px" }}>33,3% (Since last month)</span>
                </div>

            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>Rp.</span>
                <span style={{ marginLeft: "5px", fontWeight: "600", fontSize: "32px" }}>500.000.000</span>
            </div>
            <div style={{marginLeft:"1%"}}>
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width={640}
                    height={300}
                />
            </div>
        </div>
    )
}

export default WalletBalance