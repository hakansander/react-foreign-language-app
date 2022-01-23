import {getRequestApi, putRequestApi, deleteRequestApi, postRequestApi} from "../util/request";

const LANGUAGES_BASE_API_URL = 'http://localhost:8080/api/languages';

class LanguageService {
    getLanguages = () => {
        return getRequestApi(`${LANGUAGES_BASE_API_URL}`);
    }

    getLanguageById = (languageId) => {
        return getRequestApi(`${LANGUAGES_BASE_API_URL}/${languageId}`);
    }

    createLanguage(language){
        return postRequestApi(`${LANGUAGES_BASE_API_URL}`, language);
    }

    updateLanguage = (languageId, language) => {
        return putRequestApi(`${LANGUAGES_BASE_API_URL}/${languageId}`, language);
    }

    deleteLanguage = (languageId) => {
        return deleteRequestApi(`${LANGUAGES_BASE_API_URL}/${languageId}`);
    }
}

export default new LanguageService();