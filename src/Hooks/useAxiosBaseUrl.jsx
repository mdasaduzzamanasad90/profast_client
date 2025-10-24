import axios from "axios";

const axiosbaseurl = axios.create({
     baseURL: 'http://localhost:3000'
})
const useAxiosBaseUrl = () => {
    return axiosbaseurl;
};

export default useAxiosBaseUrl;