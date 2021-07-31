import axios from 'axios'

const axiosBase = ({ baseUrl } = { baseUrl: ''}) => async ({
    url,
    method,
    data,
    headers,
    body,
    params,
}) => { 
    try {
        const { data: response } = await axios({
            url: baseUrl + url,
            method,
            data,
            headers,
            body,
            params,
        })
        return response
    } catch (error) {
        return error
    }
}
export default axiosBase