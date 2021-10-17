document.addEventListener('DOMContentLoaded', ()=>{
    
    
    const handleDeleteAllClick = function(event) {
        const placesList = document.querySelector('#i-lived-in');
        placesList.innerHTML = '';
    }


    const handleNewPlaceSubmit = function(event) {
        event.preventDefault();

        const city = event.target.city.value;
        const country = event.target.country.value;
        const opinion = event.target.opinion.value;

        const newPlace = document.createElement('li');

        const cityElement = document.createElement('h3')
        cityElement.textContent = city;
        newPlace.appendChild(cityElement);

        const countryElement = document.createElement('h4');
        countryElement.textContent =country;
        newPlace.appendChild(countryElement);

        const opinionElement = document.createElement('h5')
        opinionElement.textContent = opinion;
        newPlace.appendChild(opinionElement);

        const placesList = document.querySelector('#i-lived-in');
        placesList.appendChild(newPlace);

        event.target.reset();
        

        
    }

    const theForm = document.querySelector('#my-form');
    theForm.addEventListener('submit', handleNewPlaceSubmit);

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener('click', handleDeleteAllClick)
})

