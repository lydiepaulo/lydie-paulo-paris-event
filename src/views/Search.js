import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import EventService from '../services/EventService';
import Card from '../components/Card';
import Border from '../components/Border';

const Search = () => {
    const [eventData, setEventData] = useState(null);
    const [searchValue, setSearchValue] = useState(null);
    const inputRef = useRef();

    useEffect(() => {
        if (searchValue) {
            console.log(searchValue);

            EventService.fetchAll('title', 15, searchValue)
                .then((apiResult) => {
                    setEventData(apiResult);
                    console.log(apiResult);
                })
        }
    }, [searchValue]);

    function changeSearchValue() {
        setSearchValue(inputRef.current.value);
    }

    function onKeyPress(event) {
        if(event.key === 'Enter'){
            event.preventDefault()
            setSearchValue(inputRef.current.value);
        }
    }

        return (
            <div className="pages-background search">
                <Navbar />
                <main className="search-main">
                    <h1 className="title-large">Les évènements<span className="title-xl">À venir</span></h1>
                    <form className="search-bar__container">
                        <span>
                            <input type="text" ref={inputRef} placeholder="Intitulé de l'évènement" id="search-bar" name="search" onKeyPress={onKeyPress} />
                        </span>
                        <button type="button" onClick={changeSearchValue}>Rechercher</button>
                    </form>

                    <div className="results">{eventData && <h2 className="title-medium smooth-apparition">Résultats de la recherche</h2>}

                        <div className="card-container">
                            {eventData && eventData.length === 0 && <p className="error smooth-apparition">Il n'y a aucun résultat pour cette recherche</p>}
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