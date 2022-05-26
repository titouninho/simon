import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Field from "../components/forms/Field";
import Select from "../components/forms/Select";
import customersAPI from "../services/customersAPI";
import invoicesAPI from "../services/invoicesAPI";

const InvoicePage = ({ history, match }) => {
  const { id = "new" } = match.params;

  const [invoice, setInvoice] = useState({
    amount: "",
    customer: "",
    status: "SENT",
  });

  const [customers, setCustomers] = useState([]);

  const [errors, setErrors] = useState({
    amount: "",
    customer: "",
    status: "",
  });

  const [editing, setEditing] = useState(false);

  const fetchCustomer = async () => {
    try {
      const data = await customersAPI.findAll();
      setCustomers(data);

      if (!invoice.customer) setInvoice({ ...invoice, customer: data[0].id });
    } catch (error) {
      toast.error("Impossible de Charger les clients !😠");
      history.replace("/invoices");
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchInvoice = async (id) => {
    try {
      const { amount, status, customer } = await invoicesAPI.find(id);

      setInvoice({ amount, status, customer: customer.id });
    } catch (error) {
      toast.error("Impossible de Charger la Facture Demandé !😠");
      history.replace("/invoices");
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchInvoice(id);
    }
  }, [id]);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editing) {
        await invoicesAPI.update(id, invoice);
        toast.success("La Facture a bien été modifiée !😄")
      } else {
        await invoicesAPI.create(invoice);
        toast.success("La Facture a bien été Crée !😄")
        history.replace("/invoices");
      }
    } catch (response) {
      const { violations } = response.data;
      if (violations) {
        const apiErrors = {};
        violations.forEach(({ propertyPath, message }) => {
          apiErrors[propertyPath] = message;
        });
        setErrors(apiErrors);
        toast.error("Des erreurs dans votre Formulaire !😠");
      }
    }
  };

  return (
    <>
      {(editing && <h1>Modification d'une Facture</h1>) || (
        <h1>Création d'une Facture</h1>
      )}

      <form onSubmit={handleSubmit}>
        <Field
          name="amount"
          label="Montant"
          placeholder="Montant de la Facture"
          value={invoice.amount}
          onChange={handleChange}
          errors={errors.amount}
        />
        &nbsp;
        <Select
          name="customer"
          label="Client"
          value={invoice.customer}
          error={errors.customer}
          onChange={handleChange}
        >
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.lastName} {customer.firstName}
            </option>
          ))}
        </Select>
        &nbsp;
        <Select
          name="status"
          label="Statut"
          value={invoice.status}
          error={errors.status}
          onChange={handleChange}
        >
          <option value="SENT">Envoyée</option>
          <option value="PAID">Payée</option>
          <option value="CANCELLED">Annulé</option>
        </Select>
        <div className="mb-5 mt-4 form-group">
          <button type="submit" className="btn btn-primary">
            Enregistrer
          </button>
          <Link to="/invoices" className="btn btn-link">
            Retour à la liste
          </Link>
        </div>
      </form>
    </>
  );
};

export default InvoicePage;
