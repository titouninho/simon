import Axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { async } from 'regenerator-runtime';
import Pagination from '../components/Pagination';
import invoicesAPI from '../services/invoicesAPI';

const STATUS_CLASSES ={
    PAID: "primary",
    SENT: "info",
    CANCELLED: "danger"
};

const STATUS_LABELS = {
    PAID: "Payée",
    SENT: "Envoyée",
    CANCELLED: "Annulée"
}

const InvoicesPage = (props) => {

    const [invoices, setInvoices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const fetchInvoices = async () => {
        try {
            const data = await invoicesAPI.findAll();
            setInvoices(data);
        } catch (error) { 
            console.log(error.response);
        }
    }

    const handleDelete = async id =>{

        const originalInvoices = [...invoices];

        setInvoices(invoices.filter(invoice => invoice.id !== id))

        try {
            await invoicesAPI.delete(id);
        } catch (error) {
            console.log(error.response);
            setInvoices(originalInvoices);
        }
    };

    useEffect(() => {
        fetchInvoices();
    }, []);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    const handleSearch = ({ currentTarget }) => {
        setSearch(currentTarget.value);
        setCurrentPage(1);
    };

    const filteredInvoices = invoices.filter(
        i => 
        i.customer.firstName.toLowerCase().includes(search.toLowerCase()) ||
        i.customer.lastName.toLowerCase().includes(search.toLowerCase()) ||
        i.amount.toString().includes(search.toLowerCase()) ||
        STATUS_LABELS[i.status].toLowerCase().includes(search.toLowerCase())
        );

    const FormatDate = (str) => moment(str).format('DD/MM/YYYY')
    const itemsPerPage = 14;

    const paginatedInvoices = Pagination.getData(filteredInvoices, currentPage, itemsPerPage);

    return ( <>
    
        <h1>Liste des Factures</h1>

        <div className="form-group">
            <input type="text" onChange={handleSearch} value={search} className="form-control" placeholder="Rechercher ..." />
        </div>

        <table className="table table-hover">
            <thead>
                <tr>
                    <th className='text-center'>Numéro</th>
                    <th className='text-center'>Client</th>
                    <th className='text-center'>Date D'envoi</th>
                    <th className='text-center'>Status</th>
                    <th className='text-center'>Montant</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {paginatedInvoices.map(invoice =>  <tr key={invoice.id}>
                    <td className='text-center'>{invoice.chrono}</td>
                    <td className='text-center'>
                        <a href="#">{invoice.customer.firstName} {invoice.customer.lastName}</a>
                    </td>
                    <td className='text-center'>{FormatDate(invoice.sentAt)}</td>
                    <td className='text-center'>
                        <span className={"badge bg-" + STATUS_CLASSES[invoice.status]}>{STATUS_LABELS[invoice.status]}</span>
                    </td >
                    <td className='text-center'>{invoice.amount.toLocaleString()}€</td>
                    <td>
                        <button className="btn btn-sm btn-primary">Modifier</button>&nbsp;
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(invoice.id)}>Supprimer</button>
                    </td>
                </tr> )}
            </tbody>
        </table>

        <Pagination 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
        onPageChanged={handlePageChange} 
        length={filteredInvoices.length} />

    
    </>
    );
}
 
export default InvoicesPage;