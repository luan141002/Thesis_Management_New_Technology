import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL + '/auths';

const authService = {

    signIn: async (data) => {
        try {
            const respone = await axios.post(apiUrl + '/signin', {
                email: data.email,
                password: data.password,
            });
            return respone.data;
        } catch (error) {
            console.error(error);
        }
    },

    logout: (data) => {
        try {
            const respone = axios.post(apiUrl + '/logout', data);
            console.log(respone.data);
            return respone.data;
        } catch (error) {
            console.error(error);
        }
    },
};

export default authService;
