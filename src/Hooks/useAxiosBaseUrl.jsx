import axios from "axios";

const axiosbaseurl = axios.create({
     baseURL: 'https://some-domain.com/api/'
})
const useAxiosBaseUrl = () => {
    return axiosbaseurl;
};

export default useAxiosBaseUrl;