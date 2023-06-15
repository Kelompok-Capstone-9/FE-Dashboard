

const ListTransaction = ({idInvoice, date, imgRecipient, recipient, amount, type, location, status}) => {
    return(
        <div className="d-flex flex-row justify-content-between p2-2 pe-2">
            <p>{idInvoice}</p>
            <p>{date}</p>
            <div className="d-flex flex-row">
                <img className="rounded-circle" style={{width:'4vw'}} src={imgRecipient} alt={recipient} />
                <p>{recipient}</p>
            </div>
            <p>{amount}</p>
            <p>{type}</p>
            <p>{location}</p>
            <p>{status}</p>
        </div>
    )
}

export default ListTransaction