import Axios from "axios";

function register(user){
    return Axios.post(
        "/api/users",
        user
      );
}

export default{
    register
}