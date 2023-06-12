
const DataRecentTransaction = ({img, costTransaction, costMember, costDate, costTime}) => {
    return (
        <div className="DataTransaction mt-1" id="DataTransaction">
            <div className="row">
                <div className="col-sm-2 col-lg-2">
                    <img src={img} alt="" />
                </div>
                <div className="col-sm-7 col-lg-7">
                     <span className="CostTransaction">{costTransaction}</span>
                     <p className="CostMember">{costMember}</p>
                </div>
                <div className="col-sm-3 col-lg-3">
                    <span className="CostDate">{costDate}</span>
                    <p className="CostDate">{costTime}</p>
                </div>
            </div>
        </div>
    )
}

export default DataRecentTransaction