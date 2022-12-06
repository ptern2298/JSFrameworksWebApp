import React, { useState, useEffect } from 'react';
import ItemElement from './ItemElement';
import {Grid} from '@mui/material';

function ItemListView() {
    let frameworks = JSON.parse(localStorage.getItem('frameworks'))
    const [frameworkName, setFrameworkName] = useState(null);
    const [leadBy, setLeadBy] = useState(null);
    const [officialDocs, setOfficialDocs] = useState(null);

    useEffect( () => {
        frameworks = JSON.parse(localStorage.getItem('frameworks'))
        if(frameworks != null) {
            frameworks.forEach(framework => {
                setFrameworkName(framework.frameworkName);
                setLeadBy(framework.leadBy);
                setOfficialDocs(framework.officialDocs);
            })
        }
    })

    if(frameworks != null) {
        return (
            <Grid container justifyContent='center' spacing={3}>
                {frameworks.map((framework, key) => {
                    return(
                        <Grid key={key} item xs={8}>
                            <ItemElement
                                id={key}
                                frameworkName={framework.frameworkName}
                                leadBy={framework.leadBy}
                                officialDocs={framework.officialDocs}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        )
    } else {
        return(
            <div>Add some frameworks</div>
        )
    }
}

export default ItemListView;