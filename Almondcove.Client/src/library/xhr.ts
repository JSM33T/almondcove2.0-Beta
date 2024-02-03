import axios from "axios";
async function acPostData(apiUrl: string, data) {
    try {        
        const response = await axios.post(process.env.REACT_APP_API_HOST + apiUrl, data);
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

async function acGetData(apiUrl: string) {
    try {
        const response = await axios.get(apiUrl);
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

export {acGetData,acPostData};