import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Field from "../components/forms/Field";
import { async } from "regenerator-runtime";
import customersAPI from "../services/customersAPI";
import { toast } from "react-toastify";

const CustomerPage = (props) => {
  const { id = "new" } = props.match.params;

  const [customer, setCustomer] = useState({
    lastName: "",
    firstName: "",
    email: "",
    company: "",
  });

  const [errors, setErrors] = useState({
    lastName: "Le nom est Obligatoire",
    firstName: "Le Prenom est Obligatoire",
    email: "L'email est Obligatoire",
    company: "",
  });

  const [editing, setEditing] = useState(false);

  const fetchCustomer = async (id) => {
    try {
      const { firstName, lastName, email, company } = await custumersAPI.find(
        id
      );

      setCustomer({ firstName, lastName, email, company });
    } catch (error) {
      toast.error("Le client n'a pas pu être chargé !😠");
      props.history.replace("/customers");
    }
  };
  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      try {
        const data = fetchCustomer(id);
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    }
  }, [id]);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setErrors({});
      if (editing) {
        await customersAPI.update(id, customer);
        toast.success("Le clients a bien été modifié !😄");
      } else {
        await customersAPI.create(customer);
        toast.success("Le clients a bien été crée !😄");

        props.history.replace("/customers");
      }

    } catch (response) {
      const { violations } = response.data;
      if (violations) {
        const apiErrors = {};
        violations.forEach(({ propertyPath, message }) => {
          apiErrors[propertyPath] = message;
        });
        setErrors(apiErrors);
      }
      toast.error("Des Erreurs dans votre Formulaire !😠")
    }
  };

  return (
    <>
      {(!editing && <h1>Création d'un client</h1>) || (
        <h1>Modification du Client</h1>
      )}

      <form onSubmit={handleSubmit}>
        <Field
          name="lastName"
          label="Nom de Famille"
          placeholder="Nom de Famille du Client"
          value={customer.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        &nbsp;
        <Field
          name="firstName"
          label="Prénom"
          placeholder="Prénom du Client"
          value={customer.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        &nbsp;
        <Field
          name="email"
          label="Email"
          placeholder="Adresse Email du Client"
          type="email"
          value={customer.email}
          onChange={handleChange}
          error={errors.email}
        />
        &nbsp;
        <Field
          name="company"
          label="Entreprise"
          placeholder="Entreprise du Client"
          value={customer.company}
          onChange={handleChange}
          error={errors.company}
        />
        &nbsp;
        <div className="mb-5 form-group">
          <button type="submit" className="btn btn-primary">
            Enregistrer
          </button>
          <Link to="/customers" className="btn btn-link">
            Retour à la liste
          </Link>
        </div>
      </form>
    </>
  );
};

export default CustomerPage;
