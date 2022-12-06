import React from 'react';
import MainPageHeader from'../components/MainPageHeader';
import ItemListView from '../components/ItemListView';

function MainPage() {
    return(
        <div>
            <MainPageHeader/>
            <ItemListView/>
        </div>
    )
}

export default MainPage;