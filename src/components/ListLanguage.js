import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LanguageService from '../services/LanguageService'

const ListLanguage = () => {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        LanguageService.getLanguages();
    }, [])

    const getAllLanguages = () => {
        LanguageService.getAllLanguages().then((response) => {
            setLanguages(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteLanguage = (employeeId) => {
       LanguageService.deleteLanguage(employeeId).then((response) =>{
        getAllLanguages();

       }).catch(error =>{
           console.log(error);
       })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Languages </h2>
            <Link to = "/add-language" className = "btn btn-primary mb-2" > Add Language </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Language Id </th>
                    <th> Language Name </th>
                    <th> Language Short Name </th>
                </thead>
                <tbody>
                    {
                        languages.map(
                            language =>
                            <tr key = {language.id}>
                                <td> {language.id} </td>
                                <td> {language.firstName} </td>
                                <td> {language.lastName} </td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-language/${language.id}`} > Update </Link>

                                    <button className = "btn btn-danger"
                                            onClick = {() => deleteLanguage(language.id)}
                                            style = {{marginLeft:"10px"}}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListLanguage
