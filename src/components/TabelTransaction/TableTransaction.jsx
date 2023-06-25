/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Table, Pagination, Button } from 'react-bootstrap';
import TagStatus from '../../elements/Tag/TagStatus';
import Income from '../../assets/icons/income.svg'
import Outcome from '../../assets/icons/outcome.svg'
import Status from '../../pages/Invoices/Status';
import { useNavigate } from 'react-router';

// eslint-disable-next-line react/prop-types
const TableTransaction = ({ invoices, page, setPage, totalPages }) => {

    const navigate = useNavigate()

    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'ascending'
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const sortTable = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedInvoices = [...invoices].sort((a, b) => {
        if (sortConfig.key) {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
        }
        return 0;
    });

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentInvoices = sortedInvoices.slice(indexOfFirstItem, indexOfLastItem);
    const showingFrom = indexOfFirstItem + 1;
    const showingTo = Math.min(indexOfLastItem, sortedInvoices.length);

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(sortedInvoices.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
        }
    };

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedInvoices.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (id) => {
        navigate(`/transaction/${id}`)
    }

    //untuk convert date dari bentuk dd/mm/yyyy ke mount date
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric'};
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }

    //untuk convert waktu dari 24 jam ke AM/PM
    function formatTime(dateString) {
        const date = new Date(dateString);
        const options = { hour: 'numeric', minute: 'numeric'};
        const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedTime;
    }

    const handlePaginations = (value) => {
        const newPagination = page + parseInt(value);
        if (newPagination > 0 && newPagination <= totalPages) {
            setPage(newPagination);
        }
    }

    return (
        <>
        <Table hover className="rounded-3 bg-white">
            <thead>
                <tr>
                    <th onClick={() => sortTable('id')}>ID Invoice</th>
                    <th onClick={() => sortTable('date')}>Date</th>
                    {/* <th onClick={() => sortTable('recipient')}>Recipient</th> */}
                    <th onClick={() => sortTable('product')}>Product</th>
                    <th onClick={() => sortTable('amount')}>Amount</th>
                    {/* <th onClick={() => sortTable('type')}>Type</th>
                    <th onClick={() => sortTable('location')}>Location</th> */}
                    <th onClick={() => sortTable('payment_method')}>Payment Method</th>
                    <th onClick={() => sortTable('status')}>Status</th>
                </tr>
            </thead>
            <tbody>
                {currentInvoices.map((invoice) => (
                    <tr key={invoice.id} onClick={() => handleClick(invoice.id)}>
                        <td>{invoice.transaction_code}</td>
                        <td>{formatDate(invoice.metadata.updated_at)}, {formatTime(invoice.metadata.updated_at)}</td>
                        <td>{invoice.product}</td>
                        <td>{invoice.amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                        <td>{invoice.payment_method.name}</td>
                        {/* {
                            invoice.type == 'Income' ? 
                            <td>
                                <img src={Income} alt="" className='mx-2 p-1' style={{ border: '2px solid var(--success-500)', borderRadius: '50%' }} />
                                {invoice.type}
                            </td>:
                            <td>
                            <img src={Outcome} alt="" className='mx-2 py-2 px-1' style={{ border: '2px solid var(--Danger-500)', borderRadius: '50%' }}/>
                            {invoice.type}
                        </td>
                        }
                        <td>{invoice.location}</td> */}
                        <td>
                            <Status status={invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        {/* <Pagination className="d-flex justify-content-between">
            <p>showing {showingFrom} to {showingTo} of {sortedInvoices.length} entries</p>
            <div className="d-flex flex-row">
                <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} className='me-2 rounded-3'>Previous</Pagination.Prev>
                {pageNumbers.map((number) => (
                    <Pagination.Item
                        key={number}
                        active={number === currentPage}
                        onClick={() => handlePageChange(number)}
                    >
                        {number}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={handleNextPage} disabled={currentPage === Math.ceil(sortedInvoices.length / itemsPerPage)} className='ms-2' c>Next</Pagination.Next>
            </div>
        </Pagination> */}
        <div className='d-flex justify-content-between'>
            <div>
                showing 1 to 10 from {totalPages} entries
            </div>
            <div className="d-flex gap-2 align-items-center">
                <Button onClick={() => handlePaginations(-1)} variant='outline' style={{color: 'var(--primary-500)' ,border: '1px solid var(--primary-500)'}}>
                    {/* <img src={IconArrowBack} alt="" /> */}
                    Prev
                </Button>
                {
                    page <= totalPages && page > 2 && (
                        <Button variant='outline' onClick={() => setPage(page - 2)} style={{color: 'var(--primary-500)' ,border: '1px solid var(--primary-500)'}}>
                            {page - 2}
                        </Button>
                    )
                }
                {
                    page != 1 && (
                        <Button variant='outline' onClick={() => setPage(page - 1)} style={{color: 'var(--primary-500)' ,border: '1px solid var(--primary-500)'}}>
                            {page - 1}
                        </Button>
                    )
                }
                <Button className="border-0 text-white"  style={{backgroundColor: 'var(--primary-500)'}}>
                    {page}
                </Button>
                {
                    page <= totalPages - 1 && (
                        <Button variant='outline' onClick={() => setPage(page + 1)} style={{color: 'var(--primary-500)' ,border: '1px solid var(--primary-500)'}}>
                            {page + 1}
                        </Button>
                    )
                }
                {
                    page <= totalPages - 2 && (
                        <Button variant='outline' onClick={() => setPage(page + 2)} style={{color: 'var(--primary-500)' ,border: '1px solid var(--primary-500)'}}>
                            {page + 2}
                        </Button>
                    )
                }
                <Button onClick={() => handlePaginations(1)} variant='outline' style={{color: 'var(--primary-500)' ,border: '1px solid var(--primary-500)'}}>
                    {/* <img src={IconArrowNext} alt="" /> */}
                    Next
                </Button>
            </div>
        </div>
        </>
    );
};

export default TableTransaction;
