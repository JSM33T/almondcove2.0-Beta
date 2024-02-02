import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function acPostData(apiUrl: string, data: any) {
    try {
        // if (tokenElement) {
        //     const token = tokenElement.value;
        //     axios.defaults.headers.common['RequestVerificationToken'] = token;
        // }
        
        const response = await axios.post(apiUrl, data);
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
        // if (!tokenElement) {
        //     return { type: 'error', message: 'Anti-forgery token element not found' };
        // }
        // const token = tokenElement.value;
        // axios.defaults.headers.common['RequestVerificationToken'] = token;
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