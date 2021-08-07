import Axios from "axios";

const ID = '00e73_1QQGONXeZQa8AWmEbRwQulOdvASzvBr8rXs9E'; // past the API-key between quotes.

export default Axios.create({
  baseUrl: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ID}`
  }
});
