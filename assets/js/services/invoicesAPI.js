import Axios from "axios";

function findAll() {
  return Axios.get("http://127.0.0.1:8888/api/invoices").then(
    (response) => response.data["hydra:member"]
  );
}

function deleteInvoices(id) {
  return Axios.delete("http://127.0.0.1:8888/api/invoices/" + id);
}

function create(invoice) {
  return Axios.post("http://127.0.0.1:8888/api/invoices", {
    ...invoice,
    customer: `/api/customers/${invoice.customer}`,
  });
}

function find(id) {
  return Axios.get("http://localhost:8888/api/invoices/" + id).then(
    (response) => response.data
  );
}

function update(id, invoice) {
  return Axios.put("/api/invoices/" + id, {
    ...invoice,
    customer: `/api/customers/${invoice.customer}`,
  });
}

export default {
  findAll,
  delete: deleteInvoices,
  create,
  update,
  find,
};
