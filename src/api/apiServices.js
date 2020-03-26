import axios from "axios";

class Api {
    fetchResturant = async (requesData = "") => {
        try{
            const baseUrl = "http://starlord.hackerearth.com/TopRamen";
            const { data } = await axios.get(baseUrl);
            return data;
        }
        catch(e) {
            console.log(e)
        }
    }
}

const ApiService = new Api();
Object.freeze(ApiService);

export default ApiService;