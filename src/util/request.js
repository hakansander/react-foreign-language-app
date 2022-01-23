import axios from "axios";

const getRequestApi = (url, data, options) => {
    return requestApi('GET', url, data, options);
};

const postRequestApi = (url, data, options) => {
    return requestApi('POST', url, data, options);
};

const putRequestApi = (url, data, options) => {
    return requestApi('PUT', url, data, options);
};

const deleteRequestApi = (url, data, options) => {
    return requestApi('DELETE', url, data, options);
};

const requestApi = (type, url, data, _options) => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: type,
            data: data,
            timeout: 100000000,
            baseURL: url
        })
            .then((response) => {
                if (response.status === 200 || response.status === 201) {
                    resolve(response.data);
                }
            })
            .catch((error) => {
                reject(error.response);
            });
    });
};

export { getRequestApi, postRequestApi, putRequestApi, deleteRequestApi };