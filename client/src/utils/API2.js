import axios from "axios";

export default {
    login: function (userData) {
        return axios.post("/api/login/", userData);
    },
    signup: function (user) {
        return axios.post("/api/signup", user);
    },
    getUser: function () {
        return axios.post("/api/user_data");
    }
}