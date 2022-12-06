import React, { useState } from 'react';
import MainPageHeader from '../components/MainPageHeader';
import { Button, TextField } from '@mui/material';
import ItemElementAPI from '../functions/ItemElementAPI';

function AddItemPage() {

    const [frameworkName, setFrameworkName] = useState(null);
    const [leadBy, setLeadBy] = useState(null);
    const [officialDocs, setOfficialDocs] = useState(null);

    function saveFramework() {
        console.log(frameworkName);
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
                    <TextField id='outline-basic' label='Framework name' variant='outline' onChange={}/>
                    <TextField id='outline-basic' label='Lead by' variant='outline' onChange={}/>
                    <TextField id='outline-basic' label='Official docs url' variant='outline' onChange={}/>
                </form>
            </div>
            <div>
                <p>Buttons</p>
            </div>
        </div>
    )
}

export default AddItemPage;
