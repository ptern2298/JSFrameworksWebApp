import React, { useState } from 'react';
import MainPageHeader from '../components/MainPageHeader';
import { Button, TextField } from '@mui/material';
import ItemElementAPI from '../functions/ItemElementAPI';

function AddItemPage() {

    const [frameworkName, setFrameworkName] = useState(null);
    const [leadBy, setLeadBy] = useState(null);
    const [officialDocs, setOfficialDocs] = useState(null);


    function addToLocalStorage(name, leadBy, docs) {
        let framework = { frameworkName: name, leadBy: leadBy, officialDocs: docs };
        ItemElementAPI.addItemElementToLocalStorage(framework);
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

    return(
        <div>
            <div>
                <MainPageHeader/>
            </div>
            <div>
                <h3>Add new framework</h3>
            </div>
            <div>
                <form>
                    <TextField id='outline-basic' label='Framework name' variant='outline' onChange={event => getFrameworkName(event)}/>
                    <TextField id='outline-basic' label='Lead by' variant='outline' onChange={event => getLeadBy(event)}/>
                    <TextField id='outline-basic' label='Official docs url' variant='outline' onChange={event => getOfficialDocs(event)}/>
                </form>
            </div>
            <div>
                <Button variant='outlined' color='success' href='/' onClick={() => { saveFramework() }} >Save</Button>
                <Button variant='outlined' color='error' href='/'>Cancel</Button>
            </div>
        </div>
    )
}

export default AddItemPage;
