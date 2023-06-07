import "../Dashboard/Dashboard.css"
import CardDashboard from "../../elements/Card/CardDashboard"
import img from "../../assets/img/arrows_more_up.svg"
import dashboard1 from "../../assets/img/dashboard1.svg"
import dashboard2 from "../../assets/img/dashboard2.svg"
import dashboard3 from "../../assets/img/dashboard3.svg"
import dashboard4 from "../../assets/img/dashboard4.svg"
//import OrderChart from "../../components/chartDashboard/orderChart"


const Dashboard = () => {
    return (
        <>
            <div className="container dashboard">
                <div className="row gy-2">
                    <div className="col-lg-3">
                        <CardDashboard
                            text1={"Net Profit"}
                            text3={"Rp. 300.000.000"}
                            img1={img}
                            text6={" + Rp. 500.000.000"}
                            text7={" Since last month"}
                            img2={dashboard1}
                        />
                    </div>
                    <div className="col-lg-3">
                        <CardDashboard
                            text1={"We already have"}
                            text2={"up to "}
                            text3={"20 coach"}
                            text7={" (In all area)"}
                            img2={dashboard2}
                        />
                    </div>
                    <div className="col-lg-3">
                        <CardDashboard
                            text1={"Total Partners"}
                            text3={"30"}
                            text4={" Gym Places"}
                            img1={img}
                            text6={" +10"}
                            text7={" Since last month (In Java Island)"}
                            img2={dashboard3}
                        />
                    </div>
                    <div className="col-lg-3">
                        <CardDashboard
                            text1={"Total membership"}
                            text3={"1500"}
                            text5={" (Members)"}
                            img1={img}
                            text6={"+ 150 Member"}
                            img2={dashboard4}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">

                    </div>
                    <div className="col-lg-5">
                        <div className="orderChart">
                            <p className="textOrderChart">Application  Order Chart</p>

                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard