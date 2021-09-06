import React from 'react';
import Navbar from '../components/Navbar';
/* import EventService from '../services/EventService'; */

const Home = () => {
    /* const [people, setPeople] = useState(null);

    useEffect(() => {
        EventService.fetchAll()
            .then((peopleData) => {
                setPeople(peopleData);
                console.log(peopleData);
            })
            .catch((err) => setErrorMessage('Erreur serveur : Impossible de récupérer les collaborateurs'));
    }, []); */

    return (
        <div>
            <Navbar />
            <h1>Bienvenue sur Paris Events</h1>
            <p>L'application qui permet de chercher en direct les prochains évènements parisiens</p>

            <h2>Actualité</h2>
            <p>Le dernier évènement publié</p>


        </div>
    )
}

export default Home;