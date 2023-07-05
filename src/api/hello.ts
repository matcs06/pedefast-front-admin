import axios from "axios";
//  baseURL: "http://localhost:3333/",
let instace = axios.create({
  baseURL: "https://api.pedefast.com/",

});

export default instace