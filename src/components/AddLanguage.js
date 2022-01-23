import React, {useState, useEffect} from 'react'

import {Link, useHistory, useParams } from 'react-router-dom';

import LanguageService from '../services/LanguageService'

const AddLanguage = () => {

    const {id} = useParams();
    const [name, setName] = useState('')
    const [shortName, setShortName] = useState('')
    const history = useHistory();

    const saveOrUpdateLanguage = (e) => {
        e.preventDefault();

        const language = {name, shortName}

        if (id) {
            LanguageService.updateLanguage(id, language).then((response) => {
                history.push('/languages')
            }).catch(error => {
                console.log(error)
            })

        } else{
            LanguageService.createLanguage(language).then((response) =>{
                console.log(response.data)

                history.push('/languages');

            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        LanguageService.getLanguageById(id).then((response) =>{
            setName(response.data.name)
            setShortName(response.data.shortName)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {
        if (id) {
            return <h2 className = "text-center">Update Language</h2>
        }else{
            return <h2 className = "text-center">Add Language</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Short Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter short name"
                                        name = "shortName"
                                        className = "form-control"
                                        value = {shortName}
                                        onChange = {(e) => setShortName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateLanguage(e)} > Submit </button>
                                <Link to="/languages" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddLanguage
