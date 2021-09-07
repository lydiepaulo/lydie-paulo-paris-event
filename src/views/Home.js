import React from 'react';
import Navbar from '../components/Navbar';
import Border from '../components/Border';
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
        <div class="pages-background home">
            <Navbar />
            <main class="home-main">
                <h1 class="title-large">Bienvenue sur<span class="title-logo">Paris Events</span></h1>
                <h2>L'application qui permet de chercher en direct les prochains évènements parisiens</h2>

                <h3 class="title-medium">Dernier évènement publié :</h3>
            </main>
            <Border />
        </div>
    )
}

export default Home;