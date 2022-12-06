const ItemElementAPI = {

    addItemElementToLocalStorage: (framework) => {
        let frameworks;
        if(localStorage.getItem('frameworks') === null) {
            frameworks = []
        } else { frameworks = JSON.parse(localStorage.getItem('frameworks')) }

        frameworks.push(framework);
        localStorage.setItem('frameworks', JSON.stringify(frameworks));
    },

    getAllElementsToLocalStorage: () => {
        return JSON.parse(localStorage.getItem('frameworks'));
    }

}

export default ItemElementAPI;