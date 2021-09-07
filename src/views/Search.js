import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import EventService from '../services/EventService';
import Card from '../components/Card';
import Border from '../components/Border';

const Search = () => {
    const [eventData, setEventData] = useState(null);
    const [searchValue, setSearchValue] = useState(null);
    const inputRef = useRef();
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (searchValue) {
            console.log(searchValue);

            EventService.fetchAll('title', 15, searchValue)
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
        <div className="pages-background search">
            <Navbar />
            <main className="search-main">
                <h1 className="title-large">Les évènements<span className="title-logo">À venir</span></h1>
                <span id="search-bar_container">
                    <input type="text" ref={inputRef} placeholder="Intitulé de l'évènement" id="search-bar" />
                </span>
                <button onClick={changeSearchValue}>Rechercher</button>

                <div className="results">{eventData && <h2 className="title-medium">Résultats de la recherche</h2>}

                    <div className="card-container">
                        {/* {errorMessage || eventData && <h2>Résultats de la recherche</h2>} */}
                        {errorMessage && <p className='error'>{errorMessage}</p>}
                        {eventData &&
                            eventData.map((event) => (
                                <Card key={event.record.id} id={event.record.id} fields={event.record.fields} />
                        ))}
                    </div></div>
            </main>
            <Border />
        </div>
    );
};

export default Search;