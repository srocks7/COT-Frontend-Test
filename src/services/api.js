import { Path } from '../config/Path'
import axios from "axios";


const getCountryData = async () => {
    const { data } = await axios.get(`${Path.GET_COUNTRY_DATA}`);
    return data;
  };

  export default{
    getCountryData
  };