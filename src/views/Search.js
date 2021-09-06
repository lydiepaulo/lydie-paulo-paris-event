import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import EventService from '../services/EventService';
import Card from '../components/Card';

const Search = () => {
    const [eventData, setEventData] = useState(null);
    const [searchValue, setSearchValue] = useState(null);
    const inputRef = useRef();
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (searchValue) {
            console.log(searchValue);

            EventService.fetchAll(searchValue)
                .then((apiResult) => {
                    setEventData(apiResult);
                    console.log(apiResult);
                })
                .catch((err) => setErrorMessage('Aucun résultat pour cette recherche'));
        }
    }, [searchValue]);

    function changeSearchValue() {
        setSearchValue(inputRef.current.value);
    }

    return (
        <div>
            <Navbar />
            <main>
                <h1>Lister de futurs évènements à Paris</h1>
                <span id="search-bar_container">
                    <input type="text" ref={inputRef} placeholder="Titre de l'évènement" id="search-bar" />
                </span>
                <button onClick={changeSearchValue}>Rechercher</button>
                <div class="card-container">
                    {errorMessage /* || filteredPeople */ && <h2>Résultats de la recherche</h2>}
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    {eventData &&
                        eventData.map((event) => (
                            <Card key={event.record.id} id={event.record.id} fields={event.record.fields} />
                        ))}
                </div>
            </main>
        </div>
    );
};

export default Search;