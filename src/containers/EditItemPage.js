import React, { useState, useEffect } from 'react';
import MainPageHeader from '../components/MainPageHeader';
import ItemElementAPI from "../functions/ItemElementAPI";
import {Button, TextField} from "@mui/material";

function EditItemPage() {

    let frameworks, index
    const [frameworkName, setFrameworkName] = useState(null);
    const [leadBy, setLeadBy] = useState(null);
    const [officialDocs, setOfficialDocs] = useState(null);

    function addToLocalStorage(name, leadBy, docs) {
        let framework = { frameworkName: name, leadBy: leadBy, officialDocs: docs };
        frameworks[index] = framework;
        localStorage.setItem('frameworks', JSON.stringify(frameworks));
    }

    function getFrameworkName(event) {
        setFrameworkName(event.target.value)
    }

    function getLeadBy(event) {
        setLeadBy(event.target.value)
    }

    function getOfficialDocs(event) {
        setOfficialDocs(event.target.value)
    }

    function saveFramework() {
        console.log(frameworkName);
        addToLocalStorage(frameworkName, leadBy, officialDocs)
    }

    useEffect(() => {
        frameworks = JSON.parse(localStorage.getItem('frameworks'));
        index = window.location.pathname.split('/')[2];
    })

    return (
        <div>
            <div>
                <MainPageHeader/>
            </div>
            <div>
                <h3>Edit framework</h3>
            </div>
            <div>
                <form>
                    <TextField id='outlined-basic' label='Framework name' variant='outlined' onChange={ event => getFrameworkName(event) }/>
                    <TextField id='outlined-basic' label='Lead by' variant='outlined' onChange={event => getLeadBy(event) }/>
                    <TextField id='outlined-basic' label='Official docs url' variant='outlined' onChange={ event => getOfficialDocs(event) }/>
                </form>
            </div>
            <div>
                <Button variant='outlined' color='success' href='/' onClick={() => { saveFramework() }} >Save</Button>
                <Button variant='outlined' color='error' href='/'>Cancel</Button>
            </div>
        </div>
    )
}
export default EditItemPage;