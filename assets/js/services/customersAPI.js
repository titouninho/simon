import Axios from "axios";

function findAll(){
    return Axios
        .get("/api/customers")
        .then(response =>response.data['hydra:member'])
}

function find(id){
    return Axios
        .get("/api/customers/" + id)
        .then(response => response.data);
}

function deleteCustomer(id){
    return axios
        .delete("/api/customers/" + id)
}

function update(id, customer){
    return Axios
    .put("/api/customers/" + id , customer);
}

function create(customer){
    return Axios
    .post("/api/customers", customer);
}

export default{
    findAll,
    delete : deleteCustomer,
    find,
    update,
    create
}