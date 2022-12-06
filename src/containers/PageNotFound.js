import React from 'react';
import MainPageHeader from '../components/MainPageHeader';

function PageNotFound() {
    return(
        <div>
            <MainPageHeader/>
            <div>
                <p>Error 404: page not found</p>
            </div>
        </div>
    )
}

export default PageNotFound;