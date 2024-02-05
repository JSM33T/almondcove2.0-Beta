import axios from "axios";
async function acPostData(apiUrl: string, data) {
    try {        
        const token = localStorage.getItem('token');
        if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.post(import.meta.env.VITE_HOST + apiUrl, data);
        console.log(process.env.REACT_APP_API_HOST);
        return { type: 'ok', data: response.data };
    } catch (error) {
        if (error) {
            return { type: 'error', data: error.response.data };
        }
        else {
            return { type: 'error', data: "Something went wrong" };
        }
    }
}

// async function acGetData(apiUrl: string) {
//     try {
//         const token = localStorage.getItem('token');
//         if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         const response = await axios.post(import.meta.env.VITE_HOST + apiUrl);
        
//         return { type: 'ok', data: response.data };
//     } catch (error) {
//         if (error) {
//             return { type: 'error', data: error.response.data };
//         }
//         else {
//             return { type: 'error', data: "Something went wrong" };
//         }
//     }
// }


async function acGetData(apiUrl: string) {
    try {        
        const response = await axios.get(import.meta.env.VITE_HOST + apiUrl);
        console.log(response);
        return { type: 'ok', data: response.data };
    } catch (error) {
        console.log(error);
        if (error.response) {
            return { type: 'error', data: error.response.data };
        } else {
            return { type: 'error', data: "Something went wrong" };
        }
    }
}


export {acGetData,acPostData};