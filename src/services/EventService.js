import axios from 'axios';

const API_CALL = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records';

const EventService = {
    // Récupérer le tableau des collaborateur depuis le serveur
    fetchAll(sortValue, limitValue, searchValue) {
        let url = `${API_CALL}?sort=${sortValue}&limit=${limitValue}`;

        if (searchValue) {
            url += `&search=${searchValue}`;
        }

        return axios
            .get(url)
            .then((response) => response.data.records)
            .catch(errorHandler);
    },

    // Récupérer l'id
    fetchId(id) {
        let url = `${API_CALL}/${id}`;
        return axios
            .get(url)
            .then((response) => {
                return response.data.record
            })
            .catch(errorHandler);
    },
};

const errorHandler = (err) => {
    console.log(err);
};

export default EventService;
