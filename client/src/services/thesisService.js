import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL + '/theses';

const thesisService = {
    getAllThesis: async () => {
        try {
            const respone = await axios.get(apiUrl + '/');
            return respone.data;
        } catch (error) {
            console.error(error);
        }
    },
    getThesisById: async (id) => {
        try {
            const respone = await axios.get(apiUrl + `/${id}`);
            return respone.data;
        } catch (error) {
            console.error(error);
        }
    },
    
};

export default thesisService;
