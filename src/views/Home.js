import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Border from '../components/Border';
import EventService from '../services/EventService';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    const [lastEvent, setLastEvent] = useState(null);

    useEffect(() => {
        EventService.fetchAll('updated_at', 1)
            .then((apiResult) => {
                setLastEvent(apiResult);
                console.log(apiResult);
            });
        /* .catch((err) => setErrorMessage('Aucun résultat pour cette recherche')); */
    }, []);

    return (
        <div className="pages-background home">
            <Navbar />
            <main className="home-main">
                <div>
                    <h1 className="title-large">Bienvenue sur<span className="title-logo">Paris Events</span></h1>
                    <h2>L'application qui permet de chercher en direct les prochains évènements parisiens</h2>
                </div>

                <div class="flex">
                    <div>
                        <h3 className="title-medium">Actualité</h3>
                        <p>Découvrir le dernier évènement publié :</p>
                    </div>
                    {lastEvent &&
                        lastEvent.map((event, { id }) => (
                            <Link to={{ pathname: "/event", search: `${id}` }}>
                                <Card key={event.record.id} id={event.record.id} fields={event.record.fields} />
                            </Link>
                        ))}
                </div>
            </main>
            <Border />
        </div>
    )
}

export default Home;