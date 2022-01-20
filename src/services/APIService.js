import axios from 'axios';

export default {

    apiCall() {

        let call = axios.create({
            // baseURL: process.env.VUE_APP_API_BASE_URL,
            baseURL: 'https://pokeapi.co/api/v2'
        });
        
        call.interceptors.response.use(
            response => {
                if (response.status === 200 || response.status === 201) {
                    return Promise.resolve(response);
                } else {
                    return Promise.reject(response);
                }
            },
            error => {
                if (error.response && error.response.status) {
                    switch (error.response.status) {
                        case 401:
                        case 403:
                            // router.push({ name: 'nome_rota' });
                            break;
                    }
                    return Promise.reject(error.response);
                } else {
                    return Promise.reject(error);
                }
            },
        );
        
        return call;
    },
}